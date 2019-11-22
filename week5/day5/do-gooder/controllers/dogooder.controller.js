const Favor = require("../models/Favor");

exports.favorGet = async (req, res, next) => {
  const { id } = req.params;
  const favor = await Favor.findById(id).populate("needy_id");
  res.render("do-gooder/favor", favor);
};

exports.favorPost = async (req, res, next) => {
  const { id } = req.params;
  const favorUpdated = await Favor.findByIdAndUpdate(
    id,
    {
      $set: { isActive: false }
    },
    { new: true }
  );
  res.redirect("/do-gooder/profile");
};

exports.activeGet = async (req, res, next) => {
  const actives = await Favor.find({
    $and: [{ isActive: true }, { do_gooder_id: req.user._id }]
  });
  res.render("do-gooder/actives", { actives });
};
