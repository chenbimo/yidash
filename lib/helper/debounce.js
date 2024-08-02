/**
 * 函数防抖
 * @author tank | dayDreamer-byte
 * @category helper
 * @alias yd_helper_debounce
 * @param { function } fn 高频事件
 * @param { Number } delay 防抖延迟时间 默认1000
 * @param { Boolean } firstExecute 首次是否执行函数
 * @returns { function } 执行函数
 * @description 函数防抖:事件触发后设定一个等待延迟时间，如果在延迟时间内事件被再次触发，则重新计算延迟时间。在延迟时间内没有触发，则会在延迟时间到达后完成函数调用。
 */
export default (fn, delay = 1000, firstExecute = false) => {
    let timer = null; // 延迟执行器
    let isFuture = false; // 首次执行是否完成
    return function (...args) {
        if (firstExecute && !isFuture) {
            fn.apply(this, args);
            isFuture = true; // 首次执行完毕
        }
        timer && clearTimeout(timer);
        const _this = this;
        timer = setTimeout(() => {
            fn.apply(_this, args);
        }, delay);
    };
};
