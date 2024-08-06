/**
 * 文件转ArrayBuffer
 * @author cwlwebapp(cwlgoodman@163.com)
 * @category File
 * @alias yd_file_arrayBuffer
 * @param {Object} object 文件或者blob对象
 * @param {Function} callback 回调函数 
 * @example  yd_file_arrayBuffer(file).then((res)=>{}) 
 */
export default (object) => {
     return new Promise((resolve,reject)=>{
        var f = new FileReader();
        f.onload = function (e) {
           resolve(e.target.result)
        }
        f.error=function(error){
            reject(error)
        }
        f.readAsArrayBuffer(object);
     })
    
};
  