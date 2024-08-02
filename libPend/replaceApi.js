/**
 *
 * @author alvis <https://alvis.org.cn>
 * @category 帮助
 * @param {String} url 网络请求地址
 * @param  {...any} agrs
 * @returns {String} 替换后的url
 * @description 替换url中的占位符 /api/project/data-image/app/{projectId} => /api/project/data-image/app/123
 */
export default (url, ...agrs) => {
    let index = 0;
    return url.replace(/{(.*?)}/g, (match) => {
        match = agrs[index];
        index++;
        return match;
    });
};
