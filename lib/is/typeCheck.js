/**
 * @description 类型检查工具库
 * @alias yd_is_yd_is_typeCheck
 * @summary 包含多种类型检测的工具函数，如检测是否为数组、对象、函数、日期等，用以检查输入数据类型是否符合预期。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为要检查的类型则返回 true，否则返回 false。
 * @author penn <https://github.com/penn201500>
 *
 * @example
 * // 示例: 使用 getType 获取类型
 * console.log(yd_is_typeCheck.getType([1, 2, 3])); // 输出: "[object Array]"
 *
 * @example
 * // 示例: 检查是否为数组
 * console.log(yd_is_typeCheck.isArray([1, 2, 3])); // 输出: true
 *
 * @example
 * // 示例: 检查是否为对象
 * console.log(yd_is_typeCheck.isObject({})); // 输出: true
 *
 * @example
 * // 示例: 检查是否为函数
 * console.log(yd_is_typeCheck.isFunction(() => {})); // 输出: true
 *
 * @example
 * // 示例: 检查是否为日期
 * console.log(yd_is_typeCheck.isDate(new Date())); // 输出: true
 *
 * @example
 * // 示例: 检查是否为 null
 * console.log(yd_is_typeCheck.isNull(null)); // 输出: true
 *
 * @example
 * // 示例: 检查是否为 undefined
 * console.log(yd_is_typeCheck.isUndefined(undefined)); // 输出: true
 *
 * @example
 * // 示例: 检查是否为普通对象
 * console.log(yd_is_typeCheck.isPlainObject({})); // 输出: true
 *
 * @example
 * // 示例: 检查是否为 Promise
 * console.log(yd_is_typeCheck.isPromise(Promise.resolve())); // 输出: true
 */

/**
 * 获取输入值的类型。
 * @param {any} o - 要检查的值。
 * @returns {string} 输入值的类型字符串。
 */
function getType(o) {
    return Object.prototype.toString.call(o);
}

/**
 * 检查输入值是否为数组。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为数组则返回 true，否则返回 false。
 */
function isArray(o) {
    return getType(o) === '[object Array]';
}

/**
 * 检查输入值是否为普通对象。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为普通对象则返回 true，否则返回 false。
 */
function isObject(o) {
    return getType(o) === '[object Object]';
}

/**
 * 检查输入值是否为函数。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为函数则返回 true，否则返回 false。
 */
function isFunction(o) {
    return getType(o) === '[object Function]';
}

/**
 * 检查输入值是否为日期。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为日期则返回 true，否则返回 false。
 */
function isDate(o) {
    return getType(o) === '[object Date]';
}

/**
 * 检查输入值是否为 null。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为 null 则返回 true，否则返回 false。
 */
function isNull(o) {
    return getType(o) === '[object Null]';
}

/**
 * 检查输入值是否为 undefined。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为 undefined 则返回 true，否则返回 false。
 */
function isUndefined(o) {
    return getType(o) === '[object Undefined]';
}

/**
 * 检查输入值是否为纯对象（Object 构造函数创建的对象)。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为普通对象则返回 true，否则返回 false。
 */
function isPlainObject(o) {
    return isObject(o) && o.constructor === Object;
}

/**
 * 检查输入值是否为 Promise。
 * @param {any} o - 要检查的值。
 * @returns {boolean} 如果值为 Promise 则返回 true，否则返回 false。
 */
function isPromise(o) {
    return o instanceof Promise;
}

// 导出所有函数作为一个默认导出对象
export default {
    getType,
    isArray,
    isObject,
    isFunction,
    isDate,
    isNull,
    isUndefined,
    isPlainObject,
    isPromise
};
