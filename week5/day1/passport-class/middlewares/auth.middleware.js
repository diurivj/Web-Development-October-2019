exports.isLoggedIn = (req, res, next) => {
  // if (req.isAuthenticated()) {
  //   return next();
  // } else {
  //   return res.redirect("/login");
  // }
  req.isAuthenticated() ? next() : res.redirect("/login");
};

exports.isNotLoggedIn = (req, res, next) => {
  !req.isAuthenticated() ? next() : res.redirect("/profile");
};

exports.checkRole = role => (req, res, next) => {
  if (req.user.role === role) {
    return next();
  } else {
    return res.send("No te confundas 💁‍♀️");
  }
};
