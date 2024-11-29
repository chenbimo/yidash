import { randomInt } from 'node:crypto';

/**
 * 创建时间自增唯一数字ID
 * @alias yd_number_incrTimeID
 * @category number
 * @returns {number} 返回时间自增唯一ID
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_number_incrTimeID() // 1722857347658775189
 */
export default () => {
    const timestamp = Math.floor(Date.now() / 1000);
    const random = randomInt(100000, 999999);
    return Number(`${timestamp}${random}`);
};
