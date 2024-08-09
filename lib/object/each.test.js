import { describe, it, expect } from 'vitest';
import yd_object_each from './each.js';

describe('yd_object_each', () => {
    it('should iterate over all enumerable properties of an object and execute a callback function', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = [];
        yd_object_each(obj, (value, key) => {
            result.push(`${key}: ${value}`);
        });
        expect(result).toEqual(['a: 1', 'b: 2', 'c: 3']);
    });

    it('should throw an error if the callback is not a function', () => {
        expect(() => yd_object_each({}, 'foo')).toThrow('Callback must be a function');
    });
});
