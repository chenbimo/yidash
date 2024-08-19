/**
 * 数组数据分组
 * @alias yd_array_group
 * @category array
 * @param {Array} array 数组
 * @param {string} key 分组的字段或函数
 * @returns {object} 返回按某字段或函数分组后的对象
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_array_group()
 */
export default (array, key) => {
    const result = new Map();
    for (const item of array) {
        const groupKey = item[key];

        if (!result.has(groupKey)) {
            result.set(groupKey, []);
        }
        result.get(groupKey).push(item);
    }
    return result;
};
