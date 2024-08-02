/**
 * 判断是否是Object值
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_object
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是Object值
 */
export default (variable) => {
    return variable !== null && typeof variable === 'object' && Object.prototype.toString.call(variable) === '[object Object]';
};
