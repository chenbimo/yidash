/**
 * 友好的时间显示
 * @author lz-freedom <https://github.com/lz-freedom>
 * @category datetime
 * @alias yd_datetime_friendlyDateStr
 * @param {string|Date|number} sTime 待格式化的时间, 可传递时间戳(秒、毫秒)、日期对象、日期字符串(YYYY-MM-DD HH:mm:SS)
 * @param {string} type  类型 normal | blur | full | ymd | other
 * @returns {string|null} 格式化后的字符串
 *
 * @example
 * // 示例: 刚刚
 * console.log(yd_datetime_friendlyDateStr('2024-08-02 10:36:30', 'normal')) // 输出: 刚刚
 *
 * @example
 * // 示例: 1分钟前
 * console.log(yd_datetime_friendlyDateStr('2024-08-02 10:35:30', 'normal')) // 输出: 1分钟前
 *
 * @example
 * // 示例: 3小时前
 * console.log(yd_datetime_friendlyDateStr('2024-08-02 07:35:30', 'blur')) // 输出: 3小时前
 */
export default (sTime, type = 'normal') => {
    if (!sTime) {
        console.error('Unknown time format.');
        return null;
    }
    // 处理各种类型的时间
    let date;
    switch (typeof sTime) {
        case 'number':
            // 秒级时间戳转毫秒级
            if (sTime.toString().length === 10) {
                sTime *= 1000;
            }
            date = new Date(sTime);
            break;
        case 'string':
            const regexMapping = {
                'YYYY-MM-DD HH:mm:SS': /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/
            };
            const match = sTime.match(regexMapping['YYYY-MM-DD HH:mm:SS']);
            if (!match) {
                console.error('Invalid Time string.');
                return null;
            }
            date = new Date(sTime);
            break;
        case 'object':
            if (!(sTime instanceof Date) || isNaN(sTime.getTime())) {
                console.error('Invalid Date object.');
                return null;
            }
            date = sTime;
            break;
        default:
            console.error('Unknown time format.');
            return null;
    }

    // 计算时间差
    const cTimestamp = Math.floor(Date.now() / 1000); // 当前时间戳（单位：秒）
    const sTimestamp = Math.floor(date.getTime() / 1000); // 源时间戳（单位：秒）
    const dTimestamp = cTimestamp - sTimestamp; // 时间差
    const sDate = new Date(sTimestamp * 1000);
    const cDate = new Date(cTimestamp * 1000);
    const dDay = Math.floor((cDate - sDate) / (24 * 3600 * 1000)); // 日期差
    const dYear = cDate.getFullYear() - sDate.getFullYear(); // 年份差

    // 精确的时间显示
    if (type === 'normal') {
        if (dTimestamp < 60) {
            if (dTimestamp < 10) {
                return '刚刚';
            } else {
                return `${Math.floor(dTimestamp / 10) * 10}秒前`;
            }
        } else if (dTimestamp < 3600) {
            return `${Math.floor(dTimestamp / 60)}分钟前`;
        } else if (dYear === 0 && dDay === 0) {
            return `今天${sDate.getHours()}:${sDate.getMinutes()}`;
        } else if (dYear === 0) {
            const { year, month, day, hours, minutes, seconds } = dismantleDate(sDate);
            return `${sDate.getMonth() + 1}月${sDate.getDate()}日 ${hours}:${minutes}:${seconds}`;
        } else {
            const { year, month, day, hours, minutes, seconds } = dismantleDate(sDate);
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        }
    }

    // 相对模糊的时间显示
    if (type === 'blur') {
        if (dTimestamp < 60) {
            return `${dTimestamp}秒前`;
        } else if (dTimestamp < 3600) {
            return `${Math.floor(dTimestamp / 60)}分钟前`;
        } else if (dTimestamp >= 3600 && dDay === 0) {
            return `${Math.floor(dTimestamp / 3600)}小时前`;
        } else if (dDay > 0 && dDay <= 7) {
            return `${dDay}天前`;
        } else if (dDay > 7 && dDay <= 30) {
            return `${Math.floor(dDay / 7)}周前`;
        } else if (dDay > 30) {
            return `${Math.floor(dDay / 30)}个月前`;
        }
    }

    // 完整的时间显示
    if (type === 'full') {
        const { year, month, day, hours, minutes, seconds } = dismantleDate(sDate);
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // 年月日的时间显示
    if (type === 'ymd') {
        const { year, month, day } = dismantleDate(sDate);
        return `${year}-${month}-${day}`;
    }

    // 兜底显示
    if (dTimestamp < 60) {
        return `${dTimestamp}秒前`;
    } else if (dTimestamp < 3600) {
        return `${Math.floor(dTimestamp / 60)}分钟前`;
    } else if (dTimestamp >= 3600 && dDay === 0) {
        return `${Math.floor(dTimestamp / 3600)}小时前`;
    } else {
        const { year, month, day, hours, minutes, seconds } = dismantleDate(sDate);
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
};

/**
 * 日期拆解
 * @param {Date} d 待拆解的日期对象
 * @returns {Object} 拆解后的日期对象
 */
function dismantleDate(d) {
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');
    return { year, month, day, hours, minutes, seconds };
}
