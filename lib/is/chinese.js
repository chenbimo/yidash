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
 * @author go522000 <https://github.com/go522000>
 * @category is
 * @alias yd_is_chinese
 * @summary 判断是否为中文字符串
 * @param {string} str 字符串
 * @param {boolean} isPure 是否纯中文
 * @returns {boolean} 返回是否是中文字符串
 *
 * @example
 * // 默认匹配纯中文
 * yd_is_chinese('中文'); // true
 *
 * @example
 * // 第二个参数设置为 false，则匹配包含中文的字符串
 * yd_is_chinese('abc中文123', false); // true
 */
export default (str, isPure = true) => {
    const pureChineseRegex = /^[\u4E00-\u9FFF\u3400-\u4DBF\u20000-\u2A6DF\u2A700-\u2B73F\u2B740-\u2B81F\u2B820-\u2CEAF\uF900-\uFAFF\u2F800-\u2FA1F]+$/;
    const mixedChineseRegex = /[\u4E00-\u9FFF\u3400-\u4DBF\u20000-\u2A6DF\u2A700-\u2B73F\u2B740-\u2B81F\u2B820-\u2CEAF\uF900-\uFAFF\u2F800-\u2FA1F]/;

    return isPure ? pureChineseRegex.test(str) : mixedChineseRegex.test(str);
};
