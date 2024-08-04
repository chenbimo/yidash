/**
 * @description 根据身份证获取年龄
 * @author grantguo <https://github.com/ForeverGuo>
 * @category idCard
 * @alias yd_idCard_getAge
 * @param { string } card 身份证号
 * @return 返回年龄
 * @summary 根据身份证号码获取年龄
 * @example
 * yd_idCard_getAge(card)
 */
const date = new Date();
const convertTo18IDCard = (card) => {
    if (card.length !== 15) {
        return '输入的身份证号码不是15位';
    }

    let id18 = card.substring(0, 6);
    id18 += '19';
    id18 += card.substring(6, 15);

    // 计算校验码
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += id18.charAt(i) * factor[i];
    }
    id18 += checkCode[sum % 11];

    return id18;
};

export default (card) => {
    if (card.length === 15) {
        card = convertTo18IDCard(card);
    }

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
