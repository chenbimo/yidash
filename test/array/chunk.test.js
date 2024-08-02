import { describe, it, expect } from 'vitest';
import yd_array_chunk from '../../lib/array/chunk.js';

describe('yd_array_chunk', () => {
    it('默认单测', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const new_arr = yd_array_chunk(arr, 3);
        expect(new_arr).toEqual([
            ['a', 'b', 'c'],
            ['d', 'e']
        ]);
        const new_arr1 = yd_array_chunk(arr, 3, false);
        expect(new_arr1).toEqual([['a', 'b', 'c']]);
        expect(true).toBe(true);
    });
});
