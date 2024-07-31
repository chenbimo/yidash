import { yd_internal_getValueType } from '../internal/getValueType.js';
/**
 * 判断是否是布尔值
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是布尔值
 */
export default (value) => {
    return value === true || value === false || yd_internal_getValueType(value) === '[object Boolean]';
};
