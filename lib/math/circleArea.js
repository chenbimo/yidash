/**
 * 计算圆形面积
 * @author Amonduul
 * @alias yd_math_circleArea
 * @category math
 * @param {Number} radius - 圆形的半径，必须是大于等于 0 的数字
 * @param {Number}  fractionDigits - 保留的小数位数，必须是大于等于 0 的整数，默认为 2
 * @returns {Number|undefined} 返回圆形的面积，如果参数不合法则返回 undefined
 */

export default (radius, fractionDigits = 2) => {
    if (typeof radius !== 'number' || radius < 0) {
        return undefined;
    }
    if (!Number.isInteger(fractionDigits) || fractionDigits < 0) {
        return undefined;
    }
    return Number((Math.PI * radius * radius).toFixed(fractionDigits));
};
