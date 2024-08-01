/**
 * 对数组进行分页
 * @author XiaoXinYo
 * @category 数组
 * @alias yd_array_paging
 * @param {Array} array 数组
 * @param {number} page_size 每页数量
 * @returns {Array} 返回已分好的数组
 */
export default (array, page_size) => {
    const result = []
    for (let i = 0; i < array.length; i += page_size) {
        result.push(array.slice(i, i + page_size));
    }
    return result;
};
