import yd_object_omit from './omit.js';

/**
 * 补全空对象
 * @param {object} obj 对象数据
 * @param {Array} explude 需要排除的字段
 * @returns {object} 返回修复后的对象
 * @example yd_object_repairEmpty({a:null,b:undefined,c:1}) // {a:'',b:'',c:1}
 */
export default (obj, explude = ['id']) => {
    const newObj = {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (value !== null && value !== undefined) {
                newObj[key] = value;
            } else {
                newObj[key] = '';
            }
        }
    }
    return yd_object_omit(newObj, explude);
};
