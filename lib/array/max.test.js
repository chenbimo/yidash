import { it, expect, describe } from 'vitest';
import yd_array_max from './max.js';

describe('yd_array_max', () => {
    it('should return the max value in the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = yd_array_max(arr);
        expect(result).toBe(5);
    });

    it('should return NaN if the array contains non-number element', () => {
        const arr1 = [6, 2, 3, '1', 5];
        const arr2 = [1, 2, 3, 'a', 5];
        const result1 = yd_array_max(arr1);
        const result2 = yd_array_max(arr2);
        expect(result1).toBe(6);
        expect(result2).toBeNaN();
    });

    it('should return Infinity if the array is empty', () => {
        const arr = [];
        const result = yd_array_max(arr);
        expect(result).toBe(-Infinity);
    });
});
