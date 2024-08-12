/**
 * @alias yd_url_getScriptTagSrc
 * @category url
 * @param {string} input - html/xml 文件内容
 * @returns {string[]} html/xml 文件内容中的script标签的src
 * @author lgldlk
 * @description 获取html/xml 文件中的script标签的src
 */

export default (input) => {
    if (typeof input !== 'string') {
        return [];
    }
    return input.match(/(?<=<script.*?src=(["|']))(?=[./]).+?(?=\1)/g) || [];
};
