import { describe, it, expect } from 'vitest';
import yd_object_clear from './clear.js';

describe('yd_object_clear', () => {
    it('should return repaired object', () => {
        expect(yd_object_clear({ a: 1, b: undefined, c: null, d: 'a' })).toStrictEqual({ a: 1, d: 'a' });
        expect(yd_object_clear({ a: 1, b: undefined, c: null, d: 'a' }, [undefined])).toStrictEqual({ a: 1, c: null, d: 'a' });
    });
});
