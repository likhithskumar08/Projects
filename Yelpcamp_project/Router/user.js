const express = require("express");
const router = express.Router();
const passport = require("passport");
const catchAsync = require("../views/utilities/CatchAsync");

const user = require("../controllers/user");

router
  .route("/register")
  .get(user.renderRegister)
  .post(catchAsync(user.register));

router.get("/new", user.renderNew);

router
  .route("/login")
  .get(user.renderLogin)
  .post(
    passport.authenticate("local", {
      failureFlash: true,
      failureRedirect: "/login",
    }),
    user.renderlogin
  );

router.get("/logout", user.renderLogout);

module.exports = router;
