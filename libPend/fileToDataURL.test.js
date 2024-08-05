import { describe, it, expect } from 'vitest';
import yd_file_fileToDataURL from '../lib/file/fileToDataURL.js';

describe('yd_file_fileToDataURL', () => {
    it('将文件转换为base64字符串', () => {
        // 模拟一个文件对象
        const file = new File(['Hello, World!'], 'test.txt', { type: 'text/plain' });
        // 调用文件转换为base64的函数
        yd_file_fileToDataURL(file, function (base64String) {
            expect(base64String).not.toBe('');
        });
    });
});
