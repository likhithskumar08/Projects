const express = require("express");
const router = express.Router();

const catchAsync = require("../views/utilities/CatchAsync");
const campgrounds = require("../controllers/campground");

const multer = require('multer');
const {storage} = require('../cloudinary')
const upload = multer({storage});


const { isLoggedIn, validateCampground, isAuthor } = require("../middleware");

//refering to index.ejs to show all the contents i.e campgrounds list
router.route("/")
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'),validateCampground, catchAsync(campgrounds.post)); //submitting new campground data


//creating a camp ground-new
router.get("/new", isLoggedIn, catchAsync(campgrounds.new));

//refering to show.ejs - to show contents once user clicks on that link
router.get("/:id", catchAsync(campgrounds.show));

//edit
router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(campgrounds.edit));


router.put(
  "/:id",
  isLoggedIn,
  isAuthor,
  upload.array('image'),
  validateCampground,
  catchAsync(campgrounds.update)
);

router.delete("/:id", isLoggedIn, isAuthor, catchAsync(campgrounds.delete));

module.exports = router;
