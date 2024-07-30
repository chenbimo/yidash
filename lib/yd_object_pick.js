/**
 * 对象属性摘取
 * @author 陈随易 <https://chensuiyi.me>
 * @category 对象
 * @param {Object} obj 对象数据
 * @param {Array} fields 字段数组
 * @returns {Object} 摘取对象中的指定字段
 */
export const yd_object_pick = (obj, fields = []) => {
    const picked = {};
    for (const key of fields) {
        if (obj.hasOwnProperty(key)) {
            picked[key] = obj[key];
        }
    }
    return picked;
};
