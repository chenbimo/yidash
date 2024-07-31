/**
 * 火车车次正则
 * @author 陈随易 <https://chensuiyi.me>
 * @category 正则
 * @returns {RegExp} 返回火车车次正则
 * @summary /^[GCDZTSPKXLY1-9]\d{1,4}$/
 */
export default () => {
    return /^[GCDZTSPKXLY1-9]\d{1,4}$/;
};
