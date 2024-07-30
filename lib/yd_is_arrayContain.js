/**
 * 判断数组是否有一个相同值
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {Array} arr1 数组1
 * @param {Array} arr2 数组2
 * @returns {Array} 返回两个数组是否至少有一个相同值
 */
export const yd_is_arrayContain = (arr1, arr2) => {
    return arr1.some((element) => arr2.includes(element));
};
