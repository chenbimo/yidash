/**
 * 将 Date 对象转换为 Unix 时间戳。
 * 验证 Date 对象是否有效，并允许选择输出时间戳的精度（秒或毫秒）。
 * 该函数将验证输入的 Date 对象是否表示有效的日期。
 * @author penn <https://github.com/penn201500>
 * @category 日期时间
 * @alias yd_datetime_dateToTimestamp
 * @param {Date} date - Date 对象。
 * @param {boolean} inMilliseconds - 如果为 true，则输出 13 位数字的时间戳（毫秒级），否则输出 10 位数字的时间戳（秒级）。默认为 false。
 * @returns {number|null} 对应的 Unix 时间戳，如果 Date 对象无效则返回 null。
 *
 * @example
 * // 示例: 有效的 Date 对象，输出秒级时间戳
 * console.log(dateToTimestamp(new Date())) // 输出: Unix 时间戳（10位数字）
 *
 * @example
 * // 示例: 有效的 Date 对象，输出毫秒级时间戳
 * console.log(dateToTimestamp(new Date(), true)) // 输出: Unix 时间戳（13位数字）
 *
 * @example
 * // 示例: 无效的 Date 对象
 * console.log(dateToTimestamp(new Date("invalid"))) // 输出: null
 *
 * @example
 * // 示例: 显然无效的 Date 对象
 * console.log(dateToTimestamp(new Date('1000-00-00 00:00:00Z'))) // 输出: null
 */
export default (date, inMilliseconds = false) => {
    // Check if 'date' is an instance of Date and it represents a valid date
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        console.error('Invalid Date object.');
        return null;
    }
    return inMilliseconds ? date.getTime() : Math.floor(date.getTime() / 1000);
};
