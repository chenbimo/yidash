/**
 * @alias yd_array_swapElements
 * @category array
 * @param {Array} array - 需要交换元素的数组。
 * @param {...Array} pairs - 每个 element 对由两个索引组成，表示数组中要交换的元素位置。
 * @returns {void} - 该函数会直接修改输入的数组，不返回任何值。
 * @author penn <https://github.com/penn201500>
 * @summary 该函数接收一个数组和 1或多 个索引对，交换数组中每对索引指定的位置的元素。函数直接修改输入的数组，因此不会返回新的数组。如果索引对中的两个索引相同，该索引处的元素保持不变。
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * yd_array_swapElements(numbers, [0, 3], [1, 4]);
 * console.log(numbers); // [4, 5, 3, 1, 2]
 *
 * @description 交换数组中元素对的位置。
 */
export default (array, ...pairs) => {
    // 检查 array 是否为数组
    if (!Array.isArray(array)) {
        throw new TypeError('第一个参数必须是一个数组');
    }

    // 检查每对索引是否为合法数组和有效的数字
    pairs.forEach((pair) => {
        if (!Array.isArray(pair) || pair.length !== 2) {
            throw new TypeError('每个索引对必须是一个包含两个数字的数组');
        }

        const [index1, index2] = pair;

        if (typeof index1 !== 'number' || typeof index2 !== 'number') {
            throw new TypeError('索引必须是数字');
        }

        if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
            throw new RangeError('索引超出数组的范围');
        }
    });

    // 执行交换
    pairs.forEach(([index1, index2]) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    });
};
