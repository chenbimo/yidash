/**
 * 数组随机排序(俗称洗牌)
 * @author 生命过客 <739694218@qq.com>
 * @category 数组
 * @alias yd_array_shuffle
 * @param {Array} array 数组
 * @returns {Array} 返回随机排序后的数组
 */
export default (array = []) => {
    return array.sort(() => Math.random() - 0.5);
};
