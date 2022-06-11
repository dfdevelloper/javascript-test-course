import path from 'path';
import fs from 'fs';
import { beforeEach, expect, it, vi } from "vitest";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(()=> {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
});

it('should add an error paragaph to the id="errors element', () => {
    showError('test');

    const errorsEL = document.getElementById('errors');
    const errorParagraph = errorsEL.firstElementChild;

    expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragaph initially', () => {
    const errorsEL = document.getElementById('errors');
    const errorParagraph = errorsEL.firstElementChild;

    expect(errorParagraph).toBeNull();
});

it('should output the provided message in the paragaph', () => {
    const testErrorMessage = 'Test';
    showError(testErrorMessage);

    const errorsEL = document.getElementById('errors');
    const errorParagraph = errorsEL.firstElementChild;

    expect(errorParagraph.textContent).toBe(testErrorMessage);
});