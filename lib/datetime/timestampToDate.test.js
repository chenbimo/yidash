import { describe, it, expect } from 'vitest';
import yd_datetime_timestampToDate from './timestampToDate.js';

describe('yd_datetime_timestampToDate', () => {
    it('should return a Date object for valid 10-digit second-level timestamp', () => {
        const ts = 1704067200;
        const expectedDate = new Date(ts * 1000);
        expect(yd_datetime_timestampToDate(ts)).toEqual(expectedDate);
    });

    it('should return a Date object for valid 13-digit millisecond-level timestamp', () => {
        const ts = 1704067200000;
        const expectedDate = new Date(ts);
        expect(yd_datetime_timestampToDate(ts)).toEqual(expectedDate);
    });

    it('should handle string input and return a Date object for valid 10-digit second-level timestamp', () => {
        const ts = '1704067200';
        const expectedDate = new Date(parseInt(ts, 10) * 1000);
        expect(yd_datetime_timestampToDate(ts)).toEqual(expectedDate);
    });

    it('should handle string input and return a Date object for valid 13-digit millisecond-level timestamp', () => {
        const ts = '1704067200000';
        const expectedDate = new Date(parseInt(ts, 10));
        expect(yd_datetime_timestampToDate(ts)).toEqual(expectedDate);
    });

    it('should return null for invalid timestamp string', () => {
        expect(yd_datetime_timestampToDate('invalid')).toBeNull();
    });

    it('should return null for non-numeric input', () => {
        expect(yd_datetime_timestampToDate(null)).toBeNull();
        expect(yd_datetime_timestampToDate(undefined)).toBeNull();
        expect(yd_datetime_timestampToDate({})).toBeNull();
        expect(yd_datetime_timestampToDate([])).toBeNull();
    });

    it('should return null for negative numbers', () => {
        expect(yd_datetime_timestampToDate(-1234567890)).toBeNull();
    });

    it('should return null for timestamps that are neither 10 nor 13 digits long', () => {
        expect(yd_datetime_timestampToDate(123)).toBeNull();
        expect(yd_datetime_timestampToDate(123456789012)).toBeNull();
    });
});
