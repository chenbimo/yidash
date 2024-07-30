import { yd_core_getTag } from './yd_core_getTag.js';
/**
 * 判断是否是Set值
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是Set值
 */
export const yd_is_set = (value) => {
    return yd_core_getTag(value) === '[object Set]';
};
