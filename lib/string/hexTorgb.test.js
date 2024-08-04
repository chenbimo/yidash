import { describe, it, expect } from 'vitest';
import yd_string_hexTorgb from 'hexTorgb.js';

describe('yd_string_hexTorgb', () => {
    it('十六进制颜色值转换为将RGB数组', () => {  
        expect(yd_string_hexTorgb("#ff0080")).toBe([255, 0, 128]);
    });
});
