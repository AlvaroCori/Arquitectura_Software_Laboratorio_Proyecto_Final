var FigureModel = require("../Models/FigureModel")
var Repository = require("../DataLayer/FiguresRepository");

module.exports = class FigureService {
    #repository
    constructor(repository = new Repository())
    {
        this.#repository = repository;
    }
    async getFiguresAsync() {
        let figures = [];
        let figures_jsons = await this.#repository.getFiguresAsync();
        figures_jsons.forEach(figure => {
            figures.push(new FigureModel(figure))
        });
        return figures;
    }
}