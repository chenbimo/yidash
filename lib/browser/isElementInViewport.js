/**
 * 检测元素是否至少有部分在可视区域内
 * @author monlink
 * @alias yd_browser_isElementInViewport
 * @param {HTMLElement} element 需要检测的元素
 * @returns {boolean} 元素是否在可视区域内
 * @example yd_browser_isElementInViewport(document.getElementById('myElement')); // 返回 true 或 false
 */
export default (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
