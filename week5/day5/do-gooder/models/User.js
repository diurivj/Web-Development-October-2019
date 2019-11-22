const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    facebook_id: {
      type: String
    },
    google_id: {
      type: String
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    role: {
      type: String,
      required: true,
      enum: ["Needy", "Do-Gooder"],
      default: "Needy"
    },
    photoURL: {
      type: String,
      default:
        "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
    },
    telephone_number: {
      type: String,
      required: true,
      trim: true
    },
    favors: [
      {
        type: Schema.Types.ObjectId,
        ref: "Favor"
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
