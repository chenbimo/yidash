function isPlainObject(payload) {
    if (Object.prototype.toString.call(payload).slice(8, -1) !== 'Object') return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function isSymbol(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1) === 'Symbol';
}
function assignProp(carry, key, newVal, originalObject) {
    const propType = {}.propertyIsEnumerable.call(originalObject, key) ? 'enumerable' : 'nonenumerable';
    if (propType === 'enumerable') carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, compareFn) {
    // always return newComer if its not an object
    if (!isPlainObject(newComer)) return newComer;
    // define newObject to merge all values upon
    let newObject = {};
    if (isPlainObject(origin)) {
        const props = Object.getOwnPropertyNames(origin);
        const symbols = Object.getOwnPropertySymbols(origin);
        newObject = [...props, ...symbols].reduce((carry, key) => {
            const targetVal = origin[key];
            if ((!isSymbol(key) && !Object.getOwnPropertyNames(newComer).includes(key)) || (isSymbol(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    // newObject has all properties that newComer hasn't
    const props = Object.getOwnPropertyNames(newComer);
    const symbols = Object.getOwnPropertySymbols(newComer);
    const result = [...props, ...symbols].reduce((carry, key) => {
        // re-define the origin and newComer as targetVal and newVal
        let newVal = newComer[key];
        const targetVal = isPlainObject(origin) ? origin[key] : undefined;
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && isPlainObject(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, compareFn);
        }
        const propToAssign = compareFn ? compareFn(targetVal, newVal, key) : newVal;
        assignProp(carry, key, propToAssign, newComer);
        return carry;
    }, newObject);
    return result;
}

/**
 * 合并对象
 * @alias yd_object_merge
 * @category object
 * @param {object} target 目标对象
 * @param {...any} otherObjects 其他对象
 * @returns {object} 返回合并后的对象
 * @author https://github.com/mesqueeb/merge-anything
 * @example yd_object_merge({a:1,b:[2,3],c:{d:4}},{a:2,b:[4,5],c:{e:6}}) // {a:2,b:[4,5],c:{d:4,e:6}}
 */
export default (target, ...otherObjects) => {
    return otherObjects.reduce((result, newComer) => {
        return mergeRecursively(result, newComer);
    }, target);
};
