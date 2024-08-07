import { describe, expect, test } from 'vitest';

import yd_array_pick from './pick.js';

describe('yd_array_pick', () => {
    test('根据标签选择数组中的项', () => {
        const array = [
            { label: 'a', value: 1 },
            { label: 'b', value: 2 },
            { label: 'c', value: 3 }
        ];
        const result = yd_array_pick(array, 'label', ['a', 'c']);
        expect(result).toEqual([
            { label: 'a', value: 1 },
            { label: 'c', value: 3 }
        ]);
    });

    test('当没有标签匹配时，返回空数组', () => {
        const array = [
            { label: 'a', value: 1 },
            { label: 'b', value: 2 }
        ];
        const result = yd_array_pick(array, 'label', ['c', 'd']);
        expect(result).toEqual([]);
    });

    test('当所有标签都匹配时，返回原数组', () => {
        const array = [
            { label: 'a', value: 1 },
            { label: 'b', value: 2 }
        ];
        const result = yd_array_pick(array, 'label', ['a', 'b']);
        expect(result).toEqual([
            { label: 'a', value: 1 },
            { label: 'b', value: 2 }
        ]);
    });

    test('处理空数组', () => {
        const array = [];
        const result = yd_array_pick(array, 'label', ['a', 'b']);
        expect(result).toEqual([]);
    });

    test('处理空标签列表', () => {
        const array = [
            { label: 'a', value: 1 },
            { label: 'b', value: 2 }
        ];
        const result = yd_array_pick(array, 'label', []);
        expect(result).toEqual([]);
    });
});
