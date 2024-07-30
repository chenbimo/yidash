/**
 * 字符串反转，将提供的字符串按照反转输出
 * @param str 要转换的字符串
 * @returns {string} 返回结果
 * @author Jimmy Gatsby
 * @time 2024年7月30日 13点55分
 */
export function yd_string_reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
