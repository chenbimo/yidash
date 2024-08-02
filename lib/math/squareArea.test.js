import { describe, it, expect } from 'vitest';
import yd_math_squareArea from './squareArea.js';

describe('yd_math_squareArea', () => {
    it('数字入参', () => {
        expect(yd_math_squareArea(2)).toBe(4);
    });
    it('非数字入参', () => {
        expect(yd_math_squareArea('a')).toBe(undefined);
    });
});
