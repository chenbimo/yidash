import { describe, expect, it } from 'vitest';
import yd_url_valid from './valid';

describe('yd_url_valid', () => {
    it('should be `true`', () => {
        expect(yd_url_valid('https://www.example.com')).toBeTruthy();
        expect(yd_url_valid('http://www.example.com')).toBeTruthy();
        expect(yd_url_valid('https://www.example.com/path/to/resource')).toBeTruthy();
        expect(yd_url_valid('https://www.example.com/path?query=string')).toBeTruthy();
        expect(yd_url_valid('https://www.example.com/path#anchor')).toBeTruthy();
        expect(yd_url_valid('http://localhost:8080')).toBeTruthy();
        expect(yd_url_valid('ftp://example.com')).toBeTruthy();
        expect(yd_url_valid('http://127.0.0.1')).toBeTruthy();
        expect(yd_url_valid('https://sub.domain.example.com')).toBeTruthy();
        expect(yd_url_valid('http://user:pass@example.com')).toBeTruthy();
        expect(yd_url_valid('http://example.com/path/to/resource%20with%20spaces')).toBeTruthy();
        expect(yd_url_valid('http://example')).toBeTruthy();
    });

    it('should be `false`', () => {
        expect(yd_url_valid('not a url')).toBeFalsy();
        expect(yd_url_valid('http://www.example. com')).toBeFalsy();
        expect(yd_url_valid('http://999.999.999.999')).toBeFalsy();
    });

    it('should throw Error', () => {
        expect(() => yd_url_valid(true)).toThrowError('url must be a string');
        expect(() => yd_url_valid(Symbol(''))).toThrowError('url must be a string');
        expect(() => yd_url_valid([])).toThrowError('url must be a string');
        expect(() => yd_url_valid({})).toThrowError('url must be a string');
        expect(() => yd_url_valid(new Date())).toThrowError('url must be a string');
        // ...
    });
});
