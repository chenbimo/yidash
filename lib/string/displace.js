/**
 * @author 陈随易 <https://chensuiyi.me>
 * @category string
 * @alias yd_string_displace
 * @param {String} strs 字符串
 * @param {Number} start 前面留多少个字符
 * @param {Number} end 后面留多少个字符
 * @param {String} placeholder 占位符
 * @returns {String} 返回置换后的字符串
 */
export default (strs = '', start = 0, end = 0, placeholder = '*') => {
    const strArray = strs.split('');
    const startStrs = strArray.slice(0, start).join('');
    const endStrs = strArray.slice(end, 0).join('');
    return `${startStrs}${placeholder}${endStrs}`;
};
