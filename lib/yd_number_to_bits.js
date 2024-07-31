/**
 * 将数字转为32位 bit 数组
 * @param {Number} num
 * @param {8|16|32} [length] 比特数组长度 默认`32`位
 * @returns {[0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1, 0|1]}
 */
export const yd_number_to_bits = (num, length = 32) => {
    const bits = new Array(length);
    for (let i = length - 1; i >= 0; i--) bits[i] = (num >> i) & 1;
    return bits;
}
