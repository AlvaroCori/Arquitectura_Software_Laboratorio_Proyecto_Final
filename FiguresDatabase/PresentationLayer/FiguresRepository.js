var FigureModel = require("../Models/FigureModel")
var figure = new FigureModel(1,"POEV",20)
var figures = []
figures.push(figure)
figure = new FigureModel(2,"VEOP",2)
figures.push(figure)
async function GetFiguresAsync() {
    return figures;
}
module.exports = {
    GetFiguresAsync,
};
