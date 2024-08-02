import getValueType from '../internal/getValueType.js';
/**
 * 判断是否是Map值
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_map
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是Map值
 */
export default (value) => {
    return getValueType(value) === '[object Map]';
};
