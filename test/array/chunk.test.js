import { describe, it, expect } from 'vitest';
import yd_array_chunk from '../../lib/array/chunk.js';

describe('yd_array_chunk', () => {
    it('默认单测', () => {
        const arr = ['a', 'b', 'c', 'd'];
        const new_arr = yd_array_chunk(arr, 3);
        console.log(new_arr);
        const new_arr1 = yd_array_chunk(arr, 3, false);
        console.log(new_arr1);
        expect(true).toBe(true);
    });
});
