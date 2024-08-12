/**
 * 根据某个键的值将数组转换为 Map 对象
 * @author Amonduul <https://amonduul.vercel.app>
 * @category array
 * @alias yd_array_toMapByKey
 * @param  { Array } array 数组
 * @param  { any } keyName 键名，确保该键名对应的值是数组项的唯一标识，否则会被覆盖
 * @returns { Map } 返回一个 Map 对
 */
export default (array, keyName) => {
    if (!keyName) {
        throw new Error('keyName is required');
    }
    const map = new Map();
    for (const item of array) {
        // 确保 item 是一个对象且包含 keyName 键
        if (item && typeof item === 'object' && keyName in item) {
            map.set(item[keyName], item);
        }
    }
    return map;
};
