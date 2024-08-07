import { describe, it, expect } from 'vitest';
import yd_object_mergeAndConcat from './mergeAndConcat.js';

describe('yd_object_mergeAndConcat', () => {
    it('should return true', () => {
        const target = { a: 1, b: [2, 3], c: { d: 4 } };
        const source = { a: 2, b: [4, 5], c: { e: 6 } };
        expect(yd_object_mergeAndConcat(target, source)).toStrictEqual({ a: 2, b: [2, 3, 4, 5], c: { d: 4, e: 6 } });
    });
});
