import { it, expect, describe } from 'vitest';
import yd_string_convertToCamelCase from './convertToCamelCase.js';

describe('yd_string_convertToCamelCase', () => {
    // 测试包含中划线的两个单词的情况
    it('should convert two - word string with hyphen to camel case', () => {
        const result = yd_string_convertToCamelCase('user-name');
        expect(result).toBe('userName');
    });

    // 测试包含下划线的两个单词的情况
    it('should convert two - word string with underscore to camel case', () => {
        const result = yd_string_convertToCamelCase('user_name');
        expect(result).toBe('userName');
    });

    // 测试包含空格的两个单词的情况
    it('should convert two - word string with space to camel case', () => {
        const result = yd_string_convertToCamelCase('user name');
        expect(result).toBe('userName');
    });

    // 测试包含下划线和空格的两个单词的情况
    it('should convert two - word string with underscore and space to camel case', () => {
        const result = yd_string_convertToCamelCase('user _name');
        expect(result).toBe('userName');
    });

    // 测试包含多个连续中划线的两个单词的情况
    it('should convert two - word string with multiple consecutive hyphens to camel case', () => {
        const result = yd_string_convertToCamelCase('user--name');
        expect(result).toBe('userName');
    });

    // 测试包含多个连续下划线的两个单词的情况
    it('should convert two - word string with multiple consecutive underscores to camel case', () => {
        const result = yd_string_convertToCamelCase('user__name');
        expect(result).toBe('userName');
    });

    // 测试包含多个连续空格的两个单词的情况
    it('should convert two - word string with multiple consecutive spaces to camel case', () => {
        const result = yd_string_convertToCamelCase('user  name');
        expect(result).toBe('userName');
    });

    // 测试空字符串的情况
    it('should handle an empty string', () => {
        const result = yd_string_convertToCamelCase('');
        expect(result).toBe('');
    });
});
