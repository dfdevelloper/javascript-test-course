import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe('validateStringNotEmpty()', () => {
    it('should throw an error if a empty string is provided', () => {
        const input = '';

        const validationFn = () => validateStringNotEmpty(input);

        expect(validationFn).toThrow();
    });

    it('should throw an error with a message that contains a reason (must not be empty)', () => {
        const input = '';

        const validationFn = () => validateStringNotEmpty(input);

        expect(validationFn).toThrow(/must not be empty/);
    });

    it('should throw an error if a long string of blanks is provided', () => {
        const input = '      ';

        const validationFn = () => validateStringNotEmpty(input);

        expect(validationFn).toThrow();
    });

    it('should throw an error if any other value than a string is provided', () => {
        const inputNumber = 2;
        const inputBool = true;
        const inputObj = {};

        const validateFnNumber = () => validateStringNotEmpty(inputNumber);
        const validateFnBool = () => validateStringNotEmpty(inputBool);
        const validateFnObj = () => validateStringNotEmpty(inputObj);

        expect(validateFnNumber).toThrow();
        expect(validateFnBool).toThrow();
        expect(validateFnObj).toThrow();
    });

    it('should not throw an error if a non-empty string is provided', () => {
        const input = 'validString';

        const validationFn = () => validateStringNotEmpty(input);

        expect(validationFn).not.toThrow();
    });

    it('should not throw an error if a NaN is provided', () => {
        const input = NaN;

        const validationFn = () => validateStringNotEmpty(input);

        expect(validationFn).toThrow();
    });

});

describe('validateNumber()', () => {
    it('should throw an error with a message that contains a reason (invalid number input)', () => {
        const input = NaN;

        const validationFn = () => validateNumber(input);

        expect(validationFn).toThrow(/Invalid number input/);
    });

    it('should throw an error if a non-numeric value is provided', () => {
        const input = '2';

        const validationFn = () => validateNumber(input);

        expect(validationFn).toThrow();
    });

    it('should not throw an error, if a number is provided', () => {
        const input = 1;
        const validationFn = () => validateNumber(input);
        expect(validationFn).not.toThrow();
    });
});


