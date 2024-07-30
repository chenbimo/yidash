// 是否有重复值
/**
 * 判断数组值否是唯一
 * @author 陈随易 <https://chensuiyi.me>
 * @category 判断
 * @param {Array} array 数组数据
 * @returns {Boolean} 返回数组值是否唯一
 */
export const yd_is_unique = (array) => {
    return new Set(array).size === array.length;
};
