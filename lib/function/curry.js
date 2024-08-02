/**
 * 函数柯里化
 * @author fengxie <1015806955@qq.com>
 * @category function
 * @alias yd_function_curry
 * @param func
 * @returns {any} 返回传入函数中的返回值
 * @summary 将普通函数转换为柯里化形式
 * @example
 * function sum(a, b, c) {
 *     return a + b + c
 * }
 *
 * let curriedSum = curry(sum)
 * console.log(curriedSum(1, 2, 3))  // 原函数任然可以被正常调用
 * console.log(curriedSum(1)(2, 3)) // 对第一个参数的柯里化
 * console.log(curriedSum(1)(2)(3))  // 对所有参数柯里化
 * 结果：
 *  6
 *  6
 *  6
 */
export default curry = (func) => {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(...args2));
            };
        }
    };
};
