/**
 * 获取参数按小写排序拼接
 * @alias yd_url_paramsSort
 * @category url
 * @param {object} obj 对象数据
 * @returns {string} 返回自然顺序拼接后的字符串
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_url_paramsSort({a:1,b:2,c:3}) // a=1&b=2&c=3
 */
export default (obj) => {
    const keys = Object.keys(obj).sort();
    const newArgs = keys
        .map((key) => {
            return `${key.toLowerCase()}=${obj[key]}`;
        })
        .join('&');

    return newArgs;
};
