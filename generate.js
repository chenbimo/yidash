import { readdirSync, writeFileSync, statSync } from 'node:fs';
import { basename, resolve } from 'node:path';
const dirs = readdirSync('./lib');
const fileData = [];
const libNames = [];
dirs.forEach((dir) => {
    const files = readdirSync(resolve('lib', dir));
    files.forEach((file) => {
        const stat = statSync(resolve('lib', dir, file));
        if (stat.isFile() && file.endsWith('.js')) {
            let fileName = basename(file, '.js');
            libNames.push(`${fileName}`);
            fileData.push(`export { default as yd_${dir}_${fileName} } from './lib/${dir}/${file}';\r\n`);
        } else {
            console.log(`${dir}/${file}不是一个函数文件`);
        }
    });
});
writeFileSync('./index.js', fileData.join(''));
writeFileSync('./yidashLibNames.js', `export const yidashLibNames = ${JSON.stringify(libNames)}`);
console.log('数据生成完毕');
