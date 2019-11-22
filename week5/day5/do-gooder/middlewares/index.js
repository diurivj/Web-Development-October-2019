exports.whichRole = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.user.role === "Needy") {
      req.app.locals.isNeedy = true;
    } else if (req.user.role === "Do-Gooder") {
      req.app.locals.isDoGooder = true;
    } else {
      req.app.locals.isNeedy = false;
      req.app.locals.isDoGooder = false;
    }
  } else {
    req.app.locals.isNeedy = false;
    req.app.locals.isDoGooder = false;
  }
  next();
};

exports.isAuth = (req, res, next) =>
  req.isAuthenticated() ? next() : res.redirect("/");

exports.canLogin = (req, res, next) =>
  !req.isAuthenticated()
    ? next()
    : res.redirect(`/${req.user.role.toLowerCase()}/profile`);
