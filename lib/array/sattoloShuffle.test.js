import { describe, it, expect, beforeEach, vi } from 'vitest';
import yd_array_sattoloShuffle from './sattoloShuffle.js';

describe('yd_array_sattoloShuffle Sattolo shuffle algorithm', () => {
    let original_arr;

    beforeEach(() => {
        original_arr = [1, 2, 3, 4, 5];
    });

    it('should return a new array', () => {
        const shuffled = yd_array_sattoloShuffle(original_arr);
        expect(shuffled).not.toBe(original_arr);
        expect(shuffled).toBeInstanceOf(Array);
    });

    it('should return an array of the same length', () => {
        const shuffled = yd_array_sattoloShuffle(original_arr);
        expect(shuffled).toHaveLength(original_arr.length);
    });

    it('should contain all the same elements', () => {
        const shuffled = yd_array_sattoloShuffle(original_arr);
        expect(shuffled).toEqual(expect.arrayContaining(original_arr));
        expect(original_arr).toEqual(expect.arrayContaining(shuffled));
    });

    it('should handle empty arrays', () => {
        expect(yd_array_sattoloShuffle([])).toEqual([]);
    });

    it('should handle arrays with one element', () => {
        expect(yd_array_sattoloShuffle([1])).toEqual([1]);
    });

    it('should move every element to a new position', () => {
        const shuffled = yd_array_sattoloShuffle(original_arr);
        expect(shuffled.every((v, i) => v !== original_arr[i])).toBe(true);
    });

    it('should produce different permutations', () => {
        const permutations = new Set();

        for (let i = 0; i < 200; i++) {
            permutations.add(JSON.stringify(yd_array_sattoloShuffle(original_arr)));
        }

        // 期望至少产生 23 种不同的排列
        // The goal is to produce at least 23 different permutations
        expect(permutations.size).toBeGreaterThan(23);
    });

    it('should not modify the original array', () => {
        yd_array_sattoloShuffle(original_arr);
        expect(original_arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should use Math.random', () => {
        const mockMath = Object.create(global.Math);
        mockMath.random = vi.fn(() => 0.5);
        global.Math = mockMath;

        yd_array_sattoloShuffle(original_arr);
        expect(Math.random).toHaveBeenCalled();
    });
});
