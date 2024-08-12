/**
 * @alias yd_array_min
 * @category array
 * @param {Array} array - 输入的数组。
 * @returns {number} - 数组中的最小值。
 * @author penn <https://github.com/penn201500>
 * @example
 * console.log(arrayMin([1, 2, 3, 4, 5]))
 * // 输出: 1
 * @description 计算数组中的最小值
 */
export default (array) => {
    try {
        return Math.min(...array);
    } catch (error) {
        throw new TypeError('An error occurred: ' + error.message);
    }
};
