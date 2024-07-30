/**
 * 字符串缩短展示
 * @author 陈随易 <https://chensuiyi.me>
 * @category 字符串
 * @param {String} address 字符串
 * @param {Number} startNum 前面留几个字符
 * @param {Number} endNum 后面留几个支付
 * @returns {String} 返回截断后的字符串
 */
export function yd_string_short(str, startNum = 4, endNum = 4, placeholder = '***') {
    if (!str) return '';
    str = String(str);
    if (str.length < startNum + endNum) return str;
    const strSplit = str.split('');
    const result = [
        //
        strSplit.slice(0, startNum).join(''),
        placeholder,
        strSplit.slice(-endNum).join('')
    ].join('');

    return result;
}
