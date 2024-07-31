import isNumber from './number';

/**
 * 判断是否是奇数
 * @author imddc https://github.com/imddc
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是奇数
 */
export default (value) => {
    if (!isNumber(value)) {
        throw new Error('value must be a number');
    }

    return value % 2 === 1 || value % 2 === -1;
};
