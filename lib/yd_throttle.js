
/**
 * 节流函数
 * @param {Function} fn 被节流的函数
 * @param {number} delay 节流时间
 * @author 楠木 <157884200@qq.com> <https://github.com/nanmu-self>
 * @return {Function}
 */
export function throttle(fn, delay) {
    let timer = null;
    return function () {
      if (timer) return;
      timer = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    };
  }
