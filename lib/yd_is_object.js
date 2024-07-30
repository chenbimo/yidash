/**
 * 判断是否是Object值
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是Object值
 */
export const yd_is_object = (variable) => {
    return variable !== null && typeof variable === 'object' && Object.prototype.toString.call(variable) === '[object Object]';
};
