import { describe, it, expect } from 'vitest';
import yd_is_odd from '../../lib/is/odd';

describe('yd_is_odd', () => {
    it('should be `true`', () => {
        expect(yd_is_odd(13)).toBeTruthy();
        expect(yd_is_odd(-13)).toBeTruthy();
    });

    it('should be `false`', () => {
        expect(isOdd(0)).toBeFalsy();
        expect(isOdd(2)).toBeFalsy();
        expect(isOdd(-2)).toBeFalsy();
    });

    it('should throw Error', () => {
        expect(() => isOdd(true)).toThrowError('value must be a number');
        expect(() => isOdd(Symbol())).toThrowError('value must be a number');
        expect(() => isOdd([])).toThrowError('value must be a number');
        expect(() => isOdd({})).toThrowError('value must be a number');
        expect(() => isOdd(new Date())).toThrowError('value must be a number');
        // ...
    });
});
