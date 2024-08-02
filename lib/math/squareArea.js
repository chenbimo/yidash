/**
 * 正方形面积
 * @author MothWillion <https://github.com/MothWillion>
 * @category math
 * @alias yd_math_squareArea
 * @param  {Number} l 正方形边长
 * @returns {Number} 正方形面积
 */

export default (l) => {
    if (Number(l) + '' === 'NaN') {
        console.error('正方形的边长必须是数字');
        return;
    }
    return l * l;
};
