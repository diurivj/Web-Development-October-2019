const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    facebookId: String,
    aboutMe: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("User", userSchema);
