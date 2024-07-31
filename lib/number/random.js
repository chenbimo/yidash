/**
 * 获取2个数之间的随机数
 * @author 楠木 <157884200@qq.com> <https://github.com/nanmu-self>
 * @category 数字
 * @param {number} lower 最小值
 * @param {number} upper 最大值
 * @param {boolean} floating 是否浮点数
 * @returns {number} 随机数
 * @summary 产生一个包括 lower 与 upper 之间的数。
 * 如果只提供一个参数返回一个0到提供数之间的数。
 * 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
 */

export default (lower, upper, floating = false) => {
    // 如果只提供一个参数，则将upper设为lower，lower设为0
    if (arguments.length === 1) {
        upper = lower;
        lower = 0;
    }
    // 判断是否需要返回浮点数
    const isFloating = floating || (typeof lower === 'number' && lower % 1 !== 0) || (typeof upper === 'number' && upper % 1 !== 0);

    // 生成随机数
    const random = Math.random();
    const result = isFloating ? random * (upper - lower) + lower : Math.floor(random * (upper - lower + 1)) + lower;

    return result;
};
