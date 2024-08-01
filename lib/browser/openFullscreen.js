/**
 * 开启网页全屏
 * @author 陈随易 <https://chensuiyi.me>
 * @category 浏览器
 * @alias yd_browser_openFullscreen
 * @param {string} element 元素
 */
export default (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
};
