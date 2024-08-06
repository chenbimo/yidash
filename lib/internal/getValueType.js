/**
 * 获取数据的值类型
 * @alias yd_internal_getValueType
 * @category internal
 * @param {any} value 任意值
 * @returns {string} 返回 '[object 类型]' 字符
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_internal_getValueType(123) // '[object Number]'
 */
export default (value) => {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return Object.prototype.toString.call(value);
};
