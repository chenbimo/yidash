/**
 * 对象属性摘取
 * @author 陈随易 <https://chensuiyi.me>
 * @category object
 * @alias yd_object_pick
 * @param {Object} obj 对象数据
 * @param {Array} fields 字段数组
 * @returns {Object} 摘取对象中的指定字段
 */
export default (obj, fields = []) => {
    const picked = {};
    for (const key of fields) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            picked[key] = obj[key];
        }
    }
    return picked;
};
