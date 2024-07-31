/**
 * 统计数组中各项出现的次数
 * @author 橙某人 <https://github.com/ydydydq>
 * @category 数组
 * @param {Array} array 任意一维数组
 * @returns {Object} 返回以每项为key，次数为value的对象
 *
 * @example
 * console.log(yd_array_countOccurrences([1, 1, 2, 3, 3, 4, 4, 4])); // {1: 2, 2: 1, 3: 2, 4: 3}
 *
 * @example
 * console.log(yd_array_countOccurrences(['a', 'a', 'bb', 'abc', 'fff', 'fff', '橙', '橙'])); // {a: 2, bb: 1, abc: 1, fff: 2, 橙: 2}
 */
export default (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
