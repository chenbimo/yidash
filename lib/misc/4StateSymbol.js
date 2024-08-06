/**
 * 返回信息、成功、警告、错误四种状态符号
 * @alias yd_misc_4StateSymbol
 * @category misc
 * @param {string} state 状态值
 * @returns {string} 状态符号
 * @author 陈随易 <https://chensuiyi.me>
 * @example  yd_misc_4StateSymbol('success') // '√'
 */
export default (state) => {
    const obj = {
        info: 'i',
        success: '√',
        warn: '‼',
        error: '×'
    };

    return obj[state];
};
