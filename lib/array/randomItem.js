/**
 * 随机取数组中的元素
 * @author XiaoXinYo
 * @category 数组
 * @param {Array} array 数组
 * @param {number} number 数量
 * @param {Boolean} repeat 是否允许重复
 * @returns {Array} 返回取出元素的数组
 */

export default (array, number = 1, repeat = false) => {
    const temp_array = [...new Set(array)];
    if (!repeat && number > temp_array.length) {
        throw new Error('所需数量超出数组的不重复元素数量');
    }

    const result = [];
    for (let i = 0; i < number; i++) {
        let itemIndex = Math.floor(Math.random() * temp_array.length);
        result.push(temp_array[itemIndex]);
        if (!repeat) {
            temp_array.splice(itemIndex, 1);
        }
    }
    return result;
};
