/**
 * 是否为中文
 * 中文范围：\u4E00-\u9FFF 基本的CJK统一表意文字区块。
 * 中文范围：\u3400-\u4DBF CJK统一表意文字扩展A区块。
 * 中文范围：\u20000-\u2A6DF CJK统一表意文字扩展B区块。
 * 中文范围：\u2A700-\u2B73F CJK统一表意文字扩展C区块。
 * 中文范围：\u2B740-\u2B81F CJK统一表意文字扩展D区块。
 * 中文范围：\u2B820-\u2CEAF CJK统一表意文字扩展E区块。
 * 中文范围：\uF900-\uFAFF CJK兼容表意文字区块。
 * 中文范围：\u2F800-\u2FA1F CJK兼容表意文字补充区块。
 * @alias yd_is_chinese
 * @category is
 * @returns {boolean} 返回是否是中文字符串
 * @author go522000 <https://github.com/go522000>
 * @summary 判断是否为中文字符串
 * @example
 * // 默认匹配纯中文
 * yd_is_chinese('中文'); // true
 * @example
 * // 第二个参数设置为 false，则匹配包含中文的字符串
 * yd_is_chinese('abc中文123', false); // true
 * @param {string} str 字符串
 * @param {boolean} isPure 是否纯中文
 */
export default (str, isPure = true) => {
    const pureChineseRegex = /^[\u{4E00}-\u{9FFF}\u{3400}-\u{4DBF}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B73F}\u{2B740}-\u{2B81F}\u{2B820}-\u{2CEAF}\u{F900}-\u{FAFF}\u{2F800}-\u{2FA1F}]+$/u;
    const mixedChineseRegex = /[\u{4E00}-\u{9FFF}\u{3400}-\u{4DBF}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B73F}\u{2B740}-\u{2B81F}\u{2B820}-\u{2CEAF}\u{F900}-\u{FAFF}\u{2F800}-\u{2FA1F}]/u;

    return isPure ? pureChineseRegex.test(str) : mixedChineseRegex.test(str);
};
