import { it, expect } from "vitest";

import { transformToNumber } from "./util/numbers";

it('should transform a string number to a number of type number', () => {
    // arrange
    const input = "1";

    //act
    const result = transformToNumber(input);

    //assert
    expect(result).toBeTypeOf("number");
});

it('should yield NaN for a non-transformable values', () => {
    const input = "invalid";
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
});