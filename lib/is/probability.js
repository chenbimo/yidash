/**
 * 判断本次指定概率事件是否会发生
 * @author vilan <https://github.com/java6688>
 * @category is
 * @alias yd_is_probability
 * @param {Number} probability 数值
 * @returns {Boolean} 返回概率事件是否发生了
 * @example yd_is_probability(0.1); // 如果随机数小于或等于0.1，则返回true; 否则返回false。
 */
export default (probability) => {

    // 错误处理1：参数类型检查
    if (typeof probability !== 'number') {
        throw new Error('probability must be a number');
    }

    // 错误处理2：概率超出范围
    if (probability < 0 || probability > 1) {
        throw new Error('probability must be between 0 and 1 inclusive.');
    }

    // 概率为0，不可能事件
    if (probability === 0) return false;

    // 概率为1，一定发生事件
    else if (probability === 1) return true;

    // 概率范围正常，生成一个在 0 到 1 之间的随机数：[0, 1)
    const randomValue = Math.random();

    // 随机数小于等于给定的概率，则代表事件发生了
    return randomValue <= probability;

}