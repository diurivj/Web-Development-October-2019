// const { model } = require("mongoose");
// // El modelo es una representación de un modelo de mongoose, que agrega lo métodos y require del esquema (de nuestra forma ideal del registro)
// const Cat = model("Cat", { name: String });

const Cat = require("../models/Cat");

//exporto cada función como una propiedad a las rutas
exports.home = async (req, res) => {
  const cats = await Cat.find();
  // Generamos un registro en mongo
  // const gatito = new Cat({ name: "felix" });
  // gatito.save();
  // Cat.create({name: 'simon'})
  res.render("index", { cats });
};

exports.createCat = (req, res) => {
  // pelusa
  Cat.create({ name: "Pelusa" });
  res.redirect("/");
};

exports.felixPage = async (req, res) => {
  //Se puede actualizar el elemento posterior al findOne
  const felix = await Cat.findOne({ name: "felix" });
  felix.age = 4;
  await felix.save();
  res.render("felix", felix);
};

exports.changeName = async (req, res) => {
  await Cat.findByIdAndUpdate("5dcc4abbad7276183aefde89", { name: "Ginger" });
  res.redirect("/");
};

exports.byePelusa = async (req, res) => {
  await Cat.findByIdAndDelete("5dcc592f9d7c6a1dacebc9ac");
  res.redirect("/");
};
