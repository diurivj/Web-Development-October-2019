const Photo = require("../models/Photo");

exports.homeView = async (req, res) => {
  const photos = await Photo.find();
  throw new Error("Joss me rompió");
  res.render("index", { photos });
};
