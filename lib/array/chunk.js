/**
 * @description 根据size 返回对应size的二维数组， 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @author grantguo <https://github.com/ForeverGuo>
 * @date 2024-08-01 18:14:32
 * @param { Array } array
 * @param { Number } size
 * @param { Boolean } origin 剩余元素是否支持组成一个区块，默认支持
 * @return 返回二维数组
 * @alias yd_array_chunk
 *
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 *
 * chunk(['a', 'b', 'c', 'd', 'e'], 3, false);
 * // => [['a', 'b', 'c']]
 *
 */

export default (array, size, origin = true) => {
    const intSize = Math.trunc(size);

    if (array.length === 0 || intSize < 1) return [];

    let index = 0;
    let resultIndex = 0;
    // const result = new Array(Math.ceil(array.length / size));
    const result = new Array();

    while (index < array.length) {
        if (!origin && array.slice(index).length < intSize) {
            break;
        }
        result[resultIndex++] = array.slice(index, (index += intSize));
    }
    return result;
};
