/**
 * 获取字符串的utf8字节长度
 * @author 王勇 <https://github.com/wangyong1997>
 * @category string
 * @alias yd_string_byteLength
 * @param {String} str 字符串数据
 * @returns {String} 返回utf8字符串的字节长度
 */
export default (str) => {
    let s = str.length
    for (var i = str.length - 1; i >= 0; i--) {
        const code = str.charCodeAt(i)
        if (code > 0x7f && code <= 0x7ff) s++
        else if (code > 0x7ff && code <= 0xffff) s += 2
        if (code >= 0xDC00 && code <= 0xDFFF) i--
    }
    return s
}