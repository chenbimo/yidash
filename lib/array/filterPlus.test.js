import { expect, it, describe } from 'vitest';
import yd_array_filterPlus from './filterPlus';

describe('yd_array_filterPlus', () => {
  it('should return two arrays, one with even numbers and one with odd numbers', () => {
    const input = [1, 2, 3, 4, 5];
    const result = yd_array_filterPlus(input, (item) => item % 2 === 0);
    expect(result[0]).toStrictEqual([2, 4]); // 满足条件的数组
    expect(result[1]).toStrictEqual([1, 3, 5]); // 不满足条件的数组
  });

  it('should return two empty arrays when the input array is empty', () => {
    const input = [];
    const result = yd_array_filterPlus(input, (item) => item > 0);
    expect(result[0]).toHaveLength(0); // 满足条件的数组为空
    expect(result[1]).toHaveLength(0); // 不满足条件的数组为空
  });

  it('should handle non-numeric values correctly', () => {
    const input = [1, 'two', 3, 'four', 5];
    const result = yd_array_filterPlus(input, (item) => typeof item === 'number');
    expect(result[0]).toStrictEqual([1, 3, 5]); // 满足条件的数组
    expect(result[1]).toStrictEqual(['two', 'four']); // 不满足条件的数组
  });

  it('should return the same array when all elements satisfy the condition', () => {
    const input = [2, 4, 6, 8];
    const result = yd_array_filterPlus(input, (item) => item % 2 === 0);
    expect(result[0]).toStrictEqual([2, 4, 6, 8]); // 满足条件的数组
    expect(result[1]).toHaveLength(0); // 不满足条件的数组为空
  });

  it('should return an empty array for satisfying elements when no elements satisfy the condition', () => {
    const input = [1, 3, 5, 7];
    const result = yd_array_filterPlus(input, (item) => item % 2 === 0);
    expect(result[0]).toHaveLength(0); // 满足条件的数组为空
    expect(result[1]).toStrictEqual([1, 3, 5, 7]); // 不满足条件的数组
  });
  
});