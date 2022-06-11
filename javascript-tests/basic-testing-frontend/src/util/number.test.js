import { describe, it, expect } from 'vitest';
import { clearNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
    it('should transform a string number to a number of type number', () => {
        const input = '1';

        const result = transformToNumber(input);

        expect(result).toBeTypeOf('number');
    });

    it('should yield NaN for non-transformable values', () => {
        const input = "invalid";

        const result = transformToNumber(input);

        expect(result).toBeNaN();
    })
})

describe('clearNumbers()', () => {
    it('should return an array of number values if an array of string number is provided', () => {
        const numbers = ['1', '2'];

        const cleanedNumbers = clearNumbers(numbers);

        // expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1, 2]);
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const numbersValues = ['', 1];

        const cleanFn = () => clearNumbers(numbersValues);

        expect(cleanFn).toThrow();
    })
});
