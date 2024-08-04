import { describe, it, expect, beforeEach, vi } from 'vitest';
import yd_array_durstenfeldShuffle from './durstenfeldShuffle.js';

describe('yd_array_durstenfeldShuffle Durstenfeld shuffle algorithm', () => {
    let original_arr;

    beforeEach(() => {
        original_arr = [1, 2, 3, 4, 5];
    });

    it('should return a new array', () => {
        const shuffled = yd_array_durstenfeldShuffle(original_arr);
        expect(shuffled).not.toBe(original_arr);
        expect(shuffled).toBeInstanceOf(Array);
    });

    it('should return an array of the same length', () => {
        const shuffled = yd_array_durstenfeldShuffle(original_arr);
        expect(shuffled).toHaveLength(original_arr.length);
    });

    it('should contain all the same elements', () => {
        const shuffled = yd_array_durstenfeldShuffle(original_arr);
        expect(shuffled).toEqual(expect.arrayContaining(original_arr));
        expect(original_arr).toEqual(expect.arrayContaining(shuffled));
    });

    it('should handle empty arrays', () => {
        expect(yd_array_durstenfeldShuffle([])).toEqual([]);
    });

    it('should handle arrays with one element', () => {
        expect(yd_array_durstenfeldShuffle([1])).toEqual([1]);
    });

    it('should produce a different order', () => {
        let differentCount = 0;

        for (let i = 0; i < 100; i++) {
            const shuffled = yd_array_durstenfeldShuffle(original_arr);
            if (!shuffled.every((v, i) => v === original_arr[i])) {
                differentCount++;
            }
        }

        // 期望至少95%的洗牌结果与原数组不同
        // The goal is to ensure that at least 95% of the shuffle results differ from the original array.
        expect(differentCount).toBeGreaterThan(95);
    });

    it('should not modify the original array', () => {
        yd_array_durstenfeldShuffle(original_arr);
        expect(original_arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle arrays with duplicate elements', () => {
        const duplicateArray = [1, 2, 2, 3, 3, 3];
        const shuffled = yd_array_durstenfeldShuffle(duplicateArray);
        expect(shuffled).toHaveLength(duplicateArray.length);
        expect(shuffled).toEqual(expect.arrayContaining(duplicateArray));
    });

    it('should use Math.random', () => {
        const mockMath = Object.create(global.Math);
        mockMath.random = vi.fn(() => 0.5);
        global.Math = mockMath;

        yd_array_durstenfeldShuffle(original_arr);
        expect(Math.random).toHaveBeenCalled();
    });
});
