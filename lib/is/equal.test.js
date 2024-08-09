import { describe, it, expect } from 'vitest';
import yd_is_equal from './equal.js';

describe('yd_is_equal', () => {
    it('should return true if two values are equal', () => {
        expect(yd_is_equal(1, 1)).toBe(true);
        expect(yd_is_equal('foo', 'foo')).toBe(true);
        expect(yd_is_equal([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(yd_is_equal({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
        expect(yd_is_equal(new Date('2021-01-01'), new Date('2021-01-01'))).toBe(true);
        expect(yd_is_equal(NaN, NaN)).toBe(true);
    });

    it('should return false if two values are not equal', () => {
        expect(yd_is_equal(1, 2)).toBe(false);
        expect(yd_is_equal('foo', 'bar')).toBe(false);
        expect(yd_is_equal(undefined, null)).toBe(false);
        expect(yd_is_equal(1, Object(1))).toBe(false);
        expect(yd_is_equal([1, 2, 3], [1, 2, 4])).toBe(false);
        expect(yd_is_equal({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    });
});
