import { describe, it, expect } from 'vitest';
import yd_idCard_getAge from './getAge.js';

describe('yd_array_chunk', () => {
    it('默认单测', () => {
        const age = yd_idCard_getAge('220181199608286312');
        expect(age).toBe(28);
    });
});
