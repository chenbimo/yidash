/**
 * 判断是不是当前用户的是不是移动设备
 * @author 挺可怜的一人 https://github.com/mhpsy
 * @category browser
 * @alias yd_browser_isMobileDevices
 * @returns {boolean} 返回是否是移动设备
 * @example yd_browser_isMobileDevices() => true
 */
export default () => {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|BlackBerry|webOS/i.test(navigator.userAgent);
}