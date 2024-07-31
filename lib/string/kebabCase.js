import capitalize from './capitalize.js';

const kebab = (str) => {
    const parts =
        str
            ?.replace(/([A-Z])+/g, capitalize)
            ?.split(/(?=[A-Z])|[\.\-\s_]/)
            .map((x) => x.toLowerCase()) ?? [];
    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0];
    return parts.reduce((acc, part) => {
        return `${acc}-${part.toLowerCase()}`;
    });
};

/**
 * 字符串转中划线风格
 * @author 陈随易 <https://chensuiyi.me>
 * @category 字符串
 * @param {String} value 字符串数据
 * @param {String} delimiter 分隔符
 * @returns {String} 返回中划线风格的字符串
 */
export default (value, delimiter = '/') => {
    if (value === undefined || value === null || value === '') return value;
    const data = value
        .split(delimiter)
        .map((v) => kebab(v))
        .join(delimiter);
    return data;
};
