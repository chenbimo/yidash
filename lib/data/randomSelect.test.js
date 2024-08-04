import { describe, it, expect } from 'vitest';
import yd_data_randomSelect from './randomSelect';

describe('yd_data_randomSelect', () => {
    it('should return a random element from an array'),
        () => {
            const array = [1, 2, 3, 4, 5];
            const result = array.includes(yd_data_randomSelect(array));
            expect(result).toBe(true);
        };

    it('should return a random element from a set'),
        () => {
            const set = new Set([1, 2, 3, 4, 5]);
            const result = Array.from(set).includes(yd_data_randomSelect(set));
            expect(result).toBe(true);
        };

    it('should return a random char from a string'),
        () => {
            const string = 'helloworld';
            const result = string.includes(yd_data_randomSelect(string));
            expect(result).toBe(true);
        };

    it('should return a random value from a map'),
        () => {
            const map = new Map([
                [1, 'first'],
                [2, 'second'],
                [3, 'third']
            ]);
            const values = Array.from(map.values());
            const result = values.includes(yd_data_randomSelect(map));
            expect(result).toBe(true);
        };

    it('should return a random value from an object'),
        () => {
            const object = { first: 1, second: 2, third: 3 };
            const values = Object.values(object);
            const result = values.includes(yd_data_randomSelect(object));
            expect(result).toBe(true);
        };

    it('should throw TypeError if input collection is empty'),
        () => {
            expect(() => yd_data_randomSelect()).toThrow(TypeError);
            expect(() => yd_data_randomSelect([])).toThrow(TypeError);
            expect(() => yd_data_randomSelect({})).toThrow(TypeError);
            expect(() => yd_data_randomSelect('')).toThrow(TypeError);
            expect(() => yd_data_randomSelect(new Set())).toThrow(TypeError);
            expect(() => yd_data_randomSelect(new Map())).toThrow(TypeError);
        };

    it('should throw TypeError if input collection is not supported'),
        () => {
            expect(() => yd_data_randomSelect(123)).toThrow(TypeError);
            expect(() => yd_data_randomSelect(null)).toThrow(TypeError);
            expect(() => yd_data_randomSelect(undefined)).toThrow(TypeError);
            expect(() => yd_data_randomSelect(true)).toThrow(TypeError);
            expect(() => yd_data_randomSelect(false)).toThrow(TypeError);
        };
});
