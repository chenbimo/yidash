import { describe, it, expect } from 'vitest';
import yd_math_max from './max.js';

describe('yd_math_max', () => {
    it('it shoule return a number', () => {
        const arr = [1, 2, 3, 4];
        const number_1 = yd_math_max(arr);
        expect(number_1).toEqual(4);
        const number_2 = yd_math_max([]);
        expect(number_2).toEqual(undefined);
    });
});
