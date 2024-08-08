import { describe, expect, it } from 'vitest';
import yd_is_probability from './probability';

describe('yd_is_probability', () => {
    it('should be `true`', () => {
        expect(yd_is_probability(1)).toBeTruthy();
    });

    it('should be `false`', () => {
        expect(yd_is_probability(0)).toBeFalsy();
    });

    it('should throw Error', () => {
        expect(() => yd_is_probability(true)).toThrowError('probability must be a number');
        expect(() => yd_is_probability(Symbol(''))).toThrowError('probability must be a number');
        expect(() => yd_is_probability([])).toThrowError('probability must be a number');
        expect(() => yd_is_probability({})).toThrowError('probability must be a number');
        expect(() => yd_is_probability(new Date())).toThrowError('probability must be a number');

        expect(() => yd_is_probability(-1)).toThrowError('probability must be between 0 and 1 inclusive.');
        expect(() => yd_is_probability(2)).toThrowError('probability must be between 0 and 1 inclusive.');
        // ...
    });
});

