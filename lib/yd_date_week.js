/**
 * 返回当前日期是周几
 */
export function yd_date_week() {
    var date = new Date();
    var day = date.getDay();
    var names = ["周日","周一","周二","周三","周四","周五","周六"];
    return names[day];
}