/**
 * 延迟函数
 * @author 陈随易 <https://chensuiyi.me>
 * @category 帮助
 * @param {Number} wait 等待时间
 * @returns {Promise} 返回延迟后的Promise
 */
export const yd_helper_delay = (wait) => {
    return new Promise((resolve) => {
        setTimeout(resolve, wait);
    });
};
