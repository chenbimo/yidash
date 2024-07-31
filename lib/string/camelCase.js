import { yd_string_capitalize } from './capitalize.js';

const camel = (str) => {
    const parts =
        str
            ?.replace(/([A-Z])+/g, yd_string_capitalize)
            ?.split(/(?=[A-Z])|[\.\-\s_]/)
            .map((x) => x.toLowerCase()) ?? [];
    if (parts.length === 0) return '';
    if (parts.length === 1) return parts[0];
    return parts.reduce((acc, part) => {
        return `${acc}${part.charAt(0).toUpperCase()}${part.slice(1)}`;
    });
};

/**
 * 字符串转小驼峰风格
 * @author 陈随易 <https://chensuiyi.me>
 * @category 字符串
 * @param {String} value 字符串数据
 * @param {String} delimiter 分隔符
 * @returns {String} 返回小驼峰风格的字符串
 */
export default (value, delimiter = '/') => {
    if (value === undefined || value === null || value === '') return value;
    const data = value
        .split(delimiter)
        .map((v) => camel(v))
        .join(delimiter);
    return data;
};
