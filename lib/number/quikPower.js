/**
 * 快速幂
 * @author orusou <xfan718@gmail.com> <https://github.com/orusou>
 * @category number
 * @alias yd_number_quikPower
 * @param {number} base 底数
 * @param {number} power 指数
 * @returns {number} 幂结果
 * @summary 根据底数和指数快速计算幂结果
 */
export default (base, power) => {
    let result = 1;
    while (power > 0) {
        if (power & 1) {
            result *= base;
        }
        base *= base;
        power >>= 1;
    }
    return result;
}
