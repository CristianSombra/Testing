test('first example', () => {
    const myMock = jest.fn();

    myMock()
    myMock()
    myMock()

    expect(myMock).toHaveBeenCalledTimes(3);
});