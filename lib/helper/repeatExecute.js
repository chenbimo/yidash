/**
 * 重复执行函数
 * @alias yd_helper_repeatExecute
 * @category helper
 * @param {Function} fn 获取字段的方式
 * @param {number} times 执行次数
 * @param {number} delay 执行间隔
 * @author imddc <https://github.com/imddc>
 * @example
 * yd_helper_repeatExecute(() => {console.log('execute!')}, 5, 1000)
 * // 打印五次`execute!` 每次间隔1000ms
 */
export default async (fn, times, delay) => {
    if (times === 0) {
        return;
    }

    let counter = 0;
    async function execute() {
        fn();
        counter++;

        if (counter < times) {
            await new Promise((resolve) => {
                setTimeout(resolve, delay);
            });
            await execute();
        }
    }

    await execute();
};
