import { it, expect, describe } from 'vitest';
import yd_internal_getValueType from './getValueType.js';

describe('yd_internal_getValueType', () => {
    it("should return '[object Null]' for null", () => {
        expect(yd_internal_getValueType(null)).toBe('[object Null]');
    });

    it("should return '[object Undefined]' for undefined", () => {
        expect(yd_internal_getValueType(undefined)).toBe('[object Undefined]');
    });

    it("should return '[object String]' for strings", () => {
        expect(yd_internal_getValueType('')).toBe('[object String]');
        expect(yd_internal_getValueType('hello world')).toBe('[object String]');
    });

    it("should return '[object Number]' for numbers", () => {
        expect(yd_internal_getValueType(100)).toBe('[object Number]');
        expect(yd_internal_getValueType(NaN)).toBe('[object Number]');
    });

    it("should return '[object Boolean]' for booleans", () => {
        expect(yd_internal_getValueType(true)).toBe('[object Boolean]');
        expect(yd_internal_getValueType(false)).toBe('[object Boolean]');
    });

    it("should return '[object Array]' for arrays", () => {
        expect(yd_internal_getValueType([])).toBe('[object Array]');
        expect(yd_internal_getValueType([1, 2, 3])).toBe('[object Array]');
    });

    it("should return '[object Object]' for objects", () => {
        expect(yd_internal_getValueType({})).toBe('[object Object]');
        expect(yd_internal_getValueType({ key: 'value' })).toBe('[object Object]');
    });

    it("should return '[object Function]' for functions", () => {
        expect(yd_internal_getValueType(() => {})).toBe('[object Function]');
        expect(yd_internal_getValueType(function () {})).toBe('[object Function]');
    });

    it("should return '[object Date]' for Date objects", () => {
        expect(yd_internal_getValueType(new Date())).toBe('[object Date]');
        expect(yd_internal_getValueType('2024-01-01')).not.toBe('[object Date]');
    });

    it("should return '[object Promise]' for promises", () => {
        expect(yd_internal_getValueType(Promise.resolve())).toBe('[object Promise]');
        expect(yd_internal_getValueType(() => Promise.resolve())).not.toBe('[object Promise]');
        expect(yd_internal_getValueType(() => Promise.resolve())).toBe('[object Function]');
    });
});
