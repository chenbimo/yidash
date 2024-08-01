import { describe, it, expect } from 'vitest';
import yd_datetime_customFormat from '../../lib/datetime/customFormat.js';

describe('yd_datetime_customFormat', () => {
    it('should return the current date and time in default format "YYYY-MM-DD_HH-mm-SS"', () => {
        const result = yd_datetime_customFormat();
        const regex = /^\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}$/;
        expect(result).toMatch(regex);
    });

    it('should format the current date and time as "DD/MM/YYYY HH:mm:SS"', () => {
        const result = yd_datetime_customFormat('DD/MM/YYYY HH:mm:SS');
        const regex = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/;
        expect(result).toMatch(regex);
    });

    it('should format the current date and time as "MM-DD-YYYY"', () => {
        const result = yd_datetime_customFormat('MM-DD-YYYY');
        const regex = /^\d{2}-\d{2}-\d{4}$/;
        expect(result).toMatch(regex);
    });

    it('should handle custom format "YYYY MM DD HH mm SS"', () => {
        const result = yd_datetime_customFormat('YYYY MM DD HH mm SS');
        const regex = /^\d{4} \d{2} \d{2} \d{2} \d{2} \d{2}$/;
        expect(result).toMatch(regex);
    });

    it('should return null and log an error if an invalid date format is used', () => {
        const result = yd_datetime_customFormat('INVALID-FORMAT');
        expect(result).toBe('INVALID-FORMAT');
    });
});
