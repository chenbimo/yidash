import { describe, it, expect } from 'vitest';
import extractScriptSrc from './getScriptTagSrc';

describe('extractScriptSrc', () => {
    it('should return an array of src attributes from script tags', () => {
        const input = `
            <html>
                <head>
                    <script src="./script1.js"></script>
                    <script src="./script2.js"></script>
                    <script src="./nested/script3.js"></script>
                </head>
                <body>
                    <script src="./script4.js"></script>
                </body>
            </html>
        `;
        const expected = ['./script1.js', './script2.js', './nested/script3.js', './script4.js'];
        expect(extractScriptSrc(input)).toEqual(expected);
    });

    it('should return an empty array when no script tags are present', () => {
        const input = `
            <html>
                <head>
                    <title>Test</title>
                </head>
                <body>
                    <h1>No scripts here</h1>
                </body>
            </html>
        `;
        expect(extractScriptSrc(input)).toEqual([]);
    });

    it('should return an empty array when script tags have no src attributes', () => {
        const input = `
            <html>
                <head>
                    <script>alert('Hello')</script>
                    <script>console.log('No src')</script>
                </head>
            </html>
        `;
        expect(extractScriptSrc(input)).toEqual([]);
    });

    it('should return an empty array when input is not a string', () => {
        const inputs = [null, undefined, 123, {}, []];

        inputs.forEach((input) => {
            expect(extractScriptSrc(input)).toEqual([]);
        });
    });

    it('should handle single and double quotes around src attribute', () => {
        const input = `
            <html>
                <head>
                    <script src='./script1.js'></script>
                    <script src="./script2.js"></script>
                </head>
            </html>
        `;
        const expected = ['./script1.js', './script2.js'];
        expect(extractScriptSrc(input)).toEqual(expected);
    });

    it('should handle multiple script tags in one line', () => {
        const input = `<script src="./script1.js"></script><script src="./script2.js"></script>`;
        const expected = ['./script1.js', './script2.js'];
        expect(extractScriptSrc(input)).toEqual(expected);
    });

    // XML specific test cases
    it('should handle script tags within XML-like data', () => {
        const input = `
            <root>
                <data>
                    <script src="./script1.js"></script>
                </data>
                <data>
                    <script src="./script2.js"></script>
                </data>
            </root>
        `;
        const expected = ['./script1.js', './script2.js'];
        expect(extractScriptSrc(input)).toEqual(expected);
    });

    it('should return an empty array for XML with no script tags', () => {
        const input = `
            <root>
                <data>
                    <value>Some Value</value>
                </data>
                <data>
                    <item>Another Value</item>
                </data>
            </root>
        `;
        expect(extractScriptSrc(input)).toEqual([]);
    });

    it('should handle XML with mixed content', () => {
        const input = `
            <root>
                <data>
                    <script src="./script1.js"></script>
                    <item>Ignore this</item>
                    <script src="./script2.js"></script>
                </data>
            </root>
        `;
        const expected = ['./script1.js', './script2.js'];
        expect(extractScriptSrc(input)).toEqual(expected);
    });
});
