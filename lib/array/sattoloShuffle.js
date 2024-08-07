/**
 * Sattolo shuffle (Sattolo 洗牌算法）
 * Sattolo's algorithm is a shuffling algorithm that differs slightly from the standard Fisher-Yates (or Durstenfeld) shuffling algorithm.
 * @author sikamedia <sikamedia.possu@gmail.com>
 * @category array
 * @alias yd_array_sattoloShuffle
 * @param {Array} array 数组
 * @returns {Array} Return the array which is a random permutation.
 * @summary
 * 1. To generate a random permutation where no element remains in its original position.
 * 2. To create a random cyclic permutation (where each element moves to a new position).
 * @example
 * yd_array_sattoloShuffle([1, 2, 3, 4, 5]);
 * return (result): [5, 1, 4, 2, 3]
 */
export default (array = []) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
