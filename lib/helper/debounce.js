/**
 * 函数防抖执行
 * @author tank
 * @category 帮助
 * @param {function} fn 需要防抖的函数
 * @param {Number} wait 防抖执行的毫秒数 （默认：600）
 * @returns {function} 执行函数
 */
export default (fn, wait) => {
    let timeout = null;
    wait = wait || 600;
    return function () {
        const that = this;
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(that);
        }, wait);
    };
};
