/**
 * 查找数组中匹配的索引
 * @author 陈随易 <https://chensuiyi.me>
 * @category array
 * @alias yd_array_findIndex
 * @param {Array} array 数组
 * @param {string} field 要查找的字段
 * @param {string} value 该字段的值
 * @returns {number} 返回匹配的索引
 */
export default (array, field, value) => {
    let result = null;
    for (const [index, item] of array.entries()) {
        for (const prop in item) {
            if (Object.prototype.hasOwnProperty.call(item, prop)) {
                if (prop === field && item[prop] === value) {
                    result = index;
                    break;
                }
            }
        }
    }
    return result;
};
