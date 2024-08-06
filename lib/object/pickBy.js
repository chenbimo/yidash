import isObject from '../is/object.js';
import isFunction from '../is/function.js';

/**
 * 对象属性摘取
 * @alias yd_object_pickBy
 * @category object
 * @param {object} obj 对象数据
 * @param {Function} fn 获取字段的方式
 * @returns {object} 摘取对象中的指定字段
 * @author imddc <https://github.com/imddc>
 * @example yd_object_pickBy()
 */
export default (obj, fn) => {
    if (!isObject(obj)) {
        throw new Error('obj must be an object');
    }

    if (!isFunction(fn)) {
        throw new Error('fn must be an function');
    }

    if (Object.keys(obj).length === 0) {
        return obj;
    }

    const picked = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (fn(obj[key])) {
                picked[key] = obj[key];
            }
        }
    }
    return picked;
};
