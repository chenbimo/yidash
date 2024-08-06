import yd_is_object from './object.js';
/**
 * 判断是否是空对象
 * @alias yd_is_plainObject
 * @category is
 * @param {any} value 任意值
 * @returns {boolean} 返回是否是空对象
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_is_plainObject({}) // true
 */
export default (value) => {
    if (yd_is_object(value) === false) {
        return false;
    }

    const proto = Object.getPrototypeOf(value);
    const result = Object.keys(value).length === 0;
    return result;
};
