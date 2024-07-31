/**
 * @description 深度克隆
 * @author alvis <https://alvis.org.cn>
 * @category 对象
 * @param {any} value 需要克隆的值
 * @returns 
 */
export function yd_object_deepClone(value) {
  // 缓存
  const cache = new Map()

  function _deepClone(value) {
    // 判断是否是对象，不是对象直接返回对应得值
    if (typeof value !== 'object' || value === null) {
      return value
    }
    // 查看缓存中是否存在。缓存中存在，直接在缓存中取
    if (cache.has(value)) {
      return cache.get(value)
    }
    // 区分对象和数组
    const result = Array.isArray(value) ? [] : {}
    // 设置缓存
    cache.set(value, result)
    for (const key in value) {
      result[key] = _deepClone(value[key])
    }
    return result
  }
  return _deepClone(value)
}