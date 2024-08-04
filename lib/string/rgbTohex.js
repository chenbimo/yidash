/**
 * 颜色转换
 * @author wzskyline
 * @category string
 * @alias yd_string_rgbTohex
 * @param {Array} rgb 要转换的rgv颜色值数组 
 * @returns {String} hex颜色
 * @example  yd_string_rgbTohex([255, 0, 0]) -> #FF0000 
 */
export default (rgbarr) => {
   //return '#' + rgbarr.map(value => { const hex = value.toString(16); return hex.length === 1 ? '0' + hex : hex; }).join('');
   return '#' + rgbarr.map(value => ('00' + value.toString(16)).slice(-2) ).join('');
};
