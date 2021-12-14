module.exports = class RepositoryMock {
    constructor()
    {}
    async figures()
    {
        const figure_test_1 = {
			    id: 1,
			    name: "figura_prueba",
			    quantity: 30,
                price : 200,
                image : "imagen",
                user : "usuario_prueba"
        }
        return [figure_test_1, figure_test_1]
    }
    async getFiguresAsync()
    {
        return await this.figures();
    }

}