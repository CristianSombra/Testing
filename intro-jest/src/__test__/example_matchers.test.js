describe('matchers', () => {
    test('toBe', () => {
        expect(true).toBe(true)
    })

    test('toEqual', ()=> {
        const data = {one: 1};
        data ['two'] = 2;
        expect(data).toEqual({one: 1, two: 2})
        
        const arr = ['one', 'two'];
        expect(arr).toEqual(['one', 'two'])
    
    });

    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
        });

        test('but there is a "stop" in Christoph', () => {
            expect('Christoph').toMatch(/stop/);
        });
});