/**
 * 数组求和
 * @author 陈随易 <https://chensuiyi.me>
 * @category 数组
 * @param {Array} array 数组数据
 * @param {Function} iteratee 迭代函数
 * @returns {Number} 返回求和值
 */
export default (array, iteratee) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += iteratee(array[i]);
    }
    return sum;
};
