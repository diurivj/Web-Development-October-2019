const Place = require("../models/Place");

exports.createGet = (_, res) => {
  res.render("user/create");
};

exports.createPost = async (req, res, next) => {
  const { _id } = req.user;
  const place = await Place.create({ ...req.body, author: _id });
  console.log(place);
  res.redirect("/");
};
