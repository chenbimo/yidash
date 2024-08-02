/**
 * 文件转Base64 DataURL
 * @author wzskyline
 * @category file
 * @alias fileToDataURL
 * @param {Object} object 文件或者blob对象
 * @param {Function} callback 回调函数 
 * @example  fileToDataURL(file,()=>{}) 
 */
export default (object) => {
    const freader = new FileReader();
    freader.readAsDataURL(object);
    freader.onload = function(e) {
        callback(e.target.result);
    };
};
  