/**
 * 判断是否是邮箱
 * @author grantguo  <https://github.com/ForeverGuo>
 * @category is
 * @alias yd_is_email
 * @param {any} value 任意值
 * @return { Boolean } 返回是否是有效邮箱
 */
export default (value) => {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(value);
};
