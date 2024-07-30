/**
 * 判断是否是移动端
 * @author luxiaofeng
 * @category 判断
 * @returns { boolean } 返回是否是手机端
 */
export const yd_is_mobile = () => {
    const ua = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipod|balckberry/i.test(ua);
};
