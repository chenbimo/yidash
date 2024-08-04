/**
 * 对字符串进行 Base64 编码。
 * @alias yd_crypto_base64Encode
 * @category crypto
 * @returns {string} 处理后的字符串。
 * @author penn <https://github.com/penn201500>
 * @summary 根据指定的模式对字符串进行 Base64 编码。
 * @example
 * // 示例: 对字符串进行 Base64 编码
 * console.log(yd_crypto_base64Encode('Hello, World!')); // 输出: SGVsbG8sIFdvcmxkIQ==
 * @param {string} input - 要处理的字符串。
 * @throws {Error} 如果输入不是字符串或模式不被支持则报错。
 */

export default (input) => {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('输入必须是字符串。');
        }

        return Buffer.from(input).toString('base64');
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
