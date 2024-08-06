/**
 * 判断是否是Object值
 * @alias yd_is_object
 * @category is
 * @param {any} value 任意值
 * @returns {boolean} 返回是否是Object值
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_is_object({}) // true
 */
export default (value) => {
    return value !== null && typeof value === 'object' && Object.prototype.toString.call(value) === '[object Object]';
};
