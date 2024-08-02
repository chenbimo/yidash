import { describe, it, expect } from 'vitest';
import yd_file_fileInfo from './fileInfo.js';

describe('yd_file_fileInfo', () => {
    it('解析文件路径信息', () => {
        const path = '/path/to/file.txt';
        const result = yd_file_fileInfo(path);

        expect(result).toEqual({
            name: 'file',
            type: 'txt',
            fullName: 'file.txt'
        });
    });

    it('处理没有文件名的路径', () => {
        const path = '/path/to/';
        const result = yd_file_fileInfo(path);

        expect(result).toEqual({
            name: '',
            type: '',
            fullName: ''
        });
    });

    it('处理文件名中包含多个"."的情况', () => {
        const path = '/path/to/file.name.txt';
        const result = yd_file_fileInfo(path);

        expect(result).toEqual({
            name: 'file.name',
            type: 'txt',
            fullName: 'file.name.txt'
        });
    });
});