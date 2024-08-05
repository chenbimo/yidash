import { describe, it, expect } from 'vitest';
import mapKeys from './mapKeys';

describe('pickBy', () => {
    it('should return `key + 1` member', () => {
        const obj = { a: 1, b: '2', c: 3 };
        const res = { a1: 1, b1: '2', c1: 3 };
        expect(mapKeys(obj, (_, key) => key + 1)).toEqual(res);
    });

    it('should return Empty member', () => {
        const obj = {};
        const res = {};
        expect(mapKeys(obj, (_, key) => key)).toEqual(res);
    });

    it('should throw Error', () => {
        expect(() => mapKeys([], (_) => _)).toThrow('obj must be an object');

        expect(() => mapKeys({ a: 1, b: 2, c: 3 }, {})).toThrow('fn must be an function');
    });
});
