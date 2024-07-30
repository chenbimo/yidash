import { yd_core_getTag } from './yd_core_getTag.js';
/**
 * 判断是否是日期
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是日期
 */
export const yd_is_date = (value) => {
    return yd_core_getTag(value) === '[object Date]';
};
