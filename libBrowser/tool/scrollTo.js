// Quadratic ease-in-out function for smooth scrolling
const fnEaseInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) {
        return (c / 2) * t * t + b;
    }
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};

// RequestAnimationFrame polyfill for smooth animations
const fnTimeout = () => {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
};

// Move the scroll position to a specific amount
const fnMove = (amount) => {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
};

// Get the current scroll position
const fnPosition = () => {
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
};

/**
 * 平滑滚动到特定位置
 * @alias yd_browser_scrollTo
 * @category browser
 * @param {number} to - 目标滚动位置
 * @param {number} [duration] - 滚动动画的持续时间，以毫秒为单位
 * @param {Function} [callback] - 在滚动动画完成后执行的回调函数
 * @author 王勇 <https://github.com/wangyong1997>
 * @example yd_browser_scrollTo(100)
 */
export default (to, duration = 500, callback) => {
    const requestAnimFrame = fnTimeout();
    const start = fnPosition();
    const change = to - start;
    const increment = 20;
    let currentTime = 0;
    function animateScroll() {
        currentTime += increment;
        const val = fnEaseInOutQuad(currentTime, start, change, duration);
        fnMove(val);
        if (currentTime < duration) {
            requestAnimFrame(animateScroll);
        } else if (typeof callback === 'function') {
            callback();
        }
    }

    animateScroll();
};
