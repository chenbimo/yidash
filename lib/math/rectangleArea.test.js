import { describe, it, expect } from 'vitest';
import yd_math_rectangleArea from './rectangleArea.js';

describe('yd_math_rectangleArea', () => {
    it('数字入参', () => {
        expect(yd_math_rectangleArea(10, 20)).toBe(200);
    });
    it('非数字入参', () => {
        expect(yd_math_rectangleArea('b', 1)).toBe(undefined);
    });
});
