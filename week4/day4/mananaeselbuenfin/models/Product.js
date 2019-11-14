const { model, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: String,
    categories: [String],
    description: String,
    photoURL: String,
    price: Number
  },
  {
    timestamps: true
  }
);

module.exports = model("Product", productSchema);
