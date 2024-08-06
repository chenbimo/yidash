/**
 * @description 返回某年某月天数
 * @author grantguo <https://github.com/ForeverGuo>
 * @category datetime
 * @alias yd_dateTime_getDays
 * @param { number } year 年
 * @param { number } month 月
 * @return 返回某年某月天数
 * @summary 返回某年某月天数
 * @example
 *
 * const days_1 = yd_dateTime_getDays()
 * // => 31
 * const days_2 = yd_dateTime_getDays(2024,9)
 * // => 30
 */

export default (year = getYear(), month = getNumMonth()) => {
    const date = new Date(year, month, 0);
    return date.getDate();
};

const date = new Date();
/* 获取年份 */
const getYear = () => {
    return date.getFullYear();
};

/* 获取月份 */
const getMonth = () => {
    return (date.getMonth() + 1).toString().padStart(2, '0');
};

const getNumMonth = () => {
    return date.getMonth() + 1;
};
