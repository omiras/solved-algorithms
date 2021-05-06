const {test, expect} = require('@jest/globals');

const reverse = require('./app');

test('There an empty string', () => {
    let input = '';
    let ouput = ''
    expect(reverse(input)).toBe(ouput);
});

test('There a once letter', () => {
    let input = 'ª';
    let ouput = 'ª'
    expect(reverse(input)).toBe(ouput);
});

test('There a once word', () => {
    let input = 'perro';
    let ouput = 'perro'
    expect(reverse(input)).toBe(ouput);
});

test('There two words', () => {
    let input = 'Emperor penguin';
    let ouput = 'penguin Emperor'
    expect(reverse(input)).toBe(ouput);
});

test('There a complete sentence', () => {
    let input = 'The greatest victory is that which requires no battle';
    let ouput = 'battle no requires which that is victory greatest The'
    expect(reverse(input)).toBe(ouput);
});