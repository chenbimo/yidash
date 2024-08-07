/**
 * 判断是否是整数
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_integer
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是整数
 */
export default (value) => {
    return Number.isInteger(value) && value.toString().indexOf('.') === -1;
};
