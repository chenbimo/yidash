/**
 * @alias yd_string_isEnglishOrChineseChar
 * @category string
 * @param {string} char - 需要检查的字符。
 * @returns {string} - 返回 "English"、"Chinese" 或 "Other" 以指示字符的类型。
 * @author penn <https://github.com/penn201500>
 * @example
 * console.log(isEnglishOrChineseChar('A')) // 输出: "English"
 * @example
 * console.log(isEnglishOrChineseChar('中')) // 输出: "Chinese"
 * @example
 * console.log(isEnglishOrChineseChar('!')) // 输出: "Other"
 * @description 检查一个字符是英文字符还是中文字符。
 */
export default (char) => {
    if (!char || char.length !== 1) return null;

    // Get the Unicode code point of the character
    const code = char.charCodeAt(0);

    // English (A-Z, a-z)
    const isEnglish = (code >= 0x0041 && code <= 0x005a) || (code >= 0x0061 && code <= 0x007a);

    // Chinese (U+4E00 to U+9FFF)
    const isChinese = code >= 0x4e00 && code <= 0x9fff;

    if (isEnglish) {
        return 'English';
    } else if (isChinese) {
        return 'Chinese';
    } else {
        return 'Other';
    }
};
