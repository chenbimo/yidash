import getValueType from '../internal/getValueType';

/**
 * 是否是数组
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_array
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是数组
 */
export default (value) => {
    return Array.isArray(value) || getValueType(value) === '[object Array]';
};
