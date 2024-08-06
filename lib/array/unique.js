/**
 * 数组去重
 * @alias yd_array_unique
 * @category array
 * @param {Array} array 数组数据
 * @returns {Array} 返回去重后的数组
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_array_unique([1,1,2,2,3,3]) // [1,2,3]
 */
export default (array) => {
    return [...new Set(array)];
};
