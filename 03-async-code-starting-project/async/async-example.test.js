import { expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it('should generate a token value', done => {
    const testUserEmail = 'teste@test.com';

    generateToken(testUserEmail, (err, token) => {

        try {
            expect(token).toBeDefined();
            done();
        } catch (error) {
            done(error)
        }
    });
});

it('should generate a token value', async () => {
    const testUserEmail = 'teste@test.com';
    const token = await generateTokenPromise(testUserEmail)
    expect(token).toBeDefined();
});