/**
 * @alias yd_array_max
 * @category array
 * @param {Array} array - 输入的数组。
 * @returns {number} - 数组中的最大值。
 * @author penn <https://github.com/penn201500>
 * @example
 * console.log(arrayMax([1, 2, 3, 4, 5]))
 * // 输出: 5
 * @description 计算数组中的最大值。
 */
export default (array) => {
    try {
        return Math.max(...array);
    } catch (error) {
        throw new TypeError('An error occurred: ' + error.message);
    }
};
