/**
 * 从各种数据结构中随机选择一个元素
 * @author penn <https://github.com/penn201500>
 * @category data
 * @alias yd_data_randomSelect
 * @param {Array|Set|String|Map|Object} collection - 数据结构
 * @returns {any} 随机选择的元素
 * @throws {TypeError} 如果输入的数据结构类型不被支持或输入为空
 * @summary 支持 Array, Set, String, Map, Object
 * 如果提供了不支持的类型或传入的集合为空，函数会抛出错误
 *
 * @example
 * // 示例: 从数组中随机选择
 * console.log(randomSelect([1, 2, 3, 4, 5])); // 输出: 数组中的一个随机元素
 *
 * @example
 * // 示例: 从字符串中随机选择
 * console.log(randomSelect('hello')); // 输出: 字符串中的一个随机字符
 *
 * @example
 * // 示例: 从集合中随机选择
 * console.log(randomSelect(new Set(['apple', 'banana', 'cherry']))); // 输出: 集合中的一个随机元素
 *
 * @example
 * // 示例: 从 Map 中随机选择
 * console.log(randomSelect(new Map([['a', 1], ['b', 2]]))); // 输出: 一个随机值
 *
 * @example
 * // 示例: 从对象属性中随机选择
 * console.log(randomSelect({x: 10, y: 20, z: 30})); // 输出: 一个随机属性的值
 */
export default (collection) => {
    if (!collection) {
        throw new TypeError('输入的数据结构不能为空或未定义。');
    }

    if (collection instanceof Map || collection instanceof Set) {
        collection = Array.from(collection.values());
    } else if (collection instanceof Array || typeof collection === 'string') {
    } else if (typeof collection === 'object' && !(collection instanceof String)) {
        const keys = Object.keys(collection);
        collection = keys.map((key) => collection[key]);
    } else {
        throw new TypeError('不支持的类型。期望数组、集合、字符串、映射或普通对象。');
    }

    if (collection.length === 0) {
        throw new Error('集合不能为空。');
    }

    const index = Math.floor(Math.random() * collection.length);
    return collection[index];
};
