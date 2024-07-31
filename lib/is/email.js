/**
 * @description 判断
 * @author grantguo  <https://github.com/ForeverGuo>
 * @date 2024-07-30 18:13:35
 * @param {any} value 任意值
 * @return { Boolean } 返回是否是有效邮箱
 */
export default (value) => {
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(value);
};
