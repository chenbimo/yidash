/**
 * 手机号脱敏
 * @author Nil <https://github.com/Nil-nil-zero>
 * @category phone
 * @alias yd_number_masking
 * @param {Function} 手机号脱敏的函数
 * @param {number} 手机号
 * @return {String}
 * @summary 应用场景：用于数据安全合规，个人隐私保护
 */
export default (number) => {
    if (!/^\d{11,}$/.test(number)) {
        return '手机号码必须是11位数字';
    }
    const result = number.substring(0, 3) + '****' + number.substring(7);
    return result;
};
