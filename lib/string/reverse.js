/**
 * 字符串反转
 * @author Jimmy Gatsby
 * @category string
 * @alias yd_string_reverse
 * @param str 要转换的字符串
 * @returns {string} 返回结果
 * @time 2024年7月30日 13点55分
 * @summary 将提供的字符串按照反转输出
 */
export default (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
};
