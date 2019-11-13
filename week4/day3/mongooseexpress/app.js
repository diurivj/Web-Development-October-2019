const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static(`${__dirname}/public`));
app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

mongoose
  .connect("mongodb://localhost/exampleApp", { useNewUrlParser: true })
  .then(() => console.log("conectado a la base de datos"))
  .catch(err => console.log(`algo se rompió: ${err}`));

const mainRoutes = require("./routes");
app.use("/", mainRoutes);

app.listen(3000, () => console.log("http://localhost:3000"));
