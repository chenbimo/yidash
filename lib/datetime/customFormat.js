/**
 * 获取格式化的当前日期和时间，支持自定义格式。
 * @author penn <https://github.com/penn201500>
 * @category datetime
 * @alias yd_datetime_customFormat
 * @param {string} [format="YYYY-MM-DD_HH-mm-SS"] - 可选的日期时间格式。
 * @returns {string} 格式化后的日期时间字符串。
 *
 * @example
 * console.log(yd_datetime_customFormat()) // 输出: "2024-07-30_15-45-30"
 *
 * @example
 * console.log(yd_datetime_customFormat("DD/MM/YYYY HH:mm:SS")) // 输出: "30/07/2024 15:45:30"
 *
 * @example
 * console.log(yd_datetime_customFormat("MM-DD-YYYY")) // 输出: "07-30-2024"
 */
export default (format = 'YYYY-MM-DD_HH-mm-SS') => {
    try {
        if (typeof format !== 'string' || !format.match(/(YYYY|MM|DD|HH|mm|SS)/)) {
            throw new Error('日期格式无效');
        }
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        // 使用相应的值替换格式中的占位符
        const formattedDateTime = format
            //
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('mm', minutes)
            .replace('DD', day)
            .replace('HH', hours)
            .replace('SS', seconds);

        return formattedDateTime;
    } catch (error) {
        console.error('格式化日期时出错:', error);
        return null;
    }
};
