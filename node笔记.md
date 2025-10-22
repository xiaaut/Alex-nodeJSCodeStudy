# 如何修改 npm 为 pnpm

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
