import { it, describe, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('should thrown an error if an empty string is provided as a value', ()=> {
    const inputValue = "";

    const validationFn = () => validateNotEmpty(inputValue);

    expect(validationFn).toThrow();
});

it('should thrown an error if an blank string is provided as a value', ()=> {
    const inputValue = "  ";

    const validationFn = () => validateNotEmpty(inputValue);

    expect(validationFn).toThrow();
});

it('should thrown an error with the provided error message', ()=> {
    const inputValue = "  ";
    const errorMessage =  "Test";
    const validationFn = () => validateNotEmpty(inputValue, errorMessage);

    expect(validationFn).toThrow(errorMessage);
});

