import { describe, it, expect } from 'vitest';
import yd_function_curry from './curry.js';

describe('yd_function_curry', () => {
    const sum = (a, b, c) => a + b + c;
    it('should return the sum when all arguments are provided at once', () => {
        const curriedSum = yd_function_curry(sum);
        expect(curriedSum(1, 2, 3)).toBe(6);
    });
    it('should return the sum when arguments are provided one by one', () => {
        const curriedSum = yd_function_curry(sum);
        expect(curriedSum(1)(2)(3)).toBe(6);
    });
    it('should return the sum when arguments are provided in parts', () => {
        const curriedSum = yd_function_curry(sum);
        expect(curriedSum(1, 2)(3)).toBe(6);
        expect(curriedSum(1)(2, 3)).toBe(6);
    });
    it('should work with different functions', () => {
        const multiply = (a, b, c, d) => a * b * c * d;
        const curriedMultiply = yd_function_curry(multiply);
        expect(curriedMultiply(1, 2, 3, 4)).toBe(24);
        expect(curriedMultiply(1)(2)(3)(4)).toBe(24);
        expect(curriedMultiply(1, 2)(3, 4)).toBe(24);
    });

    it('should handle single argument functions', () => {
        const identity = (x) => x;
        const curriedIdentity = yd_function_curry(identity);
        expect(curriedIdentity(42)).toBe(42);
    });
});
