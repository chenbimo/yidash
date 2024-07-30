/**
 * 数组数据分组
 * @author 陈随易 <https://chensuiyi.me>
 * @category 数组
 * @param {Array} array 数组
 * @param {String | Function} key 分组的字段或函数
 * @returns {Object} 返回按某字段或函数分组后的对象
 */
export const yd_array_groupBy = (array, key) => {
    const result = new Map();
    for (const item of array) {
        let groupKey;

        if (typeof key === 'string') {
            groupKey = item[key];
        } else if (typeof key === 'function') {
            groupKey = key(item);
        }

        if (!result.has(groupKey)) {
            result.set(groupKey, []);
        }
        result.get(groupKey).push(item);
    }
    return result;
};
