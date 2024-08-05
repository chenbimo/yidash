/**
 * @description 根据身份证获取性别
 * @author grantguo <https://github.com/ForeverGuo>
 * @category idCard
 * @alias yd_idCard_getSex
 * @param { string } card 身份证号
 * @return 返回性别
 * @summary 根据身份证号码获取性别
 * @example
 * yd_idCard_getSex(card)
 */
export default (card) => {
    const num = Number(card.slice(-2, -1));
    return num % 2 === 0 ? '女性' : '男性';
};
