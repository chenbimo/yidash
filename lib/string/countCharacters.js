/**
 * 计算字符串中每个字符的出现次数。
 * @author penn <https://github.com/penn201500>
 * @category string
 * @alias yd_string_countCharacters
 * @param {String} str - 字符串。
 * @returns {Object} - 包含每个字符的出现次数的对象。
 *
 * @example
 * console.log(countCharacters("hello world"))
 * // 输出: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
 */
export default function countCharacters(str) {
    const count = {};
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
