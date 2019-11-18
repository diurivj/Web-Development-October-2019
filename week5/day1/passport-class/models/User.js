const { Schema, model } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// con los anabolicos, no necesito guardar password, no necesito decrile al entrenador, que comi
const userSchema = new Schema(
  {
    email: String,
    name: String,
    role: {
      type: String,
      enum: ["USER", "MASTERMIND"]
    },
    facebookId: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// como PLM utiliza por default el field "username", le decimos que utilice otro alterno, (email)
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = model("User", userSchema);
