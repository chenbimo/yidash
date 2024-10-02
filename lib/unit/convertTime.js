/**
 * 转换时间单位
 * @alias yd_unit_convertTime
 * @category unit
 * @param {number} value 秒数
 * @param {string} fromUnit 原始单位
 * @param {string} toUnit 目标单位
 * @param {number} precision 精度
 * @returns  {number} 返回目标时间
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_unit_convertTime()
 */
export default (value, fromUnit, toUnit, precision = 0) => {
    // 定义时间单位之间的换算关系(以秒为基准)
    const unitToSeconds = {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400,
        month: 2592000, // 假设一个月30天
        year: 31536000 // 假设一年365天
    };

    const seconds = value * unitToSeconds[fromUnit];
    const result = seconds / unitToSeconds[toUnit];

    return Number(result.toFixed(precision));
};
