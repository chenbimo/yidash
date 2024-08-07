import { describe, it, expect } from 'vitest';
import yd_array_chunk from './chunk.js';

describe('yd_array_chunk', () => {
    it('it shoule return a array', () => {
        const arr = ['a', 'b', 'c', 'd', 'e'];
        const new_arr = yd_array_chunk(arr, 3);
        expect(new_arr).toEqual([
            ['a', 'b', 'c'],
            ['d', 'e']
        ]);
        const new_arr1 = yd_array_chunk(arr, 3, false);
        expect(new_arr1).toEqual([['a', 'b', 'c']]);
    });
});
