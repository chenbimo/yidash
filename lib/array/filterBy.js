/**
 * 数组按条件过滤
 * @alias yd_array_filterBy
 * @category array
 * @param {Array} arrs 数组数据
 * @param {Function} fn 比对函数
 * @returns {object} 返回根据字段映射的对象
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_array_filterBy()
 */
export default (arrs, fn) => {
    const result = arrs.filter((item) => {
        return fn(item);
    });
    return result;
};
