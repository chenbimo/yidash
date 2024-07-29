# yidash（易大师）一万个JavaScript实用方法库

`警告⚠️`：未发布 **v2.0.0** 之前，均为不稳定版本，慎用！！！

![logo](https://static.yicode.tech/logo/yidash-logo.png)

## 官网

[文档官网 https://yidash.dev](https://yidash.dev)

## 仓库

> [github https://github.com/chenbimo/yidash](https://github.com/chenbimo/yidash)

## 安装

```bash
npm install yidash
# 或
pnpm add yidash
```

## 使用

`注意⚠️`：本项目暂时只提供 `ESM` 包。

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

## 贡献和福利

## 代码贡献步骤

1. 访问本仓库。
2. fork本仓库。
3. 拉取fork后的仓库。
4. 修改代码。
5. push代码。
6. 发起pull request。
7. 等待笔者验证与合并。

## 代码提交格式

`提交主题: 提交具体内容`

举例：

-   `完善功能: yd_is_number函数增加判断机制`
-   `代码重构: yd_number_thousands重新设计`
-   `新增函数: 增加yd_is_array函数`

### 贡献者福利

1. 增加开源参与度。
2. 体会开源的乐趣。
3. 为自己的职业经历增加一个彩蛋。
4. 额外获得VSCode扩展fnMap永久注册码一枚。
