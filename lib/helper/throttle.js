/**
 * 函数节流
 * @author tank
 * @category 帮助
 * @param {function} fn 需要节流的函数
 * @param {Number} interval 时间间隔，单位为毫秒 （默认：300）
 * @returns {function} 执行函数
 */
export default (fn, interval) => {
    let inThrottle;
    interval = interval || 300;
    return function () {
        const args = arguments;
        const that = this;
        if (!inThrottle) {
            fn.apply(that, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), interval);
        }
    };
};
