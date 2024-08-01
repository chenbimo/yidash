/**
 * @description 根据size 返回对应size的二维数组
 * @author grantguo <https://github.com/ForeverGuo>
 * @date 2024-08-01 18:14:32
 * @param { Array } array
 * @param { Number } size
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
*/

export const yd_array_chunk = (array, size) => {
  const intSize = Math.trunc(size)

  if (array.length === 0 || intSize < 1) return [];

  let index = 0
  let resultIndex = 0
  const result = new Array(Math.ceil(array.length / size))

  while(index < array.length) {
    result[resultIndex++] = array.slice(index, index += intSize)
  }
  return result;
}