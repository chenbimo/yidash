/**
 * 对象属性排除
 * @author 陈随易 <https://chensuiyi.me>
 * @category object
 * @alias yd_object_omit
 * @param {Object} obj 对象数据
 * @param {Array} fields 要排除的字段数组
 * @returns {Object} 返回排除部分属性后的对象
 */
export default (obj, fields = []) => {
    const result = Object.create(null);
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && fields.includes(key) === false) {
            result[key] = obj[key];
        }
    }
    return result;
};
