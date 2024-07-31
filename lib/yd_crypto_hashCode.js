/**
 * 哈希生成
 * @author bai.zixv <https://github.com/baizixv>
 * @category 加解密
 * @param {string} str 字符串
 * @returns {number} 哈希值
 */
export const yd_crypto_hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
};
