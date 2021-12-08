///import FigureModel from './Models/FigureModel';

///var r = FigureModel();
///r.Id = 2;
var service = require("./BusinessLayer/FigureService");

const express = require('express');
const app = express();

app.get('/figures', (async (req, res) => {
   const figures = await service.GetFiguresAsync()
    res.send(figures)
    res.end()
  })
);
 

const PORT = process.env.PORT ||5050;
 
// Server Setup
app.listen(PORT,console.log(
  `Servidor abierto en http://localhost:${PORT}/figures`));