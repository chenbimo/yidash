import { describe, it, expect } from 'vitest';
import yd_is_chinese from './chinese.js';

describe('yd_is_chinese', () => {
    it('应该在给定纯中文字符串时返回true', () => {
        expect(yd_is_chinese('中文')).toBe(true);
    });

    it('应该在给定包含非中文字符的字符串时返回false', () => {
        expect(yd_is_chinese('abc中文123')).toBe(false);
    });

    it('应该在给定包含非中文字符的字符串且isPure为false时返回true', () => {
        expect(yd_is_chinese('abc中文123', false)).toBe(true);
    });

    it('应该在给定空字符串时返回false', () => {
        expect(yd_is_chinese('')).toBe(false);
    });

    it('应该在给定非字符串参数时返回false', () => {
        expect(yd_is_chinese(null)).toBe(false);
        expect(yd_is_chinese(undefined)).toBe(false);
        expect(yd_is_chinese(123)).toBe(false);
        expect(yd_is_chinese({})).toBe(false);
    });
});
