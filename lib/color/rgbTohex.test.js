import { describe, it, expect } from 'vitest';
import yd_string_rgbToHex from './rgbToHex.js';

describe('yd_string_rgbTohex', () => {
    it('将RGB数组转换为十六进制颜色值', () => {
        const rgbArray = [255, 0, 128];
        const result = yd_string_rgbToHex(rgbArray);
        expect(result).toBe('#ff0080');
    });

    it('处理RGB值小于16的情况', () => {
        const rgbArray = [10, 5, 3];
        const result = yd_string_rgbToHex(rgbArray);
        expect(result).toBe('#0a0503');
    });

    it('处理RGB值为0的情况', () => {
        const rgbArray = [0, 0, 0];
        const result = yd_string_rgbToHex(rgbArray);
        expect(result).toBe('#000000');
    });
});
