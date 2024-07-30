/**
 * 手机号脱敏
 * @param {Function} fn 手机号脱敏的函数
 * @param {number} delay 手机号
 * @author Nil <https://github.com/Nil-nil-zero>
 * @return {String}
 */
export function phone_Masking(number) {
    if (!/^\d{11,}$/.test(number)) {
        return '手机号码必须是11位数字';
    }
    const result = number.substring(0, 3) + '****' + number.substring(7);
    return result;
}

console.log(phone_Masking('1312d3411211'));
