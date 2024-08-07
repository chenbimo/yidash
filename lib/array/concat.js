/**
 * 合并数组
 * @author 陈随易 <https://chensuiyi.me>
 * @category array
 * @alias yd_array_concat
 * @param  {...any} args 多个数组
 * @returns {Array} 多个数组合并值
 */
export default (...args) => {
    // 创建一个新的数组来存储结果
    const result = [];

    // 循环遍历所有参数
    for (let i = 0; i < args.length; i++) {
        // 如果参数是数组，则将数组中的每个元素添加到结果数组中
        if (Array.isArray(args[i])) {
            for (let j = 0; j < args[i].length; j++) {
                result.push(args[i][j]);
            }
        } else {
            // 如果参数不是数组，则直接添加到结果数组中
            result.push(args[i]);
        }
    }

    // 返回结果数组
    return result;
};
