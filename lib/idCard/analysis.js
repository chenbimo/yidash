const checkIDCardValidity = (idCard) => {
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    const sum = idCard
        .slice(0, 17)
        .split('')
        .reduce((acc, num, index) => acc + num * factor[index], 0);
    const mod = sum % 11;
    return parityBit[mod] === idCard.slice(17).toUpperCase();
};

/**
 * 对身份证解析
 * @author XiaoXinYo
 * @category 字符串
 * @param {String} idCard 身份证
 * @returns {Object} 返回解析对象,areaCode(地区码),birthDate(出生日期),gender(性别),isValid(是否有效)
 */

export default (idCard) => {
    const areaCode = idCard.slice(0, 6);
    const birthDate = idCard.slice(6, 14);
    const sequenceCode = idCard.slice(14, 17);

    const year = birthDate.slice(0, 4);
    const month = birthDate.slice(4, 6);
    const day = birthDate.slice(6, 8);
    const birthDateFormatted = `${year}-${month}-${day}`;

    const gender = parseInt(sequenceCode) % 2 === 0 ? 'Female' : 'Male';

    const isValid = checkIDCardValidity(idCard);

    return {
        areaCode,
        birthDate: birthDateFormatted,
        gender,
        isValid
    };
};
