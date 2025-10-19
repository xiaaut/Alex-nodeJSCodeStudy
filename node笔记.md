# 如何修改npm为pnpm

检查当前npm的版本

```
npm -v
```

更改npm的镜像源

```
npm config set registry https://registry.npmmirror.com

# 检验是否成功的代码
npm config get registry
# 输出应为：https://registry.npmmirror.com
```

全局安装pnpm

```
npm install pnpm -g

pnpm -v
```
