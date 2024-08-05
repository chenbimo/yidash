import { describe, it, expect } from 'vitest';
import yd_is_typeCheck from './typeCheck';

describe('typeCheck utility function', () => {
    it('should correctly identify an array', () => {
        const arr = [1, 2, 3];
        const notArr = 'not an array';
        expect(yd_is_typeCheck.isArray(arr)).toBe(true);
        expect(yd_is_typeCheck.isArray(notArr)).toBe(false);
    });

    it('should correctly identify an object', () => {
        const arr = [1, 2, 3];
        const obj = { k: 'v' };
        expect(yd_is_typeCheck.isObject(arr)).toBe(false);
        expect(yd_is_typeCheck.isObject(obj)).toBe(true);
    });

    it('should correctly identify a function', () => {
        expect(yd_is_typeCheck.isFunction(() => {})).toBe(true);
        expect(yd_is_typeCheck.isFunction('not a function')).toBe(false);
    });

    it('should correctly identify a date object'),
        () => {
            expect(yd_is_typeCheck.isDate(new Date())).toBe(true);
            expect(yd_is_typeCheck.isDate('not a date')).toBe(false);
        };

    it('should correctly identify null', () => {
        expect(yd_is_typeCheck.isNull(null)).toBe(true);
        expect(yd_is_typeCheck.isNull('not null')).toBe(false);
        expect(yd_is_typeCheck.isNull('')).toBe(false);
    });

    it('should correctly identify undefined', () => {
        expect(yd_is_typeCheck.isUndefined(undefined)).toBe(true);
        expect(yd_is_typeCheck.isUndefined('defined')).toBe(false);
    });

    it('should correctly identify a plain object', () => {
        expect(yd_is_typeCheck.isPlainObject({})).toBe(true);
        expect(yd_is_typeCheck.isPlainObject(new Date())).toBe(false);

        // Additional tests for special objects
        expect(yd_is_typeCheck.isPlainObject(new Date())).toBe(false);
        expect(yd_is_typeCheck.isPlainObject(/ab+c/)).toBe(false); // or or "new RegExp('ab+c')"
        expect(yd_is_typeCheck.isPlainObject([1, 2, 3])).toBe(false);
        expect(yd_is_typeCheck.isPlainObject(function () {})).toBe(false);
        expect(yd_is_typeCheck.isPlainObject(new Error('An error occurred'))).toBe(false);
        expect(yd_is_typeCheck.isPlainObject(new Map())).toBe(false);
        expect(yd_is_typeCheck.isPlainObject(new Set())).toBe(false);
        expect(yd_is_typeCheck.isPlainObject(new WeakMap())).toBe(false);
        expect(yd_is_typeCheck.isPlainObject(new WeakSet())).toBe(false);
        expect(yd_is_typeCheck.isPlainObject(new Promise(() => {}))).toBe(false);

        function CustomConstructor() {
            this.a = 1;
        }
        expect(yd_is_typeCheck.isPlainObject(new CustomConstructor())).toBe(false);
    });

    it('should correctly identify a promise', () => {
        expect(yd_is_typeCheck.isPromise(Promise.resolve())).toBe(true);
        expect(yd_is_typeCheck.isPromise({ then: () => {}, catch: () => {} })).toBe(false);
    });
});
