exports.callbackRedirect = (req, res, next) => {
  res.redirect("/user/create");
};

exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};
