import { describe, it, expect } from 'vitest';
import yd_is_card from './card.js';

describe('yd_is_card', () => {
    it('it shoule return a boolean', () => {
        const card_1 = '110101199001013590';
        expect(yd_is_card(card_1)).toEqual(true);
        const card_2 = '11010119900101359';
        expect(yd_is_card(card_2)).toEqual(false);
    });
});
