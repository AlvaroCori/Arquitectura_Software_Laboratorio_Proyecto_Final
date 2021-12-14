const { database } = require("pg/lib/defaults");
var FigureModel = require("../Models/FigureModel")
var Database = require("./databaseConection")

module.exports = class Repository {
    #database;
    constructor(database = new Database())
    {
        this.#database = database
    }
    async getFiguresAsync() {
        
        let figures_jsons = await this.#database.getFigures();
        return figures_jsons;
    }
}
