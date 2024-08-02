import getValueType from '../internal/getValueType.js';
/**
 * 判断是否是正则表达式
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_regexp
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是正则表达式
 */
export default (value) => {
    return getValueType(value) === '[object RegExp]';
};
