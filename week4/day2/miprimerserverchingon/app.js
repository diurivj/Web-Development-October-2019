// Con Node solamente sin frameworks
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("hola");
//   res.end();
// });

// server.listen(3000, () => {
//   console.log(`Running on http://localhost:3000`);
// });

// requeri la libreria de express
const express = require("express");

// cree el servidor de express
const app = express();

// config express
app.use(express.static(__dirname + "/public"));

// rutas
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/cat", (req, res) => {
  res.sendFile(__dirname + "/views/cat.html");
});

// echamos a andar el servidor
app.listen(3000, () => {
  console.log(`Running on http://localhost:3000`);
});
