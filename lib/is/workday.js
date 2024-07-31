/**
 * 检查日期是否为工作日 (周一到周五为工作日, 周六周日为节假日)
 * ps: 此方法只能检测自然工作日,无法检测国家法定节假日, 类似清明,端午,中秋,国庆这类节日需要调假日办的api获取才能判断
 * @author 生命过客 <739694218@qq.com>
 * @category 判断
 * @param {Date} date 日期
 * @returns {Boolean} 周一到周五为工作日, 周六周日为节假日
 */
export default (date) => {
    return date.getDay() % 6 !== 0;
};
