/**
 * 判断是否是手机号
 * @author 杜同学 <https://github.com/duweikang>
 * @category 判断
 * @param {any} value 任意值
 * @returns {Boolean} 返回是否是手机号
 */
export default (value) => {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(value);
};
