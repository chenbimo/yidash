/**
 * 是否为中文
 * @author go522000 <https://github.com/go522000>
 * @category 判断
 * @param {string} str 字符串
 * @param {Boolean} isPure 是否纯中文（整个字符串都为中文）
 * @returns {Boolean} 返回是否是中文字符串
 */
export default (str, isPure = true) => {
    if (isPure) {
        return /^[\u4E00-\u9FFF]+$/.test(str);
    } else {
        return /[\u4E00-\u9FFF]/.test(str);
    }
};
