import { describe, it, expect } from 'vitest';
import yd_is_float from './float.js';

describe('yd_is_float', () => {
    it('should return `true` for arrays', () => {
        expect(yd_is_float(1.23)).toBe(true);
    });

    it('should be return `false` for non-arrays', () => {
        expect(yd_is_float({})).toBeFalsy();
        expect(yd_is_float({ 1: '1', length: 1 })).toBeFalsy();

        expect(yd_is_float(123)).toBeFalsy();

        expect(yd_is_float(`123`)).toBeFalsy();

        expect(yd_is_float(true)).toBeFalsy();

        expect(yd_is_float(Symbol())).toBeFalsy();

        expect(yd_is_float(/a/)).toBeFalsy();

        expect(yd_is_float(new Date())).toBeFalsy();

        expect(yd_is_float(new Set())).toBeFalsy();

        expect(yd_is_float(new Map())).toBeFalsy();

        expect(yd_is_float(new Error())).toBeFalsy();
    });
});
