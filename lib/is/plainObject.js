/**
 * 判断是否是空对象
 * @author 陈随易 <https://chensuiyi.me>
 * @category is
 * @alias yd_is_plainObject
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是空对象
 */
export default (value) => {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    const proto = Object.getPrototypeOf(data);
    return proto === null || proto === Object.prototype;
};
