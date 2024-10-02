/**
 * 计算机存储单位互相转换
 * @alias yd_unit_byteSize
 * @category unit
 * @param {number} value 大小值
 * @param {string} fromUnit 大小单位
 * @param {string} toUnit 转换单位
 * @returns {string} 格式化后的文件大小，包含单位
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_unit_byteSize()
 */
export default (value, fromUnit, toUnit) => {
    const units = ['b', 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const bitUnits = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];

    let fromIndex = units.indexOf(fromUnit);
    let toIndex = units.indexOf(toUnit);

    if (fromIndex === -1) fromIndex = bitUnits.indexOf(fromUnit);
    if (toIndex === -1) toIndex = bitUnits.indexOf(toUnit);

    if (fromIndex === -1 || toIndex === -1) {
        throw new Error('无效的单位');
    }

    const bitsToBytesOffset = fromUnit === 'b' ? -1 : 0;
    const bytesToBitsOffset = toUnit === 'b' ? 1 : 0;

    const totalOffset = toIndex - fromIndex + bitsToBytesOffset + bytesToBitsOffset;
    const result = value * Math.pow(1024, -totalOffset);

    return parseFloat(result.toFixed(2));
};
