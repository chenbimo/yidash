import { describe, it, expect } from 'vitest';
import yd_array_randomItem from './randomItem.js';

describe('yd_array_randomItem', () => {
    it('returns specified number of items', () => {
        const array = [1, 2, 3, 4, 5];
        const result = [...new Set(yd_array_randomItem(array, 3))];
        result.forEach((item) => {
            expect(array).toContain(item);
        });
        expect(result).toHaveLength(3);
    });

    it('returns repeating items when repeat is true', () => {
        const array = [1, 2, 3, 4, 5];
        const result = yd_array_randomItem(array, 3, true);
        result.forEach((item) => {
            expect(array).toContain(item);
        });
        expect(result).toHaveLength(3);
    });

    it('when the required quantity exceeds the number of non repeating elements in the array and non repeating is required, an exception will be raised', () => {
        const array = [1, 2, 3, 3];
        const testFunc = () => {
            yd_array_randomItem(array, 4, false);
        };
        expect(testFunc).toThrow('所需不重复元素数量超过了数组中不重复元素的数量');
    });

    it('when repeat is true and the required number exceeds the number of non repeating elements in the array, return a duplicate item', () => {
        const array = [1, 2, 3, 3];
        const result = yd_array_randomItem(array, 4, true);
        result.forEach((item) => {
            expect(array).toContain(item);
        });
        expect(result).toHaveLength(4);
    });
});
