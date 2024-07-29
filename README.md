# yidash（易大师）一万个JavaScript实用方法库

`警告⚠️`：未发布v2.0.0之前，均为不稳定版本，慎用！！！

![logo](https://static.yicode.tech/logo/yidash-logo.png)

## 安装

```bash
npm install yidash
# 或
pnpm add yidash
```

## 使用

### import 方式

```javascript
import { yd_tree_array2Tree, yd_regexp_trainNumber, yd_number_validNumber } from 'yidash';
console.dir(
    yd_tree_array2Tree([
        { id: 1, pid: 0 },
        { id: 2, pid: 1 },
        { id: 3, pid: 2 }
    ])
);
console.dir(yd_regexp_trainNumber);
const validNumber = yd_number_validNumber();
console.log(validNumber(1.111)); // 1.11
console.log(validNumber(1.571333)); // 1.57
console.log(validNumber('1..221333')); // 1.57
console.log(validNumber('1.2213.33')); // 1.57
console.log(validNumber('1.')); // 1.
console.log(validNumber('1.2')); // 1.20
console.log(validNumber('1.2.')); // 1.20
```

## 文档

[yidash 在线文档地址](https://yidash.dev)

## 待办

-   根据某个一位数组的值，排序另外一个数组
-   四则运算正则

## 仓库

> [github https://github.com/chenbimo/yidash](https://github.com/chenbimo/yidash)
