/**
 * 是否是移动端
 * @returns Boolean
 */
export const yd_is_mobile = () => {
    const ua = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipod|balckberry/i.test(ua);
};
