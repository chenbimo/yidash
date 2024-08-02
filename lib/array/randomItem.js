/**
 * 随机取数组中的元素
 * @author XiaoXinYo
 * @category array
 * @alias yd_array_randomItem
 * @param {Array} array 将要抽取的数组
 * @param {number} [itemNumber=1] 抽取元素数量(默认为1)
 * @param {boolean} [repeat=false] 是否允许元素重复(默认为false)
 * @throws {Error} 所需不重复元素数量超过了数组中不重复元素的数量
 * @returns {Array} 返回抽取的元素的数组
 * @example yd_array_randomItem([1, 2, 3, 4, 5, 6], 3); //[2, 1, 3]
 */

export default (array, itemNumber = 1, repeat = false) => {
    const temp_array = [...new Set(array)];
    if (!repeat && itemNumber > temp_array.length) {
        throw new Error('所需不重复元素数量超过了数组中不重复元素的数量');
    }

    const result = [];
    for (let i = 0; i < itemNumber; i++) {
        let itemIndex = Math.floor(Math.random() * temp_array.length);
        result.push(temp_array[itemIndex]);
        if (!repeat) {
            temp_array.splice(itemIndex, 1);
        }
    }
    return result;
};
