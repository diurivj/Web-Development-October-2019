const { model, Schema } = require("mongoose");

const sellerSchema = new Schema(
  {
    name: String,
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product"
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Seller", sellerSchema);
