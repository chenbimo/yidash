/**
 * @alias yd_string_numToChinese
 * @category string
 * @param {number} num - 需要转换为中文数字的数字。
 * @param {string} [type='simplified'] - 'simplified' 转换为简体中文;  'financial' 转换为繁体中文。
 * @returns {string} - 返回转换后的中文。
 * @author penn <https://github.com/penn201500>
 * @summary 该函数接收一个数字，将其转换为中文数字。默认转换为简体中文，也可以选择转换为繁体中文。
 * @example
 * yd_string_numToChinese(12345); // 一二三四五
 * yd_string_numToChinese(12345, 'financial'); // 壹贰叁肆伍
 * @description 将数字转换为中文数字。
 */

export default (num, type = 'simplified') => {
    if (typeof num !== 'number') {
        throw new TypeError('num 必须是一个数字');
    }

    if (type !== 'simplified' && type !== 'financial') {
        throw new TypeError('type 必须是 "simplified" 或 "financial"');
    }

    const simplified = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const financial = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];

    const mapping = type === 'simplified' ? simplified : financial;

    return num
        .toString()
        .split('')
        .map((digit) => {
            const parsedDigit = parseInt(digit);
            if (isNaN(parsedDigit)) {
                throw new TypeError('num 必须是一个数字');
            }
            return mapping[parsedDigit];
        })
        .join('');
};
