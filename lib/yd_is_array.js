import { yd_core_getTag } from './yd_core_getTag.js';

/**
 * 是否是数组
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是数组
 */
export const yd_is_array = (value) => {
    return yd_core_getTag(value) === '[object Array]';
};
