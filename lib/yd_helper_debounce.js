/**
 * 函数防抖执行
 * @author tank
 * @param {function} fn 需要防抖的函数
 * @param {Number} wait 防抖执行的毫秒数 （默认：600）
 * @returns {generator} 定时器函数
 */
export const yd_helper_debounce = (fn, wait) => {
    let timeout = null;
    wait = wait || 600;
    return function () {
        const that = this;
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(that);
        }, wait);
    }
}