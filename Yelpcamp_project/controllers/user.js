const User = require("../models/user");

module.exports.renderRegister = (req, res) => {
  res.render("Auth/register");
};

module.exports.register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", "Welcome to Yelp-camp!");
      res.redirect("/campgrounds");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("register");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("Auth/login");
};

module.exports.renderNew = (req, res) => {
  if (!req.isAuthenticated()) {
    req.flash("error", "You must be signed in");
    return res.redirect("/login");
  }
  res.render("compgrounds/new");
};

module.exports.renderlogin = (req, res) => {
  req.flash("success", "welcome back!");
  // const redirectUrl = req.session.returnTo || '/campgrounds';
  delete req.session.returnTo;
  res.redirect("/campgrounds");
};

module.exports.renderLogout = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "GoodBye!");
    res.redirect("/campgrounds");
  });
};
