import { describe, it, expect } from 'vitest';
import yd_object_randomSelect from '../../lib/object/randomSelect.js';

describe('yd_object_randomSelect function', () => {
    it('should return a random element from an array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = yd_object_randomSelect(array);
        expect(array).toContain(result);
    });

    it('should return a random character from a string', () => {
        const string = 'hello';
        const result = yd_object_randomSelect(string);
        expect(string).toContain(result);
    });

    it('should return a random element from a set', () => {
        const set = new Set(['apple', 'banana', 'cherry']);
        const result = yd_object_randomSelect(set);
        expect(set.has(result)).toBe(true);
    });

    it('should return a random value from a map', () => {
        const map = new Map([
            ['a', 1],
            ['b', 2],
            ['c', 3]
        ]);
        const result = yd_object_randomSelect(map);
        expect(Array.from(map.values())).toContain(result);
    });

    it('should return a random value from an object', () => {
        const obj = { x: 10, y: 20, z: 30 };
        const result = yd_object_randomSelect(obj);
        expect(Object.values(obj)).toContain(result);
    });

    it('should throw TypeError if input is null', () => {
        const testFunc = () => yd_object_randomSelect(null);
        expect(testFunc).toThrowError(TypeError);
    });

    it('should throw TypeError if input is undefined', () => {
        const testFunc = () => yd_object_randomSelect(undefined);
        expect(testFunc).toThrowError(TypeError);
    });

    it('should throw Error if the collection is empty', () => {
        const testFunc = () => yd_object_randomSelect([]);
        expect(testFunc).toThrowError(Error);
    });

    it('should throw TypeError for unsupported types (like numbers)', () => {
        const testFunc = () => yd_object_randomSelect(123);
        expect(testFunc).toThrowError(TypeError);
    });
});
