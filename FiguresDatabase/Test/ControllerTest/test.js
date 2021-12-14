const express = require('express');
const FigureController = require("../../PresentationLayer/FigureController");
test('Comprobate if a FigureController was created.', () => {
  const app = express();
  var controller = new FigureController(app)
  expect(typeof(controller)).toBe("object");
});