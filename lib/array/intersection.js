/**
 * @alias yd_array_intersection
 * @category array
 * @param {Array} array1 - 第一个数组。
 * @param {Array} array2 - 第二个数组。
 * @returns {Array} - 包含两个数组交集的数组。
 * @author penn <https://github.com/penn201500>
 * @example
 * console.log(arrayIntersection([1, 2, 3], [2, 3, 4]))
 * // 输出: [2, 3]
 * @description 计算两个数组的交集。
 */
export default function arrayIntersection(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError('Both arguments must be arrays');
    }

    const set2 = new Set(array2);
    const intersectionElements = array1.filter((element) => set2.has(element));
    return Array.from(new Set(intersectionElements)); // unique
}
