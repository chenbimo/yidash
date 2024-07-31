/**
 * 查找数组中匹配的值
 * @author 陈随易 <https://chensuiyi.me>
 * @category 数组
 * @param {Array} array 数组对象
 * @param {String} field 要查找的属性
 * @param {Any} value 属性的值
 * @returns {Object} 返回匹配的对象
 */
export default (array, field, value) => {
    let result = {};
    for (let item of array) {
        for (let prop in item) {
            if (item.hasOwnProperty(prop)) {
                if (prop === field && item[prop] === value) {
                    result = item;
                    break;
                }
            }
        }
    }
    return result;
};
