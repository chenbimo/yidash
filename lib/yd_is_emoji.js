/**
 * 判断是否是Emoji  
 * 本函数没有使用 Emoji_Component 进行判断
 * 详见 [Unicode® Technical Standard #51 - Section 1.4.1 ED-5](https://www.unicode.org/reports/tr51/#def_level2_emoji)
 * @author Marshall <https://github.com/Xy2002>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是Emoji
 */
export const yd_is_emoji = (value) => {
    const emojiRegex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base}|\uD83C[\uDFFB-\uDFFF]|\uD83E[\uDDA0-\uDDFF])/u;
    return emojiRegex.test(value);
};
