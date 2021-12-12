var FigureModel = require("../Models/FigureModel")
var Repository = require("../DataLayer/FiguresRepository");

module.exports = class FigureService {
    constructor()
    {
        this.repository = new Repository();
    }
    async GetFiguresAsync() {
        let figures = [];
        let figures_jsons = await this.repository.GetFiguresAsync();
        figures_jsons.forEach(figure => {
            figures.push(new FigureModel(figure))
        });
        return figures;
    }
}