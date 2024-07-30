/**
 * 取第一个数组的差集
 * @author 陈随易 <https://chensuiyi.me>
 * @category 数组
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @returns {Array} 返回第一个数组中跟第二个数组不同的值
 */
export const yd_array_diffFirst = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const uniqueElements = new Set([...set1].filter((x) => !set2.has(x)));

    return Array.from(uniqueElements);
};
