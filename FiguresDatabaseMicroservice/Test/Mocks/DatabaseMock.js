module.exports = class DatabaseMock {
    constructor()
    {}
    async figures()
    {
        return '[{"id": "1","name": "Tanque De Asedio - Starcraft II","quantity": "30","price": "200","image": "https://m.media-amazon.com/images/I/51dWKLmiuSL._AC_.jpg","user": "admin"}]';
    }
    async getFigures()
    {
        return await this.figures();
    }

}