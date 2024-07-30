import { yd_core_getTag } from './yd_core_getTag.js';
/**
 * 判断是否是函数
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是函数
 */
export const yd_is_function = (value) => {
    const tag = yd_core_getTag(value);
    return tag === '[object Function]' || tag === '[object AsyncFunction]';
};
