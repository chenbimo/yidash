import getValueType from '../internal/getValueType.js';
/**
 * 判断是否是布尔值
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_boolean
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是布尔值
 */
export default (value) => {
    return value === true || value === false || getValueType(value) === '[object Boolean]';
};
