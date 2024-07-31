/**
 * @description 根据身份证获取出生年月
 * @author grantguo <https://github.com/ForeverGuo>
 * @date 2024-07-31 18:24:02
 * @param {string} card
 * @return {string} 出生年月 yyyy-dd-mm
*/
export const yd_card_getBirth = (card) => {
  // 身份证号码正则表达式（18位）
  const reg = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(([0-2][1-9])|10|30|31)\d{3}[0-9Xx]$/;

  // 检查身份证号码格式
  if (!reg.test(card)) {
    return null;
  }

  // 从身份证号码中提取出生年月
  const year = card.substring(6, 10);
  const month = card.substring(10, 12);
  const day = card.substring(12, 14);

  return `${year}-${month}-${day}`;
}