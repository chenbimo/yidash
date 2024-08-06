import getValueType from '../internal/getValueType.js';

/**
 * 是否是数组
 * @alias yd_is_array
 * @category is
 * @param {any} value 任意值
 * @returns {boolean} 返回是否是数组
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_is_array([1,2,3]) // true
 */
export default (value) => {
    return Array.isArray(value) || getValueType(value) === '[object Array]';
};
