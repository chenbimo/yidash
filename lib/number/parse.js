/**
 * 解析数字
 * @author 陈随易 <https://chensuiyi.me>
 * @category number
 * @alias yd_number_parse
 * @param {Number} 传入数字
 * @returns {Object} 返回解析对象
 */
export default (number) => {
    const isNegative = number < 0;
    let numberString = String(number);

    if (isNegative) {
        numberString = numberString.slice(1);
    }

    const decimal = numberString.split('.');

    return {
        integer: decimal[0],
        fraction: decimal[1] || '',
        sign: isNegative ? '-' : ''
    };
};
