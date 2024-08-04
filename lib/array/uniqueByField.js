/**
 * 对象数组根据某个字段去重
 * @author 生命过客 <739694218@qq.com>
 * @category array
 * @alias yd_array_uniqueByField
 * @param {Array} arr 对象数组
 * @returns {string} field 要去重的字段
 * @summary 根据 field 对数组 arr 进行去重
 * @example
 * yd_array_uniqueByField([{age:20,name:'Andy'}, {age: 21,name:'Jack'}, {age:20,name:'Jenson'}], 'age');
 * 结果：[{age:20,name:'Andy'}, {age: 21,name:'Jack'}]
 */
export default (arr, field) => {
    const map = new Map(); // 利用 Map 特性, 可以做到高性能
    return arr.filter((item) => !map.has(item[field]) && map.set(item[field], 1));
};
