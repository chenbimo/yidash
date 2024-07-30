/**
 * 将日期时间字符串转换为 Date 对象。
 * 支持多种格式的字符串转换，并验证输入格式。
 *
 * @param {string} timeStr - 日期时间字符串（例如："2021-01-01 00:00:00"）。
 * @param {string} format - 日期时间字符串的格式（例如："YYYY-MM-DD HH:MM:SS"）。
 * @returns {Date|null} 对应的 Date 对象，如果格式不匹配则返回 null。
 *
 * @example
 * // 示例: 格式 "YYYY-MM-DD HH:mm:SS"
 * const date1 = stringToDate("2021-01-01 00:00:00", "YYYY-MM-DD HH:mm:SS")
 * console.log(date1) // 输出: Date 对象
 *
 * @example
 * // 示例: 格式 "DD/MM/YYYY HH:mm:SS"
 * const date2 = stringToDate("01/01/2021 00:00:00", "DD/MM/YYYY HH:mm:SS")
 * console.log(date2) // 输出: Date 对象
 *
 * @example
 * // 示例: 格式 "MM-DD-YYYY"
 * const date3 = stringToDate("01-01-2021", "MM-DD-YYYY")
 * console.log(date3) // 输出: Date 对象
 *
 * @author penn <https://github.com/penn201500>
 */
function stringToDate(timeStr, format) {
    const formatMapping = {
        "YYYY": 0,
        "MM": 1,
        "DD": 2,
        "HH": 3,
        "mm": 4,
        "SS": 5
    };

    const regexMapping = {
        "YYYY-MM-DD HH:mm:SS": /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,
        "YYYY-MM-DD_HH-mm-SS": /(\d{4})-(\d{2})-(\d{2})_(\d{2})-(\d{2})-(\d{2})/,
        "DD/MM/YYYY HH:mm:SS": /(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/,
        "MM-DD-YYYY": /(\d{2})-(\d{2})-(\d{4})/
    };

    // 检查 format 格式
    if (!regexMapping[format]) {
        console.error("Unsupported date format.");
        return null;
    }

    const match = timeStr.match(regexMapping[format]);
    if (!match) {
        console.error("Invalid date string format.");
        return null;
    }

    let dateParts = [1970, 0, 1, 0, 0, 0]

    const partsOrder = format.match(/(YYYY|MM|DD|HH|mm|SS)/g);

    partsOrder.forEach((part, index) => {
        if (formatMapping[part] !== undefined) {
            let value = parseInt(match[index + 1], 10);
            if (part === "MM") value -= 1
            dateParts[formatMapping[part]] = value;
        }
    });

    // Create Date object with correct components using Date.UTC
    const date = new Date(Date.UTC(...dateParts));

    return date;
}
