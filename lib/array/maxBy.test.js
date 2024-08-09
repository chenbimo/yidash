import { describe, it, expect } from 'vitest';
import yd_array_maxBy from './maxBy.js';

describe('yd_array_maxBy', () => {
    it('should find the element with the maximum value in an array', () => {
        const array = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 20 }
        ];

        const result = yd_array_maxBy(array, 'age');
        expect(result).toEqual({ name: 'Bob', age: 30 });
    });

    it('should accept a function as the iteratee', () => {
        const array = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 },
            { name: 'Charlie', age: 20 }
        ];

        const result = yd_array_maxBy(array, (item) => item.age);
        expect(result).toEqual({ name: 'Bob', age: 30 });
    });

    it('should throw an error if the array is empty', () => {
        expect(() => yd_array_maxBy([], 'age')).toThrow('First argument must be a non-empty array.');
    });

    it('should throw an error if the iteratee is not a function or a string', () => {
        expect(() => yd_array_maxBy([{ a: 1 }, { a: 2 }], 123)).toThrow('Second argument must be a function or a string.');
    });
});
