const {Client} = require('pg')

module.exports = class PostgresConnection {
    constructor()
    {
        this.client = new Client({
            host: 'localhost', 
            port: 5432,
            database: 'FigureAPI',
            user: 'postgres',
            password: 'postgres'
        });
    }
    async GetFigures()
    {
        this.client.connect();
        var rs = "0";
        const res = await this.client.query(`SELECT * FROM public."Figures"`);
        this.client.end();
        return res.rows;
    }

}