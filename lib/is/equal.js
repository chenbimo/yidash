/**
 * 深度比较两个值是否相等, 支持基本类型、对象、数组、日期对象, 不支持函数
 * @alias yd_is_equal
 * @category is
 * @param {*} a
 * @param {*} b
 * @returns {boolean} 返回比较结果
 * @author Amonduul <https://amonduul.vercel.app>
 * @example
 * yd_is_equal(1, 1); // true
 * yd_is_equal(1, '1'); // false
 * yd_is_equal(NaN, NaN); // true
 * yd_is_equal({ a: 1 }, { a: 2 }); // false
 */

export default function yd_is_equal(a, b) {
    if (a === b) {
        return true;
    }

    // 处理 NaN 的特殊情况
    if (a !== a && b !== b) {
        return true;
    }

    const typeA = typeof a;
    const typeB = typeof b;
    if (typeA !== typeB) {
        return false;
    }

    if (typeA === 'function') {
        throw new Error('yd_is_equal does not support function');
    }

    if (typeA === 'object' && a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }

    if (typeA === 'object') {
        if ((a && !b) || (b && !a) || a.length !== b.length) {
            return false;
        }
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        if (keysA.length !== keysB.length) {
            return false;
        }

        for (const key of keysA) {
            if (!keysB.includes(key) || !yd_is_equal(a[key], b[key])) {
                return false;
            }
        }

        return true;
    }

    return false;
}
