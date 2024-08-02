/**
 * 判断是否是移动端
 * @author 挺可怜的一人 https://github.com/mhpsy
 * @author luxiaofeng
 * @category is
 * @alias yd_is_mobile
 * @returns { boolean } 返回是否是手机端
 */
export default () => {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|BlackBerry|webOS/i.test(navigator.userAgent);
};
