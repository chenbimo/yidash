import { describe, it, expect } from 'vitest';
import isEnglishOrChineseChar from './isEnglishOrChineseChar';

describe('isEnglishOrChineseChar', () => {
    it('should return "English" for English characters', () => {
        expect(isEnglishOrChineseChar('A')).toBe('English');
        expect(isEnglishOrChineseChar('a')).toBe('English');
        expect(isEnglishOrChineseChar('Z')).toBe('English');
    });

    it('should return "Chinese" for Chinese characters', () => {
        expect(isEnglishOrChineseChar('中')).toBe('Chinese');
        expect(isEnglishOrChineseChar('壹')).toBe('Chinese');
        expect(isEnglishOrChineseChar('饔')).toBe('Chinese');
    });

    it('should return "Other" for non-English and non-Chinese characters', () => {
        expect(isEnglishOrChineseChar('!')).toBe('Other');
        expect(isEnglishOrChineseChar('1')).toBe('Other');
        expect(isEnglishOrChineseChar('#')).toBe('Other');
    });

    it('should return null for invalid inputs', () => {
        expect(isEnglishOrChineseChar('')).toBe(null);
        expect(isEnglishOrChineseChar('AB')).toBe(null);
        expect(isEnglishOrChineseChar('中A')).toBe(null);
    });
});
