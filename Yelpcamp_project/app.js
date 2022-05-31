const express = require('express');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const catchAsync = require('./views/utilities/CatchAsync');
const { campgroundSchema, reviewSchema } = require('./schemas');
const methodOverride = require('method-override');
const expressError = require('./views/utilities/expressError');
const Campground = require('./models/campground');
const review = require('./models/review');


mongoose.connect('mongodb://localhost:27017/yelp-camp')
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.use(express.urlencoded({ extended: true }))//mandatory for post request
app.use(methodOverride('_method'));

const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new expressError(msg, 400)
    } else {
        next();
    }
}

const ValidateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new expressError(msg, 400)
    } else {
        next();
    }
}


app.get('/', (req, res) => {
    // res.send('home')
    console.log('working');
    res.render('home')
})
//creating a camp ground-new
app.get('/campgrounds/new', catchAsync(async (req, res) => {
    res.render('campgrounds/new');
}))
//refering to index.ejs to show all the contents i.e campgrounds list
app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    console.log('campgrounds');
    res.render('campgrounds/index', { campgrounds });
}))
//refering to show.ejs - to show contents once user clicks on that link
app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews')
    console.log(campground);
    res.render('campgrounds/show', { campground });
}));
//edit
app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
}))

//submitting new campground data
app.post('/campgrounds', validateCampground, catchAsync(async (req, res, next) => {
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
}));

app.put('/campgrounds/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`)
}))

app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}))

app.post('/campgrounds/:id/reviews', ValidateReview, catchAsync(async (req, res) => {
    // res.send('works')
    const campground = await Campground.findById(req.params.id);
    // console.log(req.body.Review);
    const reviews = new review(req.body.Review);
    console.log(reviews)
    campground.reviews.push(reviews);
    await reviews.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))

app.delete('/campgrounds/:id/reviews/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
}))


app.use('*', (req, res, next) => {
    next(new expressError('Page not found!!', 404));
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})

app.listen(3000, () => {
    console.log("listening on the port 3000!");
})