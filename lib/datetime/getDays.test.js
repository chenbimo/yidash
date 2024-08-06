import { describe, it, expect } from 'vitest';
import yd_dateTime_getDays from './getDays.js';

describe('yd_dateTime_getDays', () => {
    it('shoule get a number days', () => {
        const days_1 = yd_dateTime_getDays();
        expect(days_1).toEqual(31);
        const days_2 = yd_dateTime_getDays(2024, 9);
        expect(days_2).toEqual(30);
    });
});
