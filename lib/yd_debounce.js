
/**
 * 节流函数
 * @param {Function} func 要被防抖的函数
 * @param {number} wait 防抖的时间间隔，单位为毫秒
 * @author 楠木 <157884200@qq.com> <https://github.com/nanmu-self>
 * @return {Function}
 */
export function debounce(func, wait) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, arguments);
      }, wait);
    };
  }
  