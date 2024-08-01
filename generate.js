import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { ensureFileSync, moveSync } from 'fs-extra/esm';

const dirPath = './lib';
const testPath = './test';
const testPendPath = './testPend';
const fileData = [];
const libNames = [];
const dirNames = [];

// 自动生成导出和单文件
readdirSync(dirPath).forEach((dir) => {
    dirNames.push(dir);
    const files = readdirSync(resolve(dirPath, dir));
    files.forEach((file) => {
        const stat = statSync(resolve(dirPath, dir, file));
        if (stat.isFile() && file.endsWith('.js')) {
            const fileName = basename(file, '.js');
            const testFilePath = resolve('test', dir, `${fileName}.test.js`);
            libNames.push(`yd_${dir}_${fileName}`);
            fileData.push(`export { default as yd_${dir}_${fileName} } from './lib/${dir}/${file}';\r\n`);
            ensureFileSync(testFilePath);
            const testFileData = readFileSync(testFilePath, { encoding: 'utf8' });
            if (!testFileData) {
                writeFileSync(
                    testFilePath,
                    `import { describe, it, expect } from 'vitest';
import yd_${dir}_${fileName} from '../../lib/${dir}/${fileName}.js';

describe('yd_${dir}_${fileName}', () => {
    it('默认单测', () => {
        expect(true).toBe(true);
    });
});`,
                )
            }
        }
        else {
            console.log(`${dir}/${file}不是一个函数文件`);
        }
    });
})

// 没有匹配的函数测试用例放到独立文件中
readdirSync(testPath).forEach((dir) => {
    const files = readdirSync(resolve(testPath, dir));
    files.forEach((file) => {
        const fileName = basename(file, '.test.js');
        if (libNames.includes(`yd_${dir}_${fileName}`) === false) {
            moveSync(resolve(testPath, dir, file), resolve(testPendPath, dir, file));
        }
    });
})
writeFileSync('./index.js', fileData.join(''));
writeFileSync('./yidashLibNames.js', `export const yidashLibNames = ${JSON.stringify(libNames)}`);
console.log('数据生成完毕');
