/**
 * 将日期时间字符串根据指定格式转换为 Date 对象，并可选时区。
 * 支持多种字符串格式，并验证输入格式的正确性。
 * @author penn <https://github.com/penn201500>
 * @category datetime
 * @alias yd_datetime_stringToDate
 * @param {string} timeStr - 日期时间字符串（例如："2021-01-01 00:00:00"）。
 * @param {string} format - 日期时间字符串的格式（例如："YYYY-MM-DD HH:mm:SS"）。
 * @param {number} [timezoneOffset=0] - 可选的时区偏移量，以小时为单位，相对于UTC时间。
 * @returns {Date|null} 转换后对应的 Date 对象，如果格式不匹配则返回 null。
 *
 * @example
 * // 示例: 格式 "YYYY-MM-DD HH:mm:SS"，UTC-5
 * const date1 = stringToDate"2021-01-01 00:00:00", "YYYY-MM-DD HH:mm:SS", -5
 * console.log(date1) // 输出: Date 对象，调整至时区: UTC-5
 *
 * @example
 * // 示例: 格式 "YYYY-MM-DD_HH-mm-SS"
 * const date2 = stringToDate("2021-01-01_00-00-00", "YYYY-MM-DD_HH-mm-SS")
 * console.log(date2) // 输出: Date 对象
 *
 * @example
 * // 示例: 格式 "DD/MM/YYYY HH:mm:SS"
 * const date3 = stringToDate("01/01/2021 00:00:00", "DD/MM/YYYY HH:mm:SS")
 * console.log(date3) // 输出: Date 对象
 *
 * @example
 * // 示例: 格式 "MM-DD-YYYY"
 * const date4 = stringToDate("01-01-2021", "MM-DD-YYYY")
 * console.log(date4) // 输出: Date 对象
 */

export default (timeStr, format, timezoneOffset = 0) => {
    const formatMapping = {
        YYYY: 0,
        MM: 1,
        DD: 2,
        HH: 3,
        mm: 4,
        SS: 5
    };

    const regexMapping = {
        'YYYY-MM-DD HH:mm:SS': /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,
        'YYYY-MM-DD_HH-mm-SS': /(\d{4})-(\d{2})-(\d{2})_(\d{2})-(\d{2})-(\d{2})/,
        'DD/MM/YYYY HH:mm:SS': /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/,
        'MM-DD-YYYY': /(\d{2})-(\d{2})-(\d{4})/
    };

    // 检查 format 格式
    if (!regexMapping[format]) {
        console.error('不支持的日期格式。');
        return null;
    }

    // 使用相应的正则表达式验证并提取
    const match = timeStr.match(regexMapping[format]);
    if (!match) {
        console.error('日期字符串格式无效。');
        return null;
    }

    let dateParts = [1970, 0, 1, 0, 0, 0]; // 默认日期: [年, 月, 日, 时, 分, 秒]

    const partsOrder = format.match(/(YYYY|MM|DD|HH|mm|SS)/g);

    partsOrder.forEach((part, index) => {
        if (formatMapping[part] !== undefined) {
            let value = parseInt(match[index + 1], 10);
            if (part === 'MM') value -= 1; // JavaScript的月份索引从 0 开始
            dateParts[formatMapping[part]] = value;
        }
    });

    // 时区处理
    const dateUTC = new Date(Date.UTC(...dateParts));
    const dateWithOffset = new Date(dateUTC.getTime() + timezoneOffset * 3600 * 1000);

    return dateWithOffset;
};
