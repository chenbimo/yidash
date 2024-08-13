/**
 * 数组过滤方法增强版
 * @author vilan <https://github.com/java6688>
 * @category array
 * @alias yd_array_filterPlus
 * @param {Array} array 数组
 * @param {Function} fn 迭代元素过滤条件方法
 * @returns {Array} 返回一个数组，包含满足条件和不满足条件的元素数组
 * @example yd_is_filterPlus([1,2,3], (item) => item % 2 === 0); [[2], [1,3]]
 */
export default (array, fn) => {
  // 满足过滤条件的元素数组
  const targetArray = [];
  // 不满足条件的元素数组
  const loseArray = [];
  for (let i = 0; i < array.length; i++) {
      const item = array[i];
      fn(item) ? targetArray.push(item) : loseArray.push(item);
  }
  // 返回包含满足和不满足条件元素的数组
  return [targetArray, loseArray];
}