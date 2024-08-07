import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { readJsonSync } from 'fs-extra/esm';

const categories = {};

['lib', 'libNode', 'libBrowser'].forEach((dirPath) => {
    const fileData = [];
    const libNames = [];
    const dirNames = [];

    // 自动生成导出和单文件
    readdirSync(dirPath).forEach((dir) => {
        dirNames.push(dir);
        const metaFile = resolve(dirPath, dir, '_meta.json');
        const metaData = readJsonSync(metaFile);
        categories[dir] = { displayName: metaData.name };
        const files = readdirSync(resolve(dirPath, dir));
        files.forEach((file) => {
            if (file === '_meta.json') return;
            if (file.endsWith('.test.js')) return;
            const stat = statSync(resolve(dirPath, dir, file));
            if (stat.isFile() && file.endsWith('.js')) {
                const fileName = basename(file, '.js');
                const filePath = resolve(dirPath, dir, file);
                libNames.push(`yd_${dir}_${fileName}`);
                fileData.push(
                    //
                    `export { default as yd_${dir}_${fileName} } from './${dirPath}/${dir}/${file}';\r\n`
                );
                // 判断是否有相关标签
                const fileData2 = readFileSync(filePath, { encoding: 'utf8' });
                if (!fileData2.includes('@author')) {
                    console.log(`${filePath} 文件缺少 [作者]`);
                }
                if (!fileData2.includes('@category')) {
                    console.log(`${filePath} 文件缺少 [分类]`);
                }
                if (!fileData2.includes('@alias')) {
                    console.log(`${filePath} 文件缺少 [别名]`);
                }
            } else {
                console.log(`${dir}/${file}不是一个函数文件`);
            }
        });
    });

    writeFileSync(`./${dirPath}.js`, fileData.join(''));
    writeFileSync(`./${dirPath}Names.js`, `export const ${dirPath}Names = ${JSON.stringify(libNames)};`);
    console.log(`${dirPath} 数据生成完毕`);
});
writeFileSync('./categories.json', JSON.stringify(categories));
