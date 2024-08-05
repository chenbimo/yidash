import isObject from '../is/object';
import isFunction from '../is/function';

/**
 * batch modify the key of the object.
 * @alias yd_object_mapKeys
 * @category object
 * @param {object} obj origin object
 * @param {(value: any, key: string, obj: object) => string} fn how to modify the key
 * @returns {object} new object
 * @author imddc <https://github.com/imddc>
 * @example
      mapKeys({ a: 1, b: '2', c: 3 }, (_, key) => key + 1) // { a1: 1, b1: '2', c1: 3 }
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

    const result = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            result[fn(value, key, obj)] = value;
        }
    }
    return result;
};
