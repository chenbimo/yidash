import { createHash } from 'node:crypto';
/**
 * @alias yd_crypto_md5
 * @category crypto
 * @param {string} data 加密数据
 * @param {string} encoding 输出编码
 * @returns {string} 返回加密结果
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_crypto_md5()
 */
export default (data, encoding = 'hex') => {
    const result = createHash('md5').update(data).digest(encoding);
    return result;
};
