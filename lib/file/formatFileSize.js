import isNumber from '../is/number.js';

const parseNum = (num) => {
    return parseFloat(num.toFixed(2));
};

/**
 * 格式化文件大小
 * @alias yd_file_formatFileSize
 * @category file
 * @param {number} fileSize 文件大小，以字节为单位
 * @returns {string} 格式化后的文件大小，包含单位
 * @author 黄方明 <https://github.com/hank-open>
 * @example yd_file_formatFileSize(500) => "500 Bytes"
 * @example yd_file_formatFileSize(2048) => "2 KB"
 * @example yd_file_formatFileSize(1048576) => "1 MB"
 * @example yd_file_formatFileSize(1073741824) => "1 GB"
 */
export default (fileSize) => {
    if (!isNumber(fileSize)) {
        throw new Error('fileSize must be a number');
    }
    if (fileSize < 1024) {
        return parseNum(fileSize) + ' Bytes';
    } else if (fileSize < 1024 * 1024) {
        return parseNum(fileSize / 1024) + ' KB';
    } else if (fileSize < 1024 * 1024 * 1024) {
        return parseNum(fileSize / (1024 * 1024)) + ' MB';
    } else {
        return parseNum(fileSize / (1024 * 1024 * 1024)) + ' GB';
    }
};
