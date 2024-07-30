/**
 * 序列化对象
 * @author bai.zixv <https://github.com/baizixv>
 * @category 对象
 * @param {Object} obj 对象
 * @returns {string} 返回对应的序列化值
 */
export const serialize = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return String(obj)
    }
    const keys = Object.keys(obj).sort()
    const result = keys.map(key => `${key}:${serialize(obj[key])}`).join('|')
    return `{${result}}`
}

