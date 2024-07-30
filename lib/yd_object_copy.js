/**
 * 深拷贝对象
 * @author 杜同学 <https://github.com/duweikang>
 * @category 对象
 * @param {Object} obj 对象数据
 * @returns {Object} 返回深拷贝后的对象
 */
function yd_object_copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}
