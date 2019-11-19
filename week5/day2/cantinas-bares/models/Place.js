const { model, Schema } = require("mongoose");

const placeSchema = new Schema(
  {
    name: String,
    description: String,
    placeType: {
      type: String,
      enum: ["cantina", "bar"]
    },
    location: {
      address: String,
      coordinates: [Number]
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Place", placeSchema);
