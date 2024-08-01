import { describe, it, expect } from 'vitest';
import yd_is_array from '../../lib/is/array.js';

describe('yd_is_array', () => {
    it('should return `true` for arrays', () => {
        expect(yd_is_array([1, 2, 3])).toBe(true);
    });

    it('should be return `false` for non-arrays', () => {
        expect(yd_is_array({})).toBeFalsy();
        expect(yd_is_array({ 1: '1', length: 1 })).toBeFalsy();

        expect(yd_is_array(123)).toBeFalsy();

        expect(yd_is_array(`123`)).toBeFalsy();

        expect(yd_is_array(true)).toBeFalsy();

        expect(yd_is_array(Symbol())).toBeFalsy();

        expect(yd_is_array(/a/)).toBeFalsy();

        expect(yd_is_array(new Date())).toBeFalsy();

        expect(yd_is_array(new Set())).toBeFalsy();

        expect(yd_is_array(new Map())).toBeFalsy();

        expect(yd_is_array(new Error())).toBeFalsy();
    });
});
