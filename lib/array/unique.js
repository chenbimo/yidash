/**
 * 数组去重
 * @author 陈随易 <https://chensuiyi.me>
 * @category 数组
 * @param {Array} array 数组数据
 * @returns {Array} 返回去重后的数组
 */
export default (array) => {
    return [...new Set(array)];
};
