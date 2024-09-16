/**
 * 获取浏览器滚动条宽度
 * @author 黄方明 <https://github.com/hank-open>
 * @category browser
 * @alias yd_browser_getScrollBarSize
 * @returns {number} 浏览器滚动条宽度
 * @example yd_browser_getScrollBarSize() => 17
 */
let size;
export default () => {
    if (!size && size !== 0) {
        const scrollDiv = document.createElement('div');
        scrollDiv.style.position = 'absolute';
        scrollDiv.style.top = '-9999px';
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';
        document.body.appendChild(scrollDiv);
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
    }

    return size;
};
