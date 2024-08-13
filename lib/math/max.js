/**
 * @description 返回array中最大值，如果为空或假值，则返回undefined
 * @author grantguo <https://github.com/ForeverGuo>
 * @category math
 * @alias yd_math_max
 * @param { Array } array
 * @return 返回array中最大值
 * @summary 返回array中最大值
 * @example
 * yd_math_max([1, 2, 3, 4]);
 * // => 4
 * yd_math_max([]);
 * // => undefined
 *
 */

export default (array) => {
    if (array.length === 0) return undefined;
    return Math.max(...array);
};
