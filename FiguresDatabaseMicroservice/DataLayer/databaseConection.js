const {Client} = require('pg')

module.exports = class PostgresConnection {
    #client;
    constructor()
    {
        this.#client = new Client({
            host: 'localhost', 
            port: 5432,
            database: 'FigureAPI',
            user: 'postgres',
            password: 'postgres'
        });
    }
    async getFigures()
    {

        this.#client.connect(error => {
            if (error) {
                console.log(error);
            }
        });
        
        const request = await this.#client.query(`SELECT * FROM public."Figures"`);
        this.#client.end();
        return request.rows;
    }

}