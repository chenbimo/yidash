/**
 * 对象拼接查询参数
 * @alias yd_object_queryParams
 * @category object
 * @param {object} obj 对象数据
 * @param {Array} explude 排除字段数组
 * @returns {object} 摘取对象中的指定字段
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_object_queryParams()
 */
export default (obj, explude = [null, undefined]) => {
    const paramsPair = [];
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (explude.includes(key) === false) {
                paramsPair.push(`${key}=${obj[key]}`);
            }
        }
    }
    const queryParams = paramsPair.join('&');
    return queryParams;
};
