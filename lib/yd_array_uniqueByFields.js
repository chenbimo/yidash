import { yd_hash_getHashCode } from './yd_hash_getHashCode'
import { yd_object_serialize } from './yd_object_serialize'
/**
* 数组去重
* @author bai.zixv <https://github.com/baizixv>
* @category 数组
* @param {Array} array 对象数组数据 比如, [{id: 1, name: "a"}, {id: 2, name: "b"}, {id: 1, name: "a"}]
* @param {Array} fields 对象数组子元素对象的字段数组, 比如: ['id', 'name']
* @returns {Array} 返回去重后的对象数组
*/
export const yd_array_uniqueByFields = (array, fields) => {
    const uniqueMap = new Map()

    const resultArray = array.filter(item => {
        const uniqueKey = fields.map(field =>
            typeof item[field] === 'object' ? yd_hash_getHashCode(yd_object_serialize(item[field])) : item[field]
        ).join('|')

        if (uniqueMap.has(uniqueKey)) {
            return false
        } else {
            uniqueMap.set(uniqueKey, true)
            return true
        }
    })

    return resultArray
}
