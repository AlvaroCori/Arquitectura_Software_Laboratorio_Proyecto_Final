var http = require('http');
var FigureController = require("./PresentationLayer/FigureController");
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors())
var httpServer = http.createServer(app);
const PORT = process.env.PORT ||5050;

controller = new FigureController(app);

httpServer.listen(PORT);