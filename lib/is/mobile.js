/**
 * 判断是否是移动端
 * @author luxiaofeng
 * @category is
 * @alias yd_is_mobile
 * @returns { boolean } 返回是否是手机端
 */
export default () => {
    const ua = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipod|balckberry/i.test(ua);
};
