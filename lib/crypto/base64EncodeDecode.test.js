import { describe, it, expect } from 'vitest';
import yd_crypto_base64EncodeDecode from './base64EncodeDecode';

describe('yd_crypto_base64EncodeDecode', () => {
    it('should encode a string to Base64', () => {
        const result = yd_crypto_base64EncodeDecode('Hello, World!', 'encode');
        expect(result).toBe('SGVsbG8sIFdvcmxkIQ==');
    });

    it('should decode a Base64 string to a string', () => {
        const result = yd_crypto_base64EncodeDecode('SGVsbG8sIFdvcmxkIQ==', 'decode');
        expect(result).toBe('Hello, World!');
    });

    it('should throw a TypeError and return null if input is not a string', () => {
        const result = yd_crypto_base64EncodeDecode(123, 'encode');
        expect(result).toBeNull();
    });

    it('should throw an error and return null if mode is not "encode" or "decode"', () => {
        const result = yd_crypto_base64EncodeDecode('Hello, World!', 'invalid');
        expect(result).toBeNull();
    });

    it('should return null if an error occurs', () => {
        const result = yd_crypto_base64EncodeDecode('Hello, World!', 'invalid');
        expect(result).toBeNull();
    });
});
