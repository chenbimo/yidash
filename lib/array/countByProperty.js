/**
 * @alias yd_array_countByProperty
 * @category array
 * @param {Array} items - 对象数组。
 * @param {string} property - 要统计的属性名。
 * @returns {object} - 一个包含每个属性值出现次数的对象。如果输入无效，则返回空对象。
 * @author penn <https://github.com/penn201500>
 * @example
 * const characters = [
 *    { name: 'Luke Skywalker', eye_color: 'blue' },
 *    { name: 'Darth Vader', eye_color: 'yellow' },
 *    { name: 'Anakin Skywalker' } // 没有 eye_color 属性
 * ];
 * console.log(countByProperty(characters, 'eye_color'));
 * // 输出: { blue: 1, yellow: 1 }
 * @description 统计数组中对象指定属性的出现次数。
 */
export default (items, property) => {
    // 检查 items 类型是否为数组
    if (!Array.isArray(items)) {
        console.error('countByProperty: items 必须是一个数组');
        return {};
    }

    // 检查 property 是否为有效的字符串
    if (typeof property !== 'string' || property.trim() === '') {
        console.error('countByProperty: property 必须是一个非空字符串');
        return {};
    }

    return items.reduce((acc, item) => {
        // 检查对象是否有指定的属性，并且属性值不是 undefined
        if (item.hasOwnProperty(property) && item[property] !== undefined && item[property] !== null) {
            acc[item[property]] = (acc[item[property]] || 0) + 1;
        }
        return acc;
    }, {});
};
