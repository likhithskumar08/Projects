const express = require("express");
const router = express.Router({ mergeParams: true });

const review = require('../controllers/reviews')

const catchAsync = require("../views/utilities/CatchAsync");

const {
  validateReviews,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware");

router.post(
  "/",
  validateReviews,
  isLoggedIn,
  catchAsync(review.post)
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(review.delete)
);

module.exports = router;
