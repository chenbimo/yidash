/**
 * 数组求和
 * @alias yd_array_sumBy
 * @category array
 * @param {Array} arr 数组数据
 * @param {Function} iteratee 迭代函数
 * @returns {number} 返回求和值
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_array_sumBy([{a:1,b:2},{a:2,b:3}],(item => item.a))
 */
export default (arr, iteratee) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += iteratee(arr[i]);
    }
    return sum;
};
