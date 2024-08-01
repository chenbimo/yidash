/**
 * 退出网页全屏
 * @author 陈随易 <https://chensuiyi.me>
 * @category 浏览器
 * @alias yd_browser_exitFullScreen
 */
export default () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
};
