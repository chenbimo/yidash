/**
 * 十六进制颜色转rgb
 * @alias yd_string_hexToRgb
 * @category color
 * @param {string} hex 要转换的hex颜色值
 * @returns {string} rgb颜色
 * @author wzskyline
 * @example  yd_string_hexTorgb('#FF0000') -> rgb(255, 0, 0)
 */
export default (hex) => {
    let alpha = false;
    let h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map((x) => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return 'rgb' + (alpha ? 'a' : '') + '(' + (h >>> (alpha ? 24 : 16)) + ', ' + ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) + ', ' + ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) + (alpha ? `, ${h & 0x000000ff}` : '') + ')';
};
