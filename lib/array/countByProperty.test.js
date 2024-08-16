import { it, expect, describe } from 'vitest';
import yd_array_countByProperty from './countByProperty';

const characters = [{ name: 'Luke Skywalker', eye_color: 'blue' }, { name: 'Darth Vader', eye_color: 'yellow' }, { name: 'Anakin Skywalker' }];

describe('yd_array_countByProperty', () => {
    it('should return correct count of a property', () => {
        const result = yd_array_countByProperty(characters, 'eye_color');
        expect(result).toEqual({ blue: 1, yellow: 1 });
    });
});
