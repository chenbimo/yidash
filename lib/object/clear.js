/**
 * 清理对象值
 * @param {object} obj 对象数据
 * @param {Array} values 要清理的值
 * @returns {object} 返回修复后的对象
 * @example yd_object_clear({a:null,b:undefined,c:1}) // {c:1}
 */
export default (obj, values = [null, undefined]) => {
    const newObj = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (!values.includes(value)) {
                newObj[key] = value;
            }
        }
    }
    return newObj;
};
