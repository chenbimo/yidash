/**
 * 将数字转为32位 bit 数组
 * @param {Number} num
 * @returns {[0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1]}
 */
export const yd_number_to_bits = (num) => {
    const bits = new Array(32);
    for (let i = 31; i >= 0; i--) bits[i] = (num >> i) & 1;
    return bits;
}
