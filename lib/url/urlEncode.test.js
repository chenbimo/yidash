import { describe, it, expect } from 'vitest';
import yd_url_urlEncode from './urlEncode.js';

describe('yd_url_urlEncode', () => {
    it('should encode a string to URL format', () => {
        const result = yd_url_urlEncode('https://www.google.com');
        expect(result).toBe('https%3A%2F%2Fwww.google.com');
    });

    it('should throw a TypeError and return null if input is not a string', () => {
        const result = yd_url_urlEncode(123);
        expect(result).toBeNull();
    });

    it('should return null if an error occurs', () => {
        const result = yd_url_urlEncode(null);
        expect(result).toBeNull();
    });
});
