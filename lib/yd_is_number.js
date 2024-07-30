import { yd_core_getTag } from './yd_core_getTag.js';
/**
 * 判断是否是数字
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是数字
 */
export const yd_is_number = (value) => {
    return yd_core_getTag(value) === '[object Number]' && !isNaN(value);
};
