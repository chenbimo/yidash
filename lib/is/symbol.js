import getValueType from '../internal/getValueType.js';
/**
 * 判断是否是Symbol值
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是Symbol值
 */
export default (value) => {
    return getValueType(value) === '[object Symbol]';
};
