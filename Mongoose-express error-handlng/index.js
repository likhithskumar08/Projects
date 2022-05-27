const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/Farmstand')
    .then(() => {
        console.log('Mongo Connection open!');
    }).catch(err => {
        console.log('Oh no connection Error!');
        console.log('err');
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/products', async (req, res) => {
    try {
        const { category } = req.query;
        if (category) {
            const products = await product.find({ category })
            res.render('products/index', { products, category })
        } else {
            const products = await product.find({ category })
            res.render('products/index', { products, category: 'All' })
        }
    }
    catch (e) {
        next(e)
    }
})

// app.get('/products', async (req, res) => {
//     const products = await product.find({})
//     // console.log(products)
//     res.render('products/index', { products })
// })
app.get('/products/new', (req, res) => {
    res.render('products/new');
})


//setting up the route for submit
app.post('/products', async (req, res) => {
    const newProduct = new product(req.body);//should be product not prosucr1 or Product
    await newProduct.save();
    console.log(newProduct);
    // console.log(req.body);// the entried user make will be printed out at terminal 
    res.redirect(`/products/${newProduct._id}`)//after submitting this will be shown in webpage, we have used string literals
})

const handleValidationError = err => {
    console.log(err);
    return new Apperror(`Validation failed.....${err.message}`, 400)
}


app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'validationError') err = handleValidationError(err)
    next(err)
})

//show.js
app.get('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product1 = await product.findById(id);// product is defined in product.js, will be imported to seeds.js and in seeds.js the array is appended to product. here we are searching product by single id. and assigning it to new product1 variable.
        // console.log(product1)
        if (!product) {
            throw new Apperror('product not found', 404);
        }
        res.render('products/shows', { product1 }) //RENDER shows.js from input product1
    }
    // res.send('Details page!')
    catch (e) {
        next(e)
    }
})
// app.get('/products/:id', async (req, res, next) => {
//     const { id } = req.params;
//     const product1 = await product.findById(id);// product is defined in product.js, will be imported to seeds.js and in seeds.js the array is appended to product. here we are searching product by single id. and assigning it to new product1 variable.
//     // console.log(product1)
//     // res.send('Details page!')
//     if (!product1) {
//         next(new Apperror('Product not found', 404));
//     }
//     res.render('products/shows', { product1 }) //RENDER shows.js from input product1
// })

// edit
app.get('/products/:id/edit', async (req, res, next) => {
    const { id } = req.params;
    const product2 = await product.findById(id);// product is defined in product.js, will be imported to seeds.js and in seeds.js the array is appended to product. here we are searching product by single id. and assigning it to new product1 variable.
    // console.log(product2)
    // res.send('Details page!')
    if (!product2) {
        next(new Apperror('Product not found', 404));
    }
    res.render('products/edit', { product2 }) //RENDER shows.js from input product1
})
app.use((err, req, res, next) => {
    const { status = 500, message = 'something went wrong' } = err;
    res.status( status ).send( message );
})
app.listen(4000, () => {
    console.log("App is listening on port 4000!")
})