import { describe, it, expect } from 'vitest';
import yd_datetime_stringToDate from './stringToDate';

describe('yd_datetime_stringToDate', () => {
    it("should return a corresponding Date object for the 'YYYY-MM-DD HH:mm:SS' format"),
        () => {
            const date = yd_datetime_stringToDate('2024-01-01 00:00:00', 'YYYY-MM-DD HH:mm:SS');
            expect(date).toEqual(new Date(Date.UTC(2024, 0, 1, 0, 0, 0)));
        };

    it("should return a corresponding Date object for the 'YYYY-MM-DD_HH:mm:SS' format"),
        () => {
            const date = yd_datetime_stringToDate('2024-01-01_00:00:00', 'YYYY-MM-DD_HH:mm:SS');
            expect(date).toEqual(new Date(Date.UTC(2024, 0, 1, 0, 0, 0)));
        };

    it("should return a corresponding Date object for the 'DD/MM/YYYY HH:mm:SS' format"),
        () => {
            const date = yd_datetime_stringToDate('01/01/2024 00:00:00', 'DD/MM/YYYY HH:mm:SS');
            expect(date).toEqual(new Date(Date.UTC(2024, 0, 1, 0, 0, 0)));
        };

    it("should return a corresponding Date object for the 'MM-DD-YYYY' format"),
        () => {
            const date = yd_datetime_stringToDate('01-01-2024', 'MM-DD-YYYY');
            expect(date).toEqual(new Date(Date.UTC(2024, 0, 1, 0, 0, 0)));
        };

    it('should return null for an invalid format'),
        () => {
            const format = 'mm-dd-yy';
            const result = yd_datetime_stringToDate('01-01-2024', format);
            expect(result).toBeNull();
        };

    it('should return null for a invalid date string'),
        () => {
            const date = yd_datetime_stringToDate('invalid', 'YYYY-MM-DD HH:mm:SS');
            expect(date).toBeNull();
        };

    it('should correctly adjust for timezone offset'),
        () => {
            const date = yd_datetime_stringToDate('2024-01-01 00:00:00', 'YYYY-MM-DD HH:mm:SS', -5); // UTC-5
            expect(date).toEqual(new Date(Date.UTC(2024, 0, 1, 5, 0, 0)));
        };

    it('should correctly convert to UTC string', () => {
        const date = yd_datetime_stringToDate('2024-01-01 00:00:00', 'YYYY-MM-DD HH:mm:SS', -5); // UTC-5
        expect(date.toUTCString()).toBe('Sun, 31 Dec 2023 19:00:00 GMT');
    });
});
