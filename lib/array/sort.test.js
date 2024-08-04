import { describe, it, expect } from 'vitest';
import yd_array_sort from './sort.js';

describe('yd_array_sort', () => {
    it('排序测试', () => {
        const arr1 = yd_array_sort([1, 3, 2], { order: 'asc' });
        const arr2 = yd_array_sort(
            [
                { a: 1, b: 2 },
                { a: 2, b: 4 }
            ],
            { order: 'des', by: (item) => item.b }
        );
        expect(arr2).toEqual([
            { a: 2, b: 4 },
            { a: 1, b: 2 }
        ]);
        expect(arr1).toEqual([1, 2, 3]);
    });
});
