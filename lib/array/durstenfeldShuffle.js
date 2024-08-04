/**
 * Durstenfeld shuffle (Durstenfeld 随机洗牌算法）
 * @author sikamedia <sikamedia.possu@gmail.com>
 * @category array
 * @alias yd_array_durstenfeldShuffle
 * @param {Array} array 数组
 * @returns {Array} Return the array in a randomly shuffled order. 返回随机排序后的数组
 */
export default (array = []) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
