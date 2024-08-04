/**
 * 解析url的query参数
 * @author 舒毅康 <https://github.com/jacksyk>
 * @category url
 * @alias yd_url_parse
 * @param {string} url 传递一个url地址
 * @returns {Object} 返回一个包含所有query参数的对象
 * @summary 这个函数用来解析url参数中所有的query参数
 * @example
 * yd_url_parse("https://example.com/api/data?page=57&limit=28&sort=desc&keyword=random_abc123");
 * 结果：{
 *      page: 57,
 *      limit: 28,
 *      sort: "desc",
 *      keyword: "random_abc123"
 * }
 */

export default function (url) {
    const query = url.split('?')[1];
    if (!query) {
        return {};
    }
    return query.split('&').reduce((obj, item) => {
        const [key, value] = item.split('=');
        obj[key] = value;
        return obj;
    }, {});
}
