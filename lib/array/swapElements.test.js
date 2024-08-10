import { it, expect, describe } from 'vitest';
import yd_array_swapElements from './swapElements.js';

describe('yd_array_swapElements', () => {
    it('should swap elements correctly', () => {
        const numbers = [1, 2, 3, 4, 5];
        yd_array_swapElements(numbers, [0, 3], [1, 4]);
        expect(numbers).toEqual([4, 5, 3, 1, 2]);
    });

    it('should handle swaps with the same index', () => {
        const numbers = [1, 2, 3, 4, 5];
        yd_array_swapElements(numbers, [1, 1]);
        expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle no swap', () => {
        const numbers = [1, 2, 3, 4, 5];
        yd_array_swapElements(numbers);
        expect(numbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('should throw error if first argument is not an array', () => {
        expect(() => yd_array_swapElements('abc', [1, 2]).toThrow(TypeError));
        expect(() => yd_array_swapElements('abc', [1, 2]).toThrow('第一个参数必须是一个数组'));
    });

    it('should throw error if swap pair is not an array', () => {
        expect(() => yd_array_swapElements([1, 2, 3, 4, 5], (1, 2)).toThrow(TypeError));
        expect(() => yd_array_swapElements([1, 2, 3, 4, 5], (1, 2)).toThrow('每个索引对必须是一个包含两个数字的数组'));
    });

    it('should throw error if swap pair is not an array consist of 2 numbers', () => {
        expect(() => yd_array_swapElements([1, 2, 3, 4, 5], [1, 'a']).toThrow(TypeError));
        expect(() => yd_array_swapElements([], [1, 'a']).toThrow('索引必须是数字'));
    });

    it('should throw error if swap pair index out of array bounds', () => {
        expect(() => yd_array_swapElements([1, 2, 3, 4, 5], [1, 6]).toThrow(TypeError));
        expect(() => yd_array_swapElements([], [1, 6]).toThrow('索引超出数组的范围'));
    });
});
