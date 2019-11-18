const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = model("Book", bookSchema);
