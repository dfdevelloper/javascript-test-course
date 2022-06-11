import { it, describe, expect } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
    it('should contain the provided status code, message and data', () => {
        const testCode = 1;
        const testMessage = 'test';
        const testData = { key: 1};

        const httpError = new HttpError(testCode, testMessage, testData);

        expect(httpError.statusCode).toBe(testCode);
        expect(httpError.message).toBe(testMessage);
        expect(httpError.data).toBe(testData);
    });

    it('should contain undefined as data if no data is provided', () => {
        const testCode = 1;
        const testMessage = 'test';

        const httpError = new HttpError(testCode, testMessage);

        expect(httpError.statusCode).toBe(testCode);
        expect(httpError.message).toBe(testMessage);
        expect(httpError.data).toBeUndefined()
    });
});

describe('class ValidationError', () => {
    it('should contain the provided status message', () => {
        const testMessage = 'test';

        const validationError = new ValidationError(testMessage);

        expect(validationError.message).toBe(testMessage);
    });
});
