/**
 * 浏览器禁止切换页面
 * @author Nil <https://github.com/Nil-nil-zero>
 * @category 浏览器
 * @alias yd_array_uniqWith
 * @param {Function} 函数
 * @param {number} number 切换次数，默认是3次
 * @param {string} msg 切换次数，默认提示内容“切换次数超过限制”
 * @summary 应用场景：线上考试场景
 */

export default (number, msg) => {
    window.onblur = function () {
        let i = number || 3;
        i--
        if (i == 0) {
            const res = msg || '切换次数超过限制'
            alert(res);
        }
    };
    return window.onblur;
}
