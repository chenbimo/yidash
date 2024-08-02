/**
 * 判断是否是字符串
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_string
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是字符串
 */
export default (value) => {
    return Object.prototype.toString.call(value) === '[object String]';
};
