import yd_is_float from '../is/float.js';
/**
 * 获取2个数之间的随机数
 * @alias yd_number_random
 * @category number
 * @param {number} lower 最小值
 * @param {number} upper 最大值
 * @param {boolean} isFloat 是否浮点数
 * @returns {number} 随机数
 * @author 楠木 <157884200@qq.com> <https://github.com/nanmu-self>
 * @author 陈随易 <https://chensuiyi.me>
 * @summary 产生一个包括 lower 与 upper 之间的数。
 * 如果只提供一个参数返回一个0到提供数之间的数。
 * 如果 isFloat 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
 */

export default (lower, upper) => {
    // TODO: 后续判断是否是2个数字
    // 只要任意一个参数是浮点数，则返回浮点数
    const isFloat = yd_is_float(lower) || yd_is_float(upper);

    if (isFloat) {
        return Math.random() * (upper - lower) + lower;
    } else {
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
    }
};
