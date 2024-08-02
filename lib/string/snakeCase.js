import capitalize from './capitalize.js';

/**
 * 字符串转蛇形风格
 * @author 陈随易 <https://chensuiyi.me>
 * @category string
 * @alias yd_string_snakeCase
 * @param {String} value 字符串数据
 * @param {String} delimiter 分隔符
 * @returns {String} 返回蛇型风格的字符串
 */

export default (str, splitOnNumber = true) => {
    const parts =
        str
            ?.replace(/([A-Z])+/g, capitalize)
            .split(/(?=[A-Z])|[.\-\s_]/)
            .map((x) => x.toLowerCase()) ?? [];
    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0];
    const result = parts.reduce((acc, part) => {
        return `${acc}_${part.toLowerCase()}`;
    });
    return splitOnNumber === false ? result : result.replace(/([A-Za-z]{1}[0-9]{1})/, (val) => `${val[0]}_${val[1]}`);
};
