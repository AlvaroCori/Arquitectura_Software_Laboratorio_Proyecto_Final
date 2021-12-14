var http = require('http');
var FigureService = require("../BusinessLayer/FigureService");
module.exports = class FigureController {
    #service;
    constructor(app, service= new FigureService())
    {
        this.app = app
        this.#service = service;
        this.app.get('/figures', (async (req, res) => {
            const figures = await this.#service.getFiguresAsync()
            res.send(figures)
            res.end()
        })
        );
    }
}
 