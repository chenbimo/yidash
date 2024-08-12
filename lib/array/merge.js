/**
 * 合并多个数组并返回它们的并集
 * @author Amonduul <https://amonduul.vercel.app>
 * @category array
 * @alias yd_array_merge
 * @param  { Array } ...arrays - 可变数量的数组参数
 * @returns { Array } 所有数组的并集
 * @throws { Error } 如果任何一个参数不是数组
 */
export default (...arrays) => {
    // 检查每个参数是否都是数组
    if (!arrays.every(Array.isArray)) {
        throw new Error('All arguments must be arrays.');
    }
    const unionSet = new Set();
    arrays.forEach((array) => {
        array.forEach((item) => {
            unionSet.add(item);
        });
    });
    return Array.from(unionSet);
};
