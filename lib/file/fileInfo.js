/**
 * 从路径中截取文件信息
 * @alias yd_file_fileInfo
 * @category file
 * @param {string} path 路径参数
 * @returns {object} 文件的信息
 * @author wzskyline
 * @example  yd_file_fileInfo('/path/to/file.png') -> {name: 'file', type: 'png', fullName: 'file.png'}
 */
export default (path) => {
    return {
        name: path.replace(/(.*\/)*([^.]+).*/g, '$2'),
        type: path.replace(/.+\./, '').toLowerCase(),
        fullName: path.split('/').pop()
    };
};
