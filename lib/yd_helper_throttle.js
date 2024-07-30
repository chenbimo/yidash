/**
 * 函数节流
 * @author tank
 * @param {function} fn 需要节流的函数
 * @param {Number} interval 时间间隔，单位为毫秒 （默认：300）
 * @returns {generator} 定时器函数
 */
export function yd_helper_throttle(fn, interval) {  
    let inThrottle;  
    return function() {  
        const args = arguments;  
        const that = this;  
        if (!inThrottle) {  
            fn.apply(that, args);  
            inThrottle = true;  
            setTimeout(() => inThrottle = false, interval);  
        }  
    }  
}