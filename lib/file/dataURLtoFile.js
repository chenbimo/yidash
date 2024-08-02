/**
 * Base64 DataURL 转 文件
 * @author wzskyline
 * @category file
 * @alias yd_file_dataURLtoFile
 * @param {Object} dataurl Base64 DataURL  
 * @param {Function} callback 回调函数 
 * @example  yd_file_dataURLtoFile('base64.....')  -> File
 */
export default (dataurl, filename="filename") => {
  let arr = dataurl.split(","),
  mime = arr[0].match(/:(.*?);/)[1],
  bstr = atob(arr[1]),
  n = bstr.length,
  u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};
  