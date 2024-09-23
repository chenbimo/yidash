import { describe, it, expect } from 'vitest';
import yd_number_quikPower from '../../lib/number/quikPower.js';

describe('Quik Power Tests', () => {
    it('compute 2^3', () => {
        const result = yd_number_quikPower(2, 3);
        expect(result).toBe(8);
    });
    it('compute 3^9', () => {
        const result = yd_number_quikPower(3, 9);
        expect(result).toBe(19683);
    });
    it('compute 2^50', () => {
        const result = yd_number_quikPower(2, 50);
        expect(result).toBe(Math.pow(2, 50));
    });
});
