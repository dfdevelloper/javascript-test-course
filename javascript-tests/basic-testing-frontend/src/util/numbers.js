import { validateNumber, validateStringNotEmpty } from "./validation";

export function transformToNumber(value) {
  return +value;
}

export function clearNumbers(numbersValue) {
  const numbers = [];
  for (const numberInput of numbersValue) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}

