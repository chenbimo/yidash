/**
 * 将字符串、画布元素、图像元素、`Blob`或`File`、`ArrayBuffer`或类型化数组、对象(转为JSON字符串)等下载为文件
 * @param {HTMLCanvasElement|HTMLMediaElement|HTMLImageElement|HTMLSourceElement|HTMLTrackElement|HTMLEmbedElement|HTMLObjectElement|File|Blob|ArrayBuffer|URL|String} content 下载内容/下载链接
 * @param {String} [filename] 文件名 默认使用页面标题
 * @param {Boolean} [isURL] 传入的字符串是否为下载链接。(否则将作为文本内容下载) 默认为`false`
 */
const yd_download = (content, filename = document.title, isURL = "false") => {
    if (content === void 0 || content === null) throw new TypeError("无下载内容！");
    const anchor = document.createElement("a");
    // 将数值类型与布尔类型转为字符串
    if (typeof content === "number" || typeof content === "bigint" || typeof content === "boolean") return yd_download(String(content), filename);
    if (typeof content === "string") {
        if (isURL) anchor.href = content;
        // 下载为文本内容
        else return yd_download(new Blob([content]), filename);
    }
    // 对象类型
    else if (typeof content === "object") {
        // 画布元素转为base64作为下载链接
        if (content instanceof HTMLCanvasElement) anchor.href = content.toDataURL("image/png");
        // 包含src属性的元素直接使用src属性作为下载链接
        else if (content instanceof HTMLImageElement || content instanceof HTMLMediaElement || content instanceof HTMLSourceElement || content instanceof HTMLTrackElement || content instanceof HTMLEmbedElement) anchor.href = content.src;
        // object元素使用data属性作为下载链接
        else if (content instanceof HTMLObjectElement) anchor.href = content.data;
        // File和Blob类型转为url作为下载链接
        else if (content instanceof Blob) anchor.href = URL.createObjectURL(content);
        // ArrayBuffer将转为Blob进行下载
        else if (content instanceof ArrayBuffer) return yd_download(new Blob([content]), filename);
        // URL对象转为字符串形式
        else if (content instanceof URL) anchor.href = content.href;
        // 类型化数组与DataView 将转为ArrayBuffer
        else if (ArrayBuffer.isView(content)) return yd_download(content.buffer, filename);
        else {
            // 尝试转为JSON字符串
            try {
                return yd_download(new Blob([JSON.stringify(content)]), filename);
            } catch {
                throw new TypeError("对象可能包含循环引用。");
            }
        }
    } else throw new TypeError("无法处理的类型");
    // 设置文件名
    anchor.download = filename;
    anchor.click();
};
