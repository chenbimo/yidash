/**
 * 从路径中截取文件信息
 * @author wzskyline
 * @category file
 * @alias fileInfo
 * @param {String} path 路径参数
 * @returns {Object} 文件的信息
 * @example  fileInfo('/path/to/file.png') -> {name: 'file', type: 'png', fullName: 'file.png'}
 */
export default (path) => {
  return {
    name: path.replace(/(.*\/)*([^.]+).*/gi, "$2"),
    type: path.replace(/.+\./, "").toLowerCase(), 
    fullName: path.split("/").pop()
  };
};
