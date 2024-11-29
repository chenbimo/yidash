import { webcrypto as crypto } from 'node:crypto';
const POOL_SIZE_MULTIPLIER = 128;
// 去掉了-和_，更好复制
const urlAlphabet = 'useandom26T198340PX75pxJACKVERYMINDBUSHWOLFGQZbfghjklqvwyzrict';
let pool, poolOffset;
function fillPool(bytes) {
    if (!pool || pool.length < bytes) {
        pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
        crypto.getRandomValues(pool);
        poolOffset = 0;
    } else if (poolOffset + bytes > pool.length) {
        crypto.getRandomValues(pool);
        poolOffset = 0;
    }
    poolOffset += bytes;
}

/**
 * @alias yd_crypto_nanoid_node
 * @category number
 * @param {number} size 随机支付长度
 * @returns {string} 返回唯一字符
 * @author https://github.com/ai/nanoid
 * @example yd_crypto_nanoid_node() // duuiauf8827ad8888adfaf
 */
export default (size = 21) => {
    fillPool((size -= 0));
    let id = '';
    for (let i = poolOffset - size; i < poolOffset; i++) {
        id += urlAlphabet[pool[i] & 63];
    }
    return id;
};
