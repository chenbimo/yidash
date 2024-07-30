/**
 * 去除字符串扩展名
 * @author jiaokang
 * @category 字符串
 * @param str 要转换的字符串 例如 a.jpg
 * @returns {string} 返回去除扩展名后的字符串 例如 a
 * @time 2024年7月30日 17点16分
 */
export const yd_string_trimAll = (str) => {
    // 使用 lastIndexOf 查找最后一个 '.' 的位置
    let lastDotIndex = str.lastIndexOf('.');
    // 如果找不到 '.' 或者 '.' 是文件名的第一个字符，返回源文件名
    if (lastDotIndex === -1 || lastDotIndex === 0) {
        return str;
    }
    // 返回 '.' 之前的部分
    return str.substring(0, lastDotIndex);
};