import isString from '../is/string';

/**
 * 判断是否有效链接
 * @author 黄方明 <https://github.com/hank-open>
 * @category url
 * @alias yd_url_valid
 * @param {string} url 链接传参
 * @returns {boolean} 是否有效链接
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
