import { it, expect, describe } from 'vitest';
import yd_array_intersection from './intersection.js';

describe('yd_array_intersection', () => {
    it('should return the correct intersection of two arrays', () => {
        const result = yd_array_intersection([1, 2, 3], [2, 3, 4]);
        expect(result).toEqual([2, 3]);
    });

    it('should return an empty array when there are no common elements', () => {
        const result = yd_array_intersection([1, 2, 3], [4, 5, 6]);
        expect(result).toEqual([]);
    });

    it('should return the correct intersection when one array is empty', () => {
        const result = yd_array_intersection([1, 2, 3], []);
        expect(result).toEqual([]);
    });

    it('should return the correct intersection when both arrays are empty', () => {
        const result = yd_array_intersection([], []);
        expect(result).toEqual([]);
    });

    it('should return the correct intersection with mixed data types', () => {
        const result = yd_array_intersection([1, 'a', 3], [3, 'a', 5]);
        expect(result).toEqual(['a', 3]);
    });

    it('should throw an error if the second argument is not an array', () => {
        expect(() => yd_array_intersection([1, 2, 3], 'not an array')).toThrow(TypeError);
    });
});
