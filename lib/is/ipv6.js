/**
 * @alias yd_is_ipv6
 * @category is
 * @param {string} ip 需要判断的IP
 * @returns {boolean}  返回是否是一个合法的IPV4地址
 * @author lgldlk
 * @example yd_is_ipv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334") // true
 * @description 判断一个字符串是否是一个合法的IPV6地址
 */
export default (ip) => {
    return /^(?:[0-9A-F]{0,4}:){2,7}(?:(?:(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})(?:\.|$)){4}|[0-9A-F]{1,4})$/i.test(ip);
};
