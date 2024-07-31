/**
 * 查找数组中匹配的索引
 * @author 陈随易 <https://chensuiyi.me>
 * @category 数组
 * @param {Array} array 数组
 * @param {String} field 要查找的字段
 * @param {String} value 该字段的值
 * @returns {Number} 返回匹配的索引
 */
export default (array, field, value) => {
    let result = null;
    for (const [index, item] of array.entries()) {
        for (let prop in item) {
            if (item.hasOwnProperty(prop)) {
                if (prop === field && item[prop] === value) {
                    result = index;
                    break;
                }
            }
        }
    }
    return result;
};
