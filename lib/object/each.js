/**
 * 遍历对象的所有可枚举属性，并执行回调函数
 * @author Amonduul <https://amonduul.vercel.app>
 * @category array
 * @alias yd_object_each
 * @param  { Object } collection - 要遍历的对象
 * @param  { Function } callback - 为每个属性执行的回调函数，接收三个参数：value, key, collection
 * @returns { undefined }
 */
export default (collection, callback) => {
    if (typeof callback !== 'function') {
        throw new Error('Callback must be a function');
    }

    for (const key in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, key)) {
            callback(collection[key], key, collection);
        }
    }
};
