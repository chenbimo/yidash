import { add, isBefore } from 'date-fns';

/**
 * 返回一个时间范围
 * @alias yd_date_range
 * @category 时间操作
 * @param {number} year - 需要增加的年数，默认为0
 * @param {number} month - 需要增加的月数，默认为0
 * @param {number} day - 需要增加的天数，默认为0
 * @param {number} hour - 需要增加的小时数，默认为0
 * @param {number} minute - 需要增加的分钟数，默认为0
 * @param {number} second - 需要增加的秒数，默认为0
 * @returns {Array} 返回一个包含两个Date对象的数组，分别代表开始时间和结束时间
 * @author 无名
 * @summary 生成一个时间范围数组，该数组包含当前时间和目标时间
 * 如果目标时间在当前时间之后，则返回 [当前时间, 目标时间] 的数组
 * 如果目标时间在当前时间之前或相同，则返回 [目标时间, 当前时间] 的数组
 */

const dateRange = (year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0) => {
    const now = new Date();
    const targetDate = add(now, { years: year, months: month, days: day, hours: hour, minutes: minute, seconds: second });

    if (isBefore(now, targetDate)) {
        return [now, targetDate];
    }
    return [targetDate, now];
};

export default dateRange;
