const User = require("../models/User");
const Favor = require("../models/Favor");

exports.askGet = (req, res, next) => {
  res.render("needy/ask");
};

exports.askPost = async (req, res, next) => {
  const { _id } = req.user;
  const {
    lngStarting,
    latStarting,
    lngEnding,
    latEnding,
    description,
    starting_point: startingAddress,
    ending_point: endingAddress,
    round_trip: isRound
  } = req.body;
  const doGooders = await User.find({ role: "Do-Gooder" });
  const rnd = Math.floor(Math.random() * doGooders.length);
  const doGooder = doGooders[rnd];
  const favor = {
    needy_id: _id,
    do_gooder_id: doGooder._id,
    starting_point: {
      address: startingAddress,
      coordinates: [lngStarting, latStarting]
    },
    ending_point: {
      address: endingAddress,
      coordinates: [lngEnding, latEnding]
    },
    description,
    round_trip: isRound === "on" ? true : false
  };

  const favorCreated = await Favor.create(favor);
  const userUpdated = await User.findByIdAndUpdate(
    _id,
    { $push: { favors: favorCreated._id } },
    { new: true }
  );
  const dogooderUpdated = await User.findByIdAndUpdate(
    doGooder._id,
    { $push: { favors: favorCreated._id } },
    { new: true }
  );
  req.user = userUpdated;
  res.redirect("/needy/profile");
};

exports.favorGet = async (req, res, next) => {
  const { id } = req.params;
  const favor = await Favor.findById(id).populate("do_gooder_id");
  res.render("needy/favor", favor);
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
  res.redirect("/needy/profile");
};
