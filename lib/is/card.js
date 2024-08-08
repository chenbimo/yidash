/**
 * @description 返回是否是有效身份证
 * @author grantguo <https://github.com/ForeverGuo>
 * @category is
 * @alias yd_is_card
 * @param { string } card
 * @return 返回是否是有效身份证
 * @summary 返回是否是有效身份证
 * @example
 * yd_is_card(card)
 * => true or false
 */

export default (card) => {
    let cardNo = card;
    const len = cardNo.length;

    if (len === 15) {
        cardNo = convert15To18(cardNo);
    }
    return validate18IdCard(cardNo);
};

function convert15To18(idCard) {
    if (idCard.length !== 15) {
        return null; // 如果不是15位身份证号码，返回null
    }

    const id17 = idCard.substring(0, 6) + '19' + idCard.substring(6); // 在出生年份前加上"19"
    const power = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
    const checkCode = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; // 校验码对应值
    let sum = 0;

    for (let i = 0; i < 17; i++) {
        sum += Number(id17.charAt(i)) * power[i];
    }

    const mod = sum % 11;
    const checkBit = checkCode[mod];

    return id17 + checkBit; // 返回18位身份证号码
}

function validate18IdCard(idNumber) {
    // 正则表达式匹配身份证号码的规则
    const pattern = /^\d{17}[\dXx]$/;

    if (!pattern.test(idNumber)) {
        return false;
    }

    // 加权因子
    const weightFactor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    // 校验位
    const checkCodeList = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    // 计算校验位
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += Number(idNumber[i]) * weightFactor[i];
    }
    const mod = sum % 11;
    const checkCode = checkCodeList[mod];

    // 校验校验位
    if (idNumber[17].toUpperCase() === checkCode) {
        return true;
    } else {
        return false;
    }
}
