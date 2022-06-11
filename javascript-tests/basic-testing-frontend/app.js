import { extractEnteredNumberValues } from './src/parser';
import { calculateResult } from './src/math';
import { generateResultText, outputResult } from './src/output';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);
  const result = calculateResult(numberValues);
  const resultText = generateResultText(result);
  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
