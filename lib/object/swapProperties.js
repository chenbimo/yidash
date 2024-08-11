/**
 * @alias yd_object_swapElements
 * @category object
 * @param {object} obj1 - 第一个对象。
 * @param {object} obj2 - 第二个对象。
 * @param {string} prop - 要交换的属性名称。
 * @returns {void} - 该函数直接修改输入的对象，不返回任何值。
 * @author penn <https://github.com/penn201500>
 * @summary 该函数接受两个对象和一个属性名称，并交换两个对象中该属性的值。 函数会检查输入参数的合法性。
 * @example
 * const objA = { name: 'A', age: 25 };
 * const objB = { name: 'B', age: 30 };
 * yd_object_swapProperties(objA, objB, 'name');
 * console.log(objA); // 输出: { name: 'B', age: 25 }
 * console.log(objB); // 输出: { name: 'A', age: 30 }
 *
 * @description 交换两个对象中指定属性的值。
 */
export default (obj1, obj2, prop) => {
    // 检查 obj1 和 obj2 是否为对象
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
        throw new TypeError('输入的参数必须是对象');
    }

    // 检查 prop 是否为字符串
    if (typeof prop !== 'string') {
        throw new TypeError('属性名称必须是字符串');
    }

    // 检查两个对象中是否存在该属性
    if (!(prop in obj1) || !(prop in obj2)) {
        throw new Error(`属性 "${prop}" 在其中一个对象中不存在`);
    }

    // 执行属性值交换
    [obj1[prop], obj2[prop]] = [obj2[prop], obj1[prop]];
};
