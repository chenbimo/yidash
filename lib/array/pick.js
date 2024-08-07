/**
 * 从数组中选择指定标签的项
 * @alias yd_array_pick
 * @category 数组操作
 * @param {Array} arrObj 数组对象
 * @param {string} field 匹配的字段
 * @param {Array} values 匹配的值
 * @returns {object[]} 返回一个新数组，其中只包含具有指定标签的项
 * @author 卞雪瑞 <bianxr0803@gmail.com>
 * @author 陈随易 <https://chensuiyi.me>
 * @summary 这个函数根据给定的标签列表，从数组中选择所有匹配这些标签的项，并返回这些项。
 * @example
 * yd_array_pick(
 *   [{ label: 'a', value: 1 }, { label: 'b', value: 2 }, { label: 'c', value: 3 }],
 *   'label',
 *   ['a', 'c']
 * );
 * 结果：
 * [
 *   { label: 'a', value: 1 },
 *   { label: 'c', value: 3 }
 * ]
 */
export default (arrObj, field, values = []) => {
    return arrObj.filter((item) => values.includes(item[field]));
};
