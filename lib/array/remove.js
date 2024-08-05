/**
 * 根据元素删除
 * @author XiaoXinYo
 * @category array
 * @alias yd_array_remove
 * @param {Array} array 将要被删除元素的数组
 * @param {any} item 元素
 * @param {number} [itemNumber=1] 删除个数(不填代表删除全部)
 * @throws {Error} 删除个数大于数组中指定元素个数
 * @returns {Array} 返回删除后的数组
 * @example yd_array_remove(['易', '大', '师'], '易'); //['大', '师']
 */

export default (array, item, itemNumber) => {
    const result = [...array];
    const totalItemNumber = result.filter((x) => x === item).length;
    if (itemNumber === undefined) {
        itemNumber = totalItemNumber;
    } else {
        if (itemNumber > totalItemNumber) {
            throw new Error('删除个数大于数组中指定元素个数');
        } else if (itemNumber === 0) {
            return result;
        }
    }

    let count = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] === item) {
            if (count === itemNumber) {
                break;
            }
            result.splice(i, 1);
            count++;
        }
    }
    return result;
};
