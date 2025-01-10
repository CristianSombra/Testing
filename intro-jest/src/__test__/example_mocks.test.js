// Simulación de funciones o módulos externos para aislar y probar componentes específicos.

import { storage } from "../lib/storage";
import { saveUsername, getUsername} from "../user";

jest.mock('../lib/storage.js');

test('first example', () => {
    const myMock = jest.fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('Hello world')
    .mockReturnValueOnce(5);

    const result1 = myMock();
    const result2 = myMock();
    const result3 = myMock();

    expect(myMock).toHaveBeenCalledTimes(3);

    expect(result1).toBe(true);
    expect(result2).toBe('Hello world');
    expect(result3).toBe(5);
});

test('second example', () => {
    saveUsername('Jhon doe')
    expect(storage.save).toHaveBeenCalled()
    expect(storage.save).toHaveBeenCalledWith({key:'username', value: 'Jhon doe'})
});

test('third example', () => {
    const username = ('Jhon doe')
    storage.get.mockReturnValueOnce(username)

    const result = getUsername()
    expect(result).toBe(username)
    expect(storage.get).toHaveBeenCalledTimes(1)
    expect(storage.get).toHaveBeenCalledWith({key:'username'})
});
