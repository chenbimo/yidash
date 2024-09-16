/**
 * 延迟函数
 * @alias yd_helper_delay
 * @category helper
 * @param {number} wait 等待时间
 * @returns {Promise} 返回延迟后的Promise
 * @author 陈随易 <https://chensuiyi.me>
 * @example yd_helper_delay()
 */
export default (wait) => {
    return new Promise((resolve) => {
        setTimeout(resolve, wait);
    });
};
