import { describe, it, expect } from 'vitest';
import yd_array_merge from './merge.js';

describe('yd_array_merge', () => {
    it('should merge multiple arrays and return their union', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [3, 4, 5];
        const arr3 = [5, 6, 7];

        expect(yd_array_merge(arr1, arr2, arr3)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should throw an error if any argument is not an array', () => {
        expect(() => yd_array_merge([1, 2], 'foo')).toThrow('All arguments must be arrays.');
    });
});
