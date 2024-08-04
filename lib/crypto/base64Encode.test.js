import { describe, it, expect } from 'vitest';
import yd_crypto_base64Encode from './base64Encode';

describe('yd_crypto_base64Encode', () => {
    it('should encode a string to Base64', () => {
        const result = yd_crypto_base64Encode('Hello, World!');
        expect(result).toBe('SGVsbG8sIFdvcmxkIQ==');
    });

    it('should throw a TypeError and return null if input is not a string', () => {
        const result = yd_crypto_base64Encode(123);
        expect(result).toBeNull();
    });

    it('should return null if an error occurs', () => {
        const result = yd_crypto_base64Encode('Hello, World!');
        expect(result).toBeNull();
    });
});
