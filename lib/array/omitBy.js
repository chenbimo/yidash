/**
 * 从数组中排除指定标签的项
 * @alias yd_array_omitBy
 * @category 数组操作
 * @param {object[]} arry - 需要处理的数组，其中每个对象包含 `label` 和 `value` 属性
 * @param {string[]} keys - 需要排除的标签列表
 * @returns {object[]} 返回一个新数组，其中不包含具有指定标签的项
 * @author 卞雪瑞 <bianxr0803@gmail.com>
 * @summary 这个函数根据给定的标签列表，排除数组中所有匹配这些标签的项，并返回剩余的项。
 * @example
 * yd_array_omitBy(
 *   [{ label: 'a', value: 1 }, { label: 'b', value: 2 }, { label: 'c', value: 3 }],
 *   ['a', 'c']
 * );
 * 结果：
 * [
 *   { label: 'b', value: 2 }
 * ]
 */
export default (arry, keys) => {
    return arry.filter((item) => !keys.includes(item.label));
};
