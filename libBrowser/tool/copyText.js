/**
 * 复制文本
 * @alias yd_browser_copyText
 * @category browser
 * @param {string} text 要复制的文本
 * @returns {Promise<boolean>} 是否复制成功
 * @author ssyamv https://github.com/ssyamv
 * @example yd_browser_copyText('123456');
 */
export default async (text) => {
    //  判断是否支持clipboard API
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
            console.log('复制成功');
            return true;
        } catch (error) {
            console.error(`复制失败：${error}`);
            return false;
        }
    } else {
        const selection = window.getSelection();
        if (!selection) {
            console.error('当前浏览器不支持复制');
            return false;
        }
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.value = text;
        input.select();
        document.execCommand('copy');
        input.remove();
        return true;
    }
};
