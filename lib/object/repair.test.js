import { describe, it, expect } from 'vitest';
import yd_object_repair from './repair.js';

describe('yd_object_repair', () => {
    it('should return repaired object', () => {
        expect(yd_object_repair({ a: 1, b: undefined, c: null, d: 'a' })).toStrictEqual({ a: 1, b: '', c: '', d: 'a' });
        expect(yd_object_repair({ a: 1, b: undefined, c: null, d: 'a' }, [undefined])).toStrictEqual({ a: 1, b: '', c: null, d: 'a' });
    });
});
