import { describe, it, expect } from 'vitest';
import convertUnits from './convertUnits.js';

describe('Unit Conversion Tests', () => {
    it('should convert meters to kilometers', () => {
        const result = convertUnits(1000, 'meter', 'kilometer');
        expect(result).toBeCloseTo(1, 5); // 1km
    });

    it('should convert square meters to square kilometers', () => {
        const result = convertUnits(1_000_000, 'squareMeter', 'squareKilometer');
        expect(result).toBeCloseTo(1, 5); // 1km²
    });

    it('should convert liters to milliliters', () => {
        const result = convertUnits(1, 'liter', 'milliliter');
        expect(result).toBeCloseTo(1000, 5); // 1000ml
    });

    it('should convert seconds to hours', () => {
        const result = convertUnits(3600, 'second', 'hour');
        expect(result).toBeCloseTo(1, 5); // 1hr
    });

    it('should convert custom units', () => {
        const customSymbol = Symbol('custom');
        const customUnits = {
            custom: {
                unit1: { factor: 3, symbol: customSymbol, aliases: [] },
                unit2: { factor: 4, symbol: customSymbol, aliases: [] }
            }
        };
        const result = convertUnits(12, 'unit1', 'unit2', customUnits);
        expect(result).toBeCloseTo(9, 5); // 9 = (12 * 3 / 4)
    });

    it('should throw error for incompatible units', () => {
        expect(() => convertUnits(1, 'meter', 'liter')).toThrow('Units must be of the same category for conversion');
    });

    it('should throw error for non-existent units', () => {
        expect(() => convertUnits(1, 'unknownUnit', 'meter')).toThrow('Unit unknownUnit not found');
    });
});
