/**
 * 对字符串进行 Base64 解码。
 * @alias yd_crypto_base64Decode
 * @category crypto
 * @returns {string} 处理后的字符串。
 * @author penn <https://github.com/penn201500>
 * @summary 根据指定的模式对字符串进行 Base64 解码。
 * @example
 * // 示例: 对 Base64 字符串进行解码
 * console.log(yd_crypto_base64Decode('SGVsbG8sIFdvcmxkIQ==')); // 输出: Hello, World!
 * @param {string} input - 要处理的字符串。
 * @throws {Error} 如果输入不是字符串则报错。
 */

export default (input) => {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('输入必须是字符串。');
        }

        return Buffer.from(input, 'base64').toString('utf8');
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
