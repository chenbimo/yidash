/**
 * 判断是否是整数
 * @alias yd_is_integer
 * @category is
 * @param {any} value 任意值
 * @returns {boolean} 返回是否是整数
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_is_integer(1) // true
 */
export default (value) => {
    return Number.isInteger(value) && value.toString().indexOf('.') === -1;
};
