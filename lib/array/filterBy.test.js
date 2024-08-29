import { it, expect, describe } from 'vitest';
import yd_array_filterBy from './filterBy.js';

describe('yd_array_filterBy', () => {
    it('应该返回 true', () => {
        const arrs = [
            { type: 'food', value: 1 },
            { type: 'book', value: 2 },
            { type: 'book', value: 3 },
            { type: 'food', value: 4 },
            { type: 'book', value: 5 }
        ];
        const result = yd_array_filterBy(arrs, (item) => item.type === 'food');
        expect(result).toStrictEqual([
            { type: 'food', value: 1 },
            { type: 'food', value: 4 }
        ]);
    });
});
