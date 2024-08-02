import getValueType from '../internal/getValueType.js';
/**
 * 判断是否是Symbol值
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_symbol
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是Symbol值
 */
export default (value) => {
    return getValueType(value) === '[object Symbol]';
};
