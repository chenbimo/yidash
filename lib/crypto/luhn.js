/**
 * 信用卡验证算法
 * @category ctypto
 * @param {string} str 信用卡卡号
 * @returns {number} 信用卡验证树枝
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_ctypto_luhn('1234456789') // 1
 */
export const yd_ctypto_luhn = (str) => {
    const ord = 48;
    const textEncoder = new TextEncoder();
    const bytes = textEncoder.encode(String(str));
    let ptr = bytes.length - 1;
    let sum = 0;
    let mul = 2;
    while (ptr >= 0) {
        let val = bytes[ptr--] - ord;
        val *= mul;
        sum += ((val % 10) + val / 10) | 0;
        mul = 1 + (mul % 2);
    }
    return (10 - (sum % 10)) % 10;
};
