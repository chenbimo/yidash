import { it, expect, describe } from 'vitest';
import yd_array_countByProperty from './countByProperty';

const characters = [{ name: 'Luke Skywalker', eye_color: 'blue' }, { name: 'Darth Vader', eye_color: 'yellow' }, { name: 'Anakin Skywalker' }];

describe('yd_array_countByProperty', () => {
    it('should return correct count of a property', () => {
        const result = yd_array_countByProperty(characters, 'eye_color');
        expect(result).toEqual({ blue: 1, yellow: 1 });
    });

    it('should return an empty object if the array is empty', () => {
        const result = yd_array_countByProperty([], 'eye_color');
        expect(result).toEqual({});
    });

    it('should return an empty object if property is not a valid string', () => {
        const result = yd_array_countByProperty(characters, 123);
        expect(result).toEqual({});
    });

    it('should return an empty object if items is not an array', () => {
        const result = yd_array_countByProperty('characters', 'eye_color');
        expect(result).toEqual({});
    });

    it('should return an empty object if all objects does not have the specified property', () => {
        const result = yd_array_countByProperty([{ name: 'Luke Skywalker' }, { name: 'Darth Vader' }], 'eye_color');
        expect(result).toEqual({});
    });

    it('should skip objects where the specified property is undefined', () => {
        const modifiedCharacters = [
            { name: 'Luke Skywalker', eye_color: 'blue' },
            { name: 'Darth Vader', eye_color: 'yellow' },
            { name: 'Anakin Skywalker', eye_color: undefined }
        ];
        const result = yd_array_countByProperty(modifiedCharacters, 'eye_color');
        expect(result).toEqual({ blue: 1, yellow: 1 });
    });
});
