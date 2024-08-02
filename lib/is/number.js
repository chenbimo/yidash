import getValueType from '../internal/getValueType.js';

/**
 * 判断是否是数字
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_number
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是数字
 */
export default (value) => {
    return getValueType(value) === '[object Number]' && !isNaN(value);
};
