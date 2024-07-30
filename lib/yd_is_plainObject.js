/**
 * 判断是否是空对象
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是空对象
 */
export const yd_is_plainObject = (value) => {
    if (typeof data !== 'object' || data === null) {
        return false;
    }

    const proto = Object.getPrototypeOf(data);
    return proto === null || proto === Object.prototype;
};
