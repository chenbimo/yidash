import { describe, it, expect } from 'vitest';
import yd_crypto_base64Decode from './base64Decode';

describe('yd_crypto_base64Decode', () => {
    it('should decode a Base64 string to a string', () => {
        const result = yd_crypto_base64Decode('SGVsbG8sIFdvcmxkIQ==', 'decode');
        expect(result).toBe('Hello, World!');
    });

    it('should throw a TypeError and return null if input is not a string', () => {
        const result = yd_crypto_base64Decode(123, 'encode');
        expect(result).toBeNull();
    });

    it('should return null if an error occurs', () => {
        const result = yd_crypto_base64Decode(null);
        expect(result).toBeNull();
    });
});
