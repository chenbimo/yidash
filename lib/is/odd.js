import yd_is_number from './number.js';

/**
 * 判断是否是奇数
 * @alias yd_is_odd
 * @category is
 * @param {any} value 任意值
 * @returns {boolean} 返回是否是奇数
 * @author imddc https://github.com/imddc
 * @example yd_is_odd(123) // true
 */
export default (value) => {
    if (!yd_is_number(value)) {
        throw new Error('value must be a number');
    }

    return value % 2 === 1 || value % 2 === -1;
};
