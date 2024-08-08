/**
 * 滚动到页面顶部
 * @alias yd_browser_scrollToTop
 * @author Zhoozie <https://github.com/Zhoozie>
 * @category browser
 */
export default () => {
    const height = document.documentElement.scrollTop || document.body.scrollTop;
    if (height > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, height - height / 8);
    }
};
