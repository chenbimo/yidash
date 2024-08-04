/**
 * @description 排序
 * @author grantguo <https://github.com/ForeverGuo>
 * @category array
 * @alias yd_array_sort
 * @param { Array } array
 * @param { Object } { order?: "asc" | "des", by?: it => it }
 * @return 返回排序后的数组
 * @summary 根据传入的参数进行排序，返回排序后的数组
 * @example
 *  sort([1, 3, 2], { order: 'asc' })
 * // => [1, 2, 3]
 *
 * sort([1, 3, 2])
 * // => [1, 2, 3]
 *
 * sort([{a: 1, b: 2}, {a: 2, b: 4}], { order: 'des', by: item => item.b })
 * // => [{a: 2, b: 4}, {a: 1, b: 2}]
 *
 * sort([{a: 1, b: 2}, {a: 2, b: 4}], { order: 'des' })
 * // => [{a: 1, b: 2}, {a: 2, b: 4}]
 *
 */

export default (array, ...other) => {
    other = other.length ? other : [{}];
    return [...array].sort((a, b) => {
        for (const { order = 'asc', by = (item) => item } of other) {
            const aValue = by(a);
            const bValue = by(b);
            if (aValue !== bValue) {
                const compare = aValue > bValue ? 1 : -1;
                return order === 'asc' ? compare : -compare;
            }
        }
    });
};
