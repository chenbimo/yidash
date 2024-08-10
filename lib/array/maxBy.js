/**
 * 根据属性键或访问器函数找到数组中的最大元素
 * @author Amonduul <https://amonduul.vercel.app>
 * @alias yd_array_maxBy
 * @category array
 * @param {Array} array - 要搜索的数组
 * @param {Function|string} iteratee - 用于提取比较值的函数或属性键
 * @returns {*} 返回数组中具有最大值的元素
 * @throws {Error} 如果提供的数组为空或 iteratee 不是函数或字符串
 */
export default (array, iteratee) => {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error('First argument must be a non-empty array.');
    }

    if (typeof iteratee !== 'function' && typeof iteratee !== 'string') {
        throw new Error('Second argument must be a function or a string.');
    }

    let maxElement = array[0];
    let maxValue = typeof iteratee === 'function' ? iteratee(maxElement) : maxElement[iteratee];

    for (const element of array) {
        const value = typeof iteratee === 'function' ? iteratee(element) : element[iteratee];
        if (value > maxValue) {
            maxElement = element;
            maxValue = value;
        }
    }

    return maxElement;
};
