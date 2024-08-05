import { arrayPickBy } from './arrayPickBy';

describe('arrayPickBy', () => {
    test('根据标签选择数组中的项', () => {
        const array = [
            { label: 'a', value: 1 },
            { label: 'b', value: 2 },
            { label: 'c', value: 3 }
        ];
        const keys = ['a', 'c'];
        const result = arrayPickBy(array, keys);
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
        const keys = ['c', 'd'];
        const result = arrayPickBy(array, keys);
        expect(result).toEqual([]);
    });

    test('当所有标签都匹配时，返回原数组', () => {
        const array = [
            { label: 'a', value: 1 },
            { label: 'b', value: 2 }
        ];
        const keys = ['a', 'b'];
        const result = arrayPickBy(array, keys);
        expect(result).toEqual([
            { label: 'a', value: 1 },
            { label: 'b', value: 2 }
        ]);
    });

    test('处理空数组', () => {
        const array = [];
        const keys = ['a', 'b'];
        const result = arrayPickBy(array, keys);
        expect(result).toEqual([]);
    });

    test('处理空标签列表', () => {
        const array = [
            { label: 'a', value: 1 },
            { label: 'b', value: 2 }
        ];
        const keys = [];
        const result = arrayPickBy(array, keys);
        expect(result).toEqual([]);
    });
});
