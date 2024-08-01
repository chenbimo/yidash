/**
 * 延迟函数
 * @author 陈随易 <https://chensuiyi.me>
 * @category helper
 * @alias yd_helper_delay
 * @param {Number} wait 等待时间
 * @returns {Promise} 返回延迟后的Promise
 */
export default (wait) => {
    return new Promise((resolve) => {
        setTimeout(resolve, wait);
    });
};
