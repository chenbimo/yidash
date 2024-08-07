/**
 * 计算矩形面积
 * @alias yd_math_rectangleArea
 * @category math
 * @param {number} width - 矩形的宽度
 * @param {number} height - 矩形的高度
 * @returns {number|undefined} 返回矩形的面积，如果输入不是数字则返回 undefined
 * @author 无名
 */

export default (width, height) => {
    if (typeof width !== 'number' || typeof height !== 'number') {
        return undefined;
    }
    return width * height;
};
