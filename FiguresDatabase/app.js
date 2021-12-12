var FigureController = require("./PresentationLayer/FigureController");
const express = require('express');
const app = express();
const PORT = process.env.PORT ||5050;

controller = new FigureController(app);

app.listen(PORT,console.log(
  `Servidor abierto en http://localhost:${PORT}/figures`));