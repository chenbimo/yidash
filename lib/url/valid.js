import isString from '../is/string.js';

/**
 * 判断是否有效链接
 * @alias yd_url_valid
 * @category url
 * @param {string} url 链接传参
 * @returns {boolean} 是否有效链接
 * @author 黄方明 <https://github.com/hank-open>
 * @example yd_url_valid("https://www.example.com") => true
 */
export default (url) => {
    if (!isString(url)) {
        throw new Error('url must be a string');
    }
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};
