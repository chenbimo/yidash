/**
 * 文件转Base64 DataURL
 * @alias yd_file_fileToDataURL
 * @category file
 * @param {object} object 文件或者blob对象
 * @param {Function} callback 回调函数
 * @author wzskyline
 * @example  yd_file_fileToDataURL(file,()=>{})
 */
export default (object, callback) => {
    const freader = new FileReader();
    freader.readAsDataURL(object);
    freader.onload = function (e) {
        callback(e.target.result);
    };
};
