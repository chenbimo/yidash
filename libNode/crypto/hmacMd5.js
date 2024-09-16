import { createHmac } from 'node:crypto';
/**
 * @alias yd_crypto_hmacMd5
 * @category crypto
 * @param {string} data 加密数据
 * @param {string} key 加密密钥
 * @param {string} encoding 输出编码
 * @returns {string} 返回加密结果
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_crypto_hmacMd5()
 */
export default (data, key, encoding = 'hex') => {
    const result = createHmac('md5', key).update(data).digest(encoding);
    return result;
};
