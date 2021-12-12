var FigureService = require("../BusinessLayer/FigureService");
module.exports = class FigureController {
    constructor(app)
    {
        this.app = app
        this.service = new FigureService();
        this.app.get('/figures', (async (req, res) => {
            const figures = await this.service.GetFiguresAsync()
            res.send(figures)
            res.end()
        })
        );
    }
}
 