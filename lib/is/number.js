import getValueType from '../internal/getValueType.js';

/**
 * 判断是否是数字
 * @alias yd_is_number
 * @category is
 * @param {any} value 任意值
 * @returns {boolean} 返回是否是数字
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_is_number(123) // true
 */
export default (value) => {
    return getValueType(value) === '[object Number]' && !isNaN(value);
};
