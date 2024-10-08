/**
 * 将传入的字符串进行驼峰转换，将下划线、中划线、空格都去除。
 * @author 徐良辰 <https://hongzhan.cc>
 * @category string
 * @alias yd_string_convertToCamelCase
 * @param {String} str - 要传入的字符串。
 * @returns {String} - 驼峰转换后的字符串。
 *
 * @example
 * console.log(yd_string_convertToCamelCase("user - name")) // 输出示例: "userName"
 *
 * @example
 * console.log(yd_string_convertToCamelCase("user_name")) // 输出示例: "userName"
 *
 * @example
 * console.log(yd_string_convertToCamelCase("user name")) // 输出示例: "userName"
 */
export default (str) => {
    // 先将中划线、下划线和空格都替换为同一个分隔符，这里选择下划线
    // 使用replace方法和全局匹配标志g来替换字符串中的所有中划线为下划线
    // 然后再将所有的空格替换为下划线
    // 这样做是为了将不同类型的分隔符统一，方便后续处理
    let newStr = str.replace(/-/g, '_').replace(/\s/g, '_');
    // 将处理后的字符串按照下划线进行分割，得到一个数组
    // 例如 "user_name" 会被分割为 ["user", "name"]
    let parts = newStr.split('_');
    // 将分割后的数组的第一个元素作为转换后的初始值
    // 例如对于 "user_name"，初始值就是 "user"
    let camelCase = parts[0];
    // 遍历分割后的数组，从第二个元素开始（索引为1）
    for (let i = 1; i < parts.length; i++) {
        let part = parts[i];
        // 将当前元素的首字母转换为大写，然后与剩余部分拼接
        // 例如对于 "name"，转换为首字母大写后就是 "N" + "ame"，得到 "Name"
        // 再将这个转换后的结果拼接到camelCase上
        camelCase += part.charAt(0).toUpperCase() + part.slice(1);
    }
    // 返回最终转换为驼峰命名法的字符串
    return camelCase;
};
