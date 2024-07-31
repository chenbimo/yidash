/**
 * 取出两个字符串之间的文本
 * @param {String} fullStr 原始字符串
 * @param {String} prefix 前字符串
 * @param {String} suffix 后字符串
 * @returns {String} 取出的中间字符串
 */
export function yd_string_getMiddle(fullStr, prefix, suffix) {
    const start = prefix.length;
    const end = fullStr.length - suffix.length;
    // 返回中间文本
    return fullStr.slice(start, end);
}

/**
 * Example
 * yd_string_getMiddle("hello","h","o") -> ell
 */