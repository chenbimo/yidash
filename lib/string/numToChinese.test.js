import { it, expect, describe } from 'vitest';
import yd_string_numToChinese from './numToChinese.js';

describe('yd_string_numToChinese', () => {
    it('should convert numbers to simplified Chinese chars', () => {
        expect(yd_string_numToChinese(12345)).toBe('一二三四五');
        expect(yd_string_numToChinese(12345, 'simplified')).toBe('一二三四五');
        expect(yd_string_numToChinese(0)).toBe('零');
    });

    it('should convert numbers to traditional Chinese chars', () => {
        expect(yd_string_numToChinese(12345, 'financial')).toBe('壹贰叁肆伍');
        expect(yd_string_numToChinese(0, 'financial')).toBe('零');
    });

    it('should throw an error if num is not a num or string', () => {
        expect(() => yd_string_numToChinese(null)).toThrow(TypeError);
        expect(() => yd_string_numToChinese(null)).toThrowError('num 必须是一个数字');
        expect(() => yd_string_numToChinese({})).toThrow(TypeError);
        expect(() => yd_string_numToChinese({})).toThrowError('num 必须是一个数字');
    });

    it('should throw an error if type is not simplified or financial', () => {
        expect(() => yd_string_numToChinese(12345, 'x')).toThrow(TypeError);
        expect(() => yd_string_numToChinese(12345, 'x')).toThrowError('type 必须是 "simplified" 或 "financial"');
    });

    it('should throw an error if num contains non-numeric chars', () => {
        expect(() => yd_string_numToChinese('123a')).toThrow(TypeError);
        expect(() => yd_string_numToChinese('123a')).toThrowError('num 必须是一个数字');
    });
});
