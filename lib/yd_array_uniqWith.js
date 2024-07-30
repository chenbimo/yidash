/**
 * 数组去重
 * @author 陈随易 <https://chensuiyi.me>
 * @category 数组
 * @param {Array} array 数组数据
 * @param {Function} comparator 比较函数
 * @returns {Array} 返回比较函数去重后的数组
 */
export const yd_array_uniqWith = (array, comparator) => {
    const uniqueSet = new Set();
    const result = [];

    for (const item of arr) {
        let isDuplicate = false;
        for (const existingItem of uniqueSet) {
            if (comparator(item, existingItem)) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueSet.add(item);
            result.push(item);
        }
    }

    return result;
};
