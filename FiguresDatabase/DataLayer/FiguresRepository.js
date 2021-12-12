var FigureModel = require("../Models/FigureModel")
var Database = require("./databaseConection")

module.exports = class Repository {
    constructor()
    {
        this.database = new Database()
    }
    async GetFiguresAsync() {
        
        let figures_jsons = await this.database.GetFigures();
        return figures_jsons;
    }
}
