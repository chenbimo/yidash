/**
 * 将 Unix 时间戳转换为 Date 对象。
 * 支持秒级 (10位数字) 和毫秒级 (13位数字) 的 Unix 时间戳。
 * 验证时间戳是否有效，并自动调整精度。
 * @author penn <https://github.com/penn201500>
 * @category 日期时间
 * @alias yd_datetime_tsToDate
 *
 * @param {number|string} ts - Unix 时间戳。
 * @returns {Date|null} 对应的 Date 对象，如果时间戳无效或格式不正确则返回 null。
 *
 * @example
 * // 示例: 有效的秒级时间戳
 * console.log(timestampToDate(1704067200)); // 输出: Date 对象，代表 2024-01-01 00:00:00 UTC
 *
 * @example
 * // 示例: 有效的毫秒级时间戳
 * console.log(timestampToDate(1704067200000)); // 输出: Date 对象，代表 2024-01-01 00:00:00 UTC
 *
 * @example
 * // 示例: 无效的时间戳
 * console.log(timestampToDate("invalid")); // 输出: null
 */
export default (ts) => {
    if (typeof ts === 'string') {
        ts = parseInt(ts, 10);
    }

    if (typeof ts !== 'number' || isNaN(ts) || ts < 0) {
        console.error('Invalid timestamp.');
        return null;
    }

    if (ts.toString().length === 10) {
        return new Date(ts * 1000);
    } else if (ts.toString().length === 13) {
        return new Date(ts);
    } else {
        console.error('Timestamp must be either 10 or 13 digits long.');
        return null;
    }
};
