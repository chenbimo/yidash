import { it, expect, describe } from 'vitest';
import yd_is_date from './date.js';

describe('yd_is_date', () => {
    it('should return true for Date objects', () => {
        expect(yd_is_date(new Date())).toBe(true);
    });

    it('should return false for objects that are not Date', () => {
        expect(yd_is_date({})).toBe(false);
        expect(yd_is_date([])).toBe(false);
        expect(yd_is_date('2024-01-01')).toBe(false); // string
        expect(yd_is_date('2024-01-01T00:00:00Z')).toBe(false);
        expect(yd_is_date(1)).toBe(false);
        expect(yd_is_date(null)).toBe(false);
        expect(yd_is_date(undefined)).toBe(false);
        expect(yd_is_date(true)).toBe(false); // boolean
    });
});
