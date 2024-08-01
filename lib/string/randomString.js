/**
 * 根据指定长度生成随机字符串，可选是否包含特殊字符。
 * @author penn <https://github.com/penn201500>
 * @category string
 * @alias yd_string_randomString
 * @param {Number} length - 要生成的字符串的长度。
 * @param {Boolean} [includeSpecial=false] - 是否包含特殊字符。
 * @returns {String} - 生成的随机字符串。
 *
 * @example
 * console.log(generateRandomString(10)) // 输出示例: "LGEc8EptLr"
 *
 * @example
 * console.log(generateRandomString(10, true)) // 输出示例: "7ooxUA9'}:CP4)urV##["
 */
export default (length, includeSpecial = false) => {
    const alphaNum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const specialChars = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
    const validChars = includeSpecial ? alphaNum + specialChars : alphaNum;

    let result = '';
    for (let i = 0; i < length; i++) {
        result += validChars.charAt(Math.floor(Math.random() * validChars.length));
    }
    return result;
};
