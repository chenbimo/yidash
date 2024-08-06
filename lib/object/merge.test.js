import { describe, it, expect } from 'vitest';
import yd_object_merge from './merge.js';

describe('yd_object_merge', () => {
    it('should return true', () => {
        const target = { a: 1, b: [2, 3], c: { d: 4 } };
        const source = { a: 2, b: [4, 5], c: { e: 6 } };
        expect(yd_object_merge(target, source)).toStrictEqual({ a: 2, b: [4, 5], c: { d: 4, e: 6 } });
    });
    it('should return true', () => {
        const target = { a: 1, b: 2, c: { d: 4 } };
        const source = { e: 2, f: [4, 5], g: { h: 6 } };
        expect(yd_object_merge(target, source)).toStrictEqual({ a: 1, b: 2, c: { d: 4 }, e: 2, f: [4, 5], g: { h: 6 } });
    });
});
