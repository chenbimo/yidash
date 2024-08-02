/**
 * 数组按key排序
 * @author 陈随易 <https://chensuiyi.me>
 * @category array
 * @alias yd_array_keyBy
 * @param {Array} array 数组
 * @param {string} field 映射字段
 * @returns {object} 返回根据字段映射的对象
 */
export default (array, field) => {
    const result = {};
    array.forEach((item) => {
        result[item[field]] = item;
    });
    return result;
};
