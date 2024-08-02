/**
 * 对字符串进行 Base64 编码或解码。
 * @summary 根据指定的模式（编码或解码）对字符串进行 Base64 编码或解码。
 * @author penn <https://github.com/penn201500>
 * @category crypto
 * @alias yd_crypto_base64EncodeDecode
 *
 * @param {string} input - 要处理的字符串。
 * @param {string} mode - 操作模式，'encode' 或 'decode'。
 * @returns {string} 处理后的字符串。
 * @throws {Error} 如果输入不是字符串或模式不被支持则报错。
 *
 * @example
 * // 示例: 对字符串进行 Base64 编码
 * console.log(yd_crypto_base64EncodeDecode('Hello, World!', 'encode')); // 输出: SGVsbG8sIFdvcmxkIQ==
 *
 * @example
 * // 示例: 对 Base64 字符串进行解码
 * console.log(yd_crypto_base64EncodeDecode('SGVsbG8sIFdvcmxkIQ==', 'decode')); // 输出: Hello, World!
 */

export default (input, mode) => {
    try {
        if (typeof input !== 'string') {
            throw new TypeError('输入必须是字符串。');
        }
        if (mode !== 'encode' && mode !== 'decode') {
            throw new Error('模式必须是 "encode" 或 "decode"。');
        }

        if (mode === 'encode') {
            return Buffer.from(input).toString('base64');
        } else {
            return Buffer.from(input, 'base64').toString('utf8');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
