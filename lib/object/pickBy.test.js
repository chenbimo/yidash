import { describe, it, expect } from 'vitest';
import pickBy from './pickBy.js';
import isNumber from '../is/number.js';
import isBoolean from '../is/boolean.js';

describe('pickBy', () => {
    it('should return number member', () => {
        const obj = { a: 1, b: '2', c: 3 };
        const res = { a: 1, c: 3 };
        expect(pickBy(obj, isNumber)).toEqual(res);
    });

    it('should return Boolean member', () => {
        const obj = { a: true, b: '2', c: 3, d: false, e: undefined, f: null, g: Symbol(), h: {}, i: [] };
        const res = { a: true, d: false };
        expect(pickBy(obj, isBoolean)).toEqual(res);
    });

    it('should return Empty member', () => {
        const obj = {};
        const res = {};
        expect(pickBy(obj, (_) => _)).toEqual(res);
    });

    it('should throw Error', () => {
        expect(() => pickBy([], (_) => _)).toThrow('obj must be an object');

        expect(() => pickBy({ a: 1, b: 2, c: 3 }, {})).toThrow('fn must be an function');
    });
});
