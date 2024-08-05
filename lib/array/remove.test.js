import { describe, it, expect } from 'vitest';
import yd_array_remove from './remove.js';

describe('yd_array_remove', () => {
    it('should remove all instances of an item when itemNumber is not specified', () => {
        const initialArray = ['易', '大', '师', '易'];
        const result = yd_array_remove(initialArray, '易');
        expect(result).toEqual(['大', '师']);
    });

    it('should remove the specified number of instances', () => {
        const initialArray = ['易', '大', '师', '易', '易'];
        const result = yd_array_remove(initialArray, '易', 2);
        expect(result).toEqual(['大', '师', '易']);
    });

    it('should throw an error if itemNumber is greater than the count of the item', () => {
        const initialArray = ['易', '大', '师'];
        const testFn = () => yd_array_remove(initialArray, '易', 5);
        expect(testFn).toThrow('删除个数大于数组中指定元素个数');
    });

    it('should not modify the array if itemNumber is 0', () => {
        const initialArray = ['易', '大', '师', '易'];
        const result = yd_array_remove(initialArray, '易', 0);
        expect(result).toEqual(initialArray);
    });

    it('should throw an error if the item is not found', () => {
        const initialArray = ['易', '大', '师'];
        const testFn = () => yd_array_remove(initialArray, '小', 1);
        expect(testFn).toThrow('删除个数大于数组中指定元素个数');
    });
});
