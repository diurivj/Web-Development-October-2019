const { model, Schema } = require("mongoose");

const photoSchema = new Schema(
  {
    title: String,
    description: String,
    imgName: String,
    imgPath: String
  },
  { timestamps: true }
);

module.exports = model("Photo", photoSchema);
