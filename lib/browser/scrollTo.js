// Quadratic ease-in-out function for smooth scrolling
const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) {
        return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

// RequestAnimationFrame polyfill for smooth animations
const requestAnimFrame = (() => {
    return window.requestAnimationFrame || 
           window.webkitRequestAnimationFrame || 
           window.mozRequestAnimationFrame || 
           function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

/**
 * Move the scroll position to a specific amount
 * @param {number} amount - The amount to scroll
 */
function move(amount) {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
}

/**
 * Get the current scroll position
 * @returns {number} - The current scroll position
 */
function position() {
    return document.documentElement.scrollTop || 
           document.body.parentNode.scrollTop || 
           document.body.scrollTop;
}

/**
 * 平滑滚动到特定位置
 * @author 王勇 <https://github.com/wangyong1997>
 * @category browser
 * @alias yd_browser_scrollTo
 * @param {number} to - 目标滚动位置
 * @param {number} [duration=500] - 滚动动画的持续时间，以毫秒为单位
 * @param {Function} [callback] - 在滚动动画完成后执行的回调函数
 */
export default (to, duration = 500, callback) => {
    const start = position();
    const change = to - start;
    const increment = 20;
    let currentTime = 0;
    function animateScroll() {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        move(val);
        if (currentTime < duration) {
            requestAnimFrame(animateScroll);
        } else if (typeof callback === 'function') {
            callback();
        }
    }

    animateScroll();
}