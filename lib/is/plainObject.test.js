import { describe, expect, it } from 'vitest';
import yd_is_plainObject from './plainObject.js';

describe('yd_is_plainObject', () => {
    it('should be `true`', () => {
        expect(yd_is_plainObject({})).toBe(true);
    });

    it('should be `false`', () => {
        expect(yd_is_plainObject({ a: 1 })).toBe(false);
        expect(yd_is_plainObject(null)).toBe(false);
    });
});
