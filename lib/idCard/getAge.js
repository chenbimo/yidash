/**
 * @description 根据身份证获取年龄
 * @author grantguo <https://github.com/ForeverGuo>
 * @date 2024-08-03 21:41:24
 * @param { string } card 身份证号
 * @return 返回年龄
 * @alias yd_idCard_getAge
 */
const date = new Date();
export default (card) => {
    // 身份证号码正则表达式（18位）
    const reg = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(([0-2][1-9])|10|30|31)\d{3}[0-9Xx]$/;

    // 检查身份证号码格式
    if (!reg.test(card)) {
        return null;
    }
    // 从身份证号码中提取出生年月
    const year = Number(card.substring(6, 10));
    // 获取当前年份
    const currYear = Number(date.getFullYear());
    return currYear - year;
};
