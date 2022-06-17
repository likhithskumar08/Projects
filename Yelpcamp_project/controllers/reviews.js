const Campground = require("../models/campground");
const review = require("../models/review");

module.exports.post = async (req, res) => {
  // res.send('works')
  const campground = await Campground.findById(req.params.id);
  // console.log(req.body.Review);
  const reviews = new review(req.body.review);
  reviews.author = req.user;
  console.log(review);
  // console.log(reviews);
  campground.reviews.push(reviews);
  await reviews.save();
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.delete = async (req, res) => {
  const { id, reviewId } = req.params;
  await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await review.findByIdAndDelete(reviewId);
  res.redirect(`/campgrounds/${id}`);
};
