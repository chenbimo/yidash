/**
 * 判断是否是移动端
 * @author 挺可怜的一人 https://github.com/mhpsy
 * @author luxiaofeng
 * @author XiaoXinYo
 * @category is
 * @alias yd_is_mobile
 * @param {string} [userAgent=navigator.userAgent] ua值,默认为navigator.userAgent
 * @returns {boolean} 返回是否是手机端
 */
export default (userAgent=navigator.userAgent) => {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|BlackBerry|webOS/i.test(userAgent);
};
