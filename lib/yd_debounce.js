/**
 * 函数防抖执行
 * @author tank
 * @param {function} fn 执行函数
 * @param {Number} wait 防抖执行的毫秒数 （默认：600）
 * @returns {generator} 定时器函数
 */
export const yd_debounce = (fn, wait) => {
    let timeout = null;
    wait = wait || 600;
    return function () {
        let that = this;
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(that);
        }, wait);
    }
}