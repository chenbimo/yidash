/**
 * @alias yd_url_urlEncode
 * @category url
 * @returns {string} 处理后的字符串。
 * @author penn <https://github.com/penn201500>
 * @description 对字符串进行 URL 编码。
 * @param {string} input - 要处理的字符串。
 * @throws {Error} 如果输入不是字符串则报错。
 */

export default (input) => {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('输入必须是字符串。');
        }

        return encodeURIComponent(input);
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
