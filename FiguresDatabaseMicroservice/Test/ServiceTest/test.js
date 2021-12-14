const FigureService = require("../../BusinessLayer/FigureService");
const RepositoryMock = require("../Mocks/RepositoryMock");
test('Comprobate if a FigureService was created.', () => {
    const mock = new RepositoryMock();
    const service = new FigureService(mock);
    expect(typeof(service)).toBe("object");
});

test('Comprobate if the service get figures.', async () => {
    const mock = new RepositoryMock();
    const service = new FigureService(mock);
    let results = await service.getFiguresAsync();
    results.forEach(result => {
        expect(result.id).toBe(1);
        expect(result.name).toBe("figura_prueba");
        expect(result.quantity).toBe(30);
        expect(result.price).toBe(200);
        expect(result.image).toBe("imagen");
        expect(result.user).toBe("usuario_prueba");
    });
});

