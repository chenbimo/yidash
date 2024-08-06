import { describe, it, expect } from 'vitest';
import yd_idCard_getAge from './getAge.js';

describe('yd_idCard_getAge', () => {
    it('shoule get a number age', () => {
        const age_1 = yd_idCard_getAge('220181199608286312');
        expect(age_1).toBe(28);
        const age_2 = yd_idCard_getAge('42132120020509720X');
        expect(age_2).toBe(22);
    });
});
