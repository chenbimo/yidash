import { describe, expect, it } from 'vitest';
import yd_string_randomString from './randomString.js';

describe('yd_string_randomString', () => {
    it('should return a random string of the specific length', () => {
        const length = 10;
        const result = yd_string_randomString(length);
        expect(result.length).toBe(length);
    });

    it('should return a random string containing only alphanumeric characters when includeSpecial is not specified', () => {
        const length = 10;
        const result = yd_string_randomString(length);
        const alphaNum = /^[A-Za-z0-9]+$/;
        expect(result).toMatch(alphaNum);
    });

    it('should return a random string containing only alphanumeric characters when includeSpecial is false', () => {
        const length = 10;
        const result = yd_string_randomString(length, false);
        const alphaNum = /^[A-Za-z0-9]+$/;
        expect(result).toMatch(alphaNum);
    });

    it('should return a random string containing alphanumeric and special characters when includeSpecial is true', () => {
        const length = 30;
        const result = yd_string_randomString(length, true);
        const specialChars = /[!@#$%^&*()_+{}:"<>?|[\];\',./`~]/;
        expect(specialChars.test(result)).toBe(true);
    });

    it('should return a random string containing only allowed characters', () => {
        const length = 30;
        const result = yd_string_randomString(length, false);
        const allowedChars = /^[A-Za-z0-9!@#$%^&*()_+{}:"<>?|[\];\',./`~]+$/;
        expect(result).toMatch(allowedChars);
    });

    it('should return an empty string if length is 0'),
        () => {
            const result = yd_string_randomString(0);
            expect(result).toBe('');
        };

    it('should return an empty string if length is negative'),
        () => {
            const result = yd_string_randomString(-1);
            expect(result).toBe('');
        };
});
