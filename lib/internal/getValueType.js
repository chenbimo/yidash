/**
 * 获取数据类型
 * @author 陈随易 <https://chensuiyi.me>
 * @category 基础
 * @param {any} value 任意值
 * @returns {String} 返回 '[object 类型]' 字符
 */
export default (value) => {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return Object.prototype.toString.call(value);
};
