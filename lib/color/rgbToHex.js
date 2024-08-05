/**
 * rgb转16进制颜色
 * @alias yd_string_rgbTohex
 * @category color
 * @param {Array} rgbArr 要转换的rgv颜色值数组
 * @returns {string} hex颜色
 * @author wzskyline
 * @example  yd_string_rgbTohex([255, 0, 0]) -> #FF0000
 */
export default (rgbArr) => {
    //return '#' + rgbarr.map(value => { const hex = value.toString(16); return hex.length === 1 ? '0' + hex : hex; }).join('');
    return '#' + rgbArr.map((value) => ('00' + value.toString(16)).slice(-2)).join('');
};
