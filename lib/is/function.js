import getValueType from '../internal/getValueType.js';
/**
 * 判断是否是函数
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_function
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是函数
 */
export default (value) => {
    const tag = getValueType(value);
    return tag === '[object Function]' || tag === '[object AsyncFunction]';
};
