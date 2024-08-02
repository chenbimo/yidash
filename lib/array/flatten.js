/**
 * 将多维数组拍平为一维数组
 * @author WZBBiao <https://github.com/WZBbiao>
 * @category array
 * @alias yd_array_flatten
 * @param {Array} arr - 需要拍平的数组
 * @returns {Array} - 拍平后的数组
 * @example
 * console.log(yd_array_flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
 */
export default (arr) => {
    const result = [];
    const flatten = (arr) => {
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                result.push(item);
            }
        });
    };
    flatten(arr);
    return result;
};
