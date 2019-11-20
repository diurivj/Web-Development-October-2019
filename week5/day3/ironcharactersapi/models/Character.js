const { model, Schema } = require("mongoose");

const characterSchema = new Schema(
  {
    name: String,
    weapon: String
  },
  {
    timestamps: true
  }
);

module.exports = model("Character", characterSchema);
