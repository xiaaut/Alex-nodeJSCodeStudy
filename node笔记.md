# Alex-nodeJS学习笔记

## 读写文件的方法

```javascript
import { readFile, writeFile, appendFile } from 'node:fs/promises';

const data = await readFile('./data.json', 'utf8');

// await writeFile("./data.json", "alex-john", "utf8");

await appendFile('./data.json', 'alex-john', 'utf8');

console.log(data);
```

在终端运行文件： node  main.js

![](node笔记/image-20251025220850181.png)







## 如何修改 npm 为 pnpm

检查当前 npm 的版本

```
npm -v
```

更改 npm 的镜像源

```
npm config set registry https://registry.npmmirror.com

# 检验是否成功的代码
npm config get registry
# 输出应为：https://registry.npmmirror.com
```

全局安装 pnpm

```
npm install pnpm -g

pnpm -v
```

# env配置文件

如何使用.env配置文件

需要通过安装包  pnpm add @dotenvx/dotenvx

之后再package.json 文件中添加如下代码：

```
"scripts": {
    "dev": "dotenvx run -- node server.js"
  },
```

# sequelize

`sequelize` 是一个基于 Node.js 的 ORM（对象关系映射）工具，它允许你通过 JavaScript/TypeScript 代码操作关系型数据库（如 MySQL、PostgreSQL、SQLite、MSSQL 等），无需直接编写 SQL 语句，而是通过面向对象的方式操作数据。

pnpm add sequelize

pnpm add pg pg-hstore



