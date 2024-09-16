/**
 * 应用 viewTransition api
 * @alias yd_browser_viewTransition
 * @category browser
 * @param {any} fn 用于触发过渡的函数
 * @author imddc https://github.com/imddc
 * @summary 应用场景：使用viewTransition进行视图过渡
 * @example yd_browser_viewTransition()
 */
export default (fn) => {
    const isSupport = document !== undefined && 'startViewTransition' in document;
    if (!isSupport) {
        console.warn('not supported view transition in your broswer');
        return;
    }

    let promiseResolve;
    let promiseReject;

    const promise = new Promise((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
    });

    const transition = document.startViewTransition(() => {
        try {
            fn();
            promiseResolve();
        } catch (e) {
            console.error(e);
            promiseReject();
        }
        return promise;
    });

    transition.finished.then(() => {
        promiseResolve = undefined;
        promiseReject = undefined;
    });
};
