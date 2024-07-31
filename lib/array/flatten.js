/**
 * 将多维数组拍平为一维数组
 * @author WZBBiao <https://github.com/WZBbiao>
 * @category 数组
 * @param {Array} array - 需要拍平的数组
 * @returns {Array} - 拍平后的数组
 * @example
 * console.log(yd_array_flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
 */
export default (array) => {
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
    flatten(array);
    return result;
};
