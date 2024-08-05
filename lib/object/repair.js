/**
 * 修复对象值
 * @param {object} obj 对象数据
 * @param {Array} values 要修复的值
 * @param {any}  replace 要替换的值
 * @returns {object} 返回修复后的对象
 * @example yd_object_repair({a:null,b:undefined,c:1}) // {a:'',b:'',c:1}
 */
export default (obj, values = [null, undefined], replace = '') => {
    const newObj = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (values.includes(value)) {
                newObj[key] = replace;
            } else {
                newObj[key] = value;
            }
        }
    }
    return newObj;
};
