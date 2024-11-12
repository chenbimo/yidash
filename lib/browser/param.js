
function cleanArray(actual) {
    const newArray = []
    for (let i = 0; i < actual.length; i++) {
        if (actual[i]) {
            newArray.push(actual[i])
        }
    }
    return newArray
}

/**
 * get请求对象转换地址栏参数
 * @author 王勇 <https://github.com/wangyong1997>
 * @category browser
 * @alias yd_browser_param
 * @param {Object} json对象
 * @returns {String} 处理后结果
 * @example  yd_browser_param({name:'张三', age:18}) -> name=%E5%BC%A0%E4%B8%89&age=18
 */
export default (json) => {
    if (!json) return ''
    return cleanArray(
        Object.keys(json).map(key => {
            if (json[key] === undefined) return ''
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
        })
    ).join('&')
}
  