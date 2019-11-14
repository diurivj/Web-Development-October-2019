// para poder utilizar variables de entorno
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// para poder tener buenas practicas en la concatenacion de rutas de archivos
const path = require("path");
// para poder ver la informacion que viaja a traves de un POST por un formulario
const bodyParser = require("body-parser");

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the DB"))
  .catch(err => console.log(err));

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// tenemos que configurar el bodyparser
app.use(bodyParser({ extended: false }));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// app.locals es ese bolsillo secreto en su pantalon, con uno de a 20
app.locals.loggedUser = true;

const index = require("./routes/index.js");
app.use("/", index);

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
