/**
 * 对数组进行分页
 * @author XiaoXinYo
 * @category array
 * @alias yd_array_paging
 * @param {Array} array 需要分页的数组
 *@param {number} page_size 每页数量
 * @returns {Array} 返回已分页的数组
 * @example yd_array_paging([1, 2, 3, 4, 5, 6], 3); // [[1, 2, 3], [4, 5, 6]]
 */

export default (array, page_size) => {
    const result = [];
    for (let i = 0; i < array.length; i += page_size) {
        result.push(array.slice(i, i + page_size));
    }
    return result;
};
