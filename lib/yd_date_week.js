/**
 * 返回当前日期是星期几
 * @author tank
 * @returns {string} 星期几
 */
export function yd_date_week() {
    const date = new Date();
    const day = date.getDay();
    const names = ["周日","周一","周二","周三","周四","周五","周六"];
    return names[day];
}