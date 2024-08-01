/**
 * 获取url参数
 * @author 楠木 <157884200@qq.com> <https://github.com/nanmu-self>
 * @category browser
 * @param {string} url 要解析的URL
 * @returns {object} 包含所有查询参数的对象
 * @summary 这个函数使用了URL和URLSearchParams接口，解析URL并返回一个包含所有查询参数的对象。
 * 你可以将这个函数用于任何需要解析URL参数的场景。
 */


export default (url) =>{
    const params = {};
    const parser = new URL(url);
    const queryString = parser.search;
    const urlParams = new URLSearchParams(queryString);
    
    urlParams.forEach((value, key) => {
        params[key] = value;
    });
    
    return params;
}