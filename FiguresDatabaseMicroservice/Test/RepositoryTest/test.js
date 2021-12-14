const Repository = require("../../DataLayer/FiguresRepository");
const DatabaseMock = require("../Mocks/DatabaseMock")
test('Comprobate if a repostory was created.', async () => {
    const mock = new DatabaseMock();
    const repository = new Repository(mock);
    expect(typeof(repository)).toBe("object");
    });
test('Comprobate if a repostory get figures.', async () => {
    const mock = new DatabaseMock();
    const repository = new Repository(mock);
    const expected = await repository.getFiguresAsync();
    const result = '[{"id": "1","name": "Tanque De Asedio - Starcraft II","quantity": "30","price": "200","image": "https://m.media-amazon.com/images/I/51dWKLmiuSL._AC_.jpg","user": "admin"}]';
    expect(result).toBe(expected);
  });