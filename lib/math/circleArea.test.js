import { describe, it, expect } from 'vitest';
import yd_math_circleArea from './circleArea.js';

describe('yd_math_circleArea', () => {
    it('数字入参', () => {
        expect(yd_math_circleArea(2)).toBe(12.57);
    });
    it('数字入参，自定义小数位数', () => {
        expect(yd_math_circleArea(2, 3)).toBe(12.566);
    });
    it('数字入参，保留整数', () => {
        expect(yd_math_circleArea(2, 0)).toBe(13);
    });
    it('非数字入参', () => {
        expect(yd_math_circleArea('a')).toBe(undefined);
    });
    it('小数保留位数为非整数', () => {
        expect(yd_math_circleArea(2, 1.5)).toBe(undefined);
    });
});
