const { Schema, model } = require("mongoose");

const catSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, default: "BLACK", enum: ["BLACK", "WHITE", "CREAM"] },
  age: Number
});

module.exports = model("Cat", catSchema);
