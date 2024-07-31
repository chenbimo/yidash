/**
 * 判断是否是字符串
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是字符串
 */
export default (value) => {
    return Object.prototype.toString.call(value) === '[object String]';
};
