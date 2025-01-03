// Configuración y limpieza antes y después de cada prueba con beforeEach, afterEach, beforeAll, y afterAll.

describe('setup and teardown examples', () => {
    beforeAll(() => {
        console.log('beforeAll')
    });

    beforeEach(() => {
        console.log('beforeEach')
    });

    afterAll(() => {
        console.log('afterAll')
    })

    afterEach(() => {
        console.log('afterEach')
    })

    test('example 1', () => {
        expect(true).toBe(true);
    });
});