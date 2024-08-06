

/**
 * 地址栏参数转换为对象形式
 * @author 王勇 <https://github.com/wangyong1997>
 * @category browser
 * @alias yd_browser_paramToObj
 * @param {String} 字符串url地址后参数
 * @returns {Object} 返回json 对象
 * @example  yd_browser_paramToObj('?name=%E5%BC%A0%E4%B8%89&age=18') -> {name:'张三', age:18}
 */
export default (url) => {
    const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
    if (!search) {
      return {}
    }
    const obj = {}
    const searchArr = search.split('&')
    searchArr.forEach(v => {
      const index = v.indexOf('=')
      if (index !== -1) {
        const name = v.substring(0, index)
        const val = v.substring(index + 1, v.length)
        obj[name] = val
      }
    })
    return obj
  }