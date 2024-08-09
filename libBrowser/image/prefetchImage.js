/**
 * 预加载单个图片
 * @author Amonduul <https://amonduul.vercel.app>
 * @category browser
 * @alias yd_browser_prefetchImage
 * @param  { string } img 图片地址
 * @returns { Promise } 返回一个 Promise 对象，当图片加载完成时 resolve，否则 reject
 */
export default (img) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = img;
        image.onload = () => resolve('prefetch');
        image.onerror = () => reject(`${img} failed to load`);
    });
};
