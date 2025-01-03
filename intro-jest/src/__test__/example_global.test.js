// Uso de variables o funciones globales en un entorno de prueba, como beforeAll, afterAll, o configuraciones globales.

test('description', () => {
    expect(true).toBe(true);
});

//A continuación se puede agrupar varios test:
describe('this is for group test cases', () => {
    test('description 1', () => {
        expect(true).toBe(true);
    });

    test('description 2', () => {
        expect(true).toBe(true);
    });

    test('description 3', () => {
        expect(true).toBe(true);
    });
})