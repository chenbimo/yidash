import { readdirSync } from 'node:fs';
const files = readdirSync('./lib', { recursive: true, withFileTypes: true });
let total = 0;
files.forEach((file) => {
    if (file.isFile()) {
        if (file.name.endsWith('.js') && !file.name.endsWith('.test.js')) {
            total += 1;
        }
    }
});
console.log('函数总数：' + total);
