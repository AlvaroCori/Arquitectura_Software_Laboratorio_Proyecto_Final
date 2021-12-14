const FigureModel = require("../../Models/FigureModel");
test('Comprobate if a model save the datas of a json', () => {
    const id = 1;
    const name = "figura_prueba";
    const quantity = 30;
    const price = 200;
    const image = "imagen";
    const user = "usuario_prueba";
    const figure_test = {
        id: id,
        name: name,
        quantity: quantity,
        price : price,
        image : image,
        user : user
    }
    const figure = new FigureModel(figure_test);
    expect(figure.id).toBe(id);
    expect(figure.name).toBe(name);
    expect(figure.quantity).toBe(quantity);
    expect(figure.price).toBe(price);
    expect(figure.image).toBe(image);
    expect(figure.user).toBe(user);
    
});