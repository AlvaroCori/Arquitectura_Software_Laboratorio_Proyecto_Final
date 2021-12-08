var FigureModel = require("../Models/FigureModel")
var Repository = require("../PresentationLayer/FiguresRepository");
async function GetFiguresAsync() {
    return Repository.GetFiguresAsync();
}

module.exports = {
    GetFiguresAsync,
};