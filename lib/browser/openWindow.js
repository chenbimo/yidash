/**
 * 在当前页面打开新窗口页
 * @author 王勇 <https://github.com/wangyong1997>
 * @category browser
 * @alias yd_browser_openWindow
 * @param {string} url 打开的网页地址
 * @param {string} title 打开的网页标题
 * @param {number} width 打开网页的宽度
 * @param {number} height 打开网页的高度
 * @returns {Window | null} 新打开的窗口对象，或在失败时返回 null
 */

export default (url, title, width, height) => {
    // 获取屏幕位置和尺寸
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

    const screenWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
    const screenHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

    // 计算窗口位置以居中显示
    const left = ((screenWidth / 2) - (width / 2)) + dualScreenLeft
    const top = ((screenHeight / 2) - (height / 2)) + dualScreenTop

    // 打开新窗口
    const newWindow = window.open(
        url,
        title,
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );

    // 如果可能，将焦点放在新窗口上
    if (newWindow && typeof newWindow.focus === 'function') {
        newWindow.focus();
    }

    return newWindow;
}
