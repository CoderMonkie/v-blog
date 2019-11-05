# 关于 npm 包管理器最常用的内容都在这儿了

---

[*Nodejs*](https://nodejs.org/zh-cn/)的诞生，给前端开发世界带来了翻天覆地的变化。  
前端工程化，各种工具，以及向后端的能力扩展。

车子离不开轮子，node（前后端）开发离不开*npm*这个包管理工具，在这总结下常用配套工具：
- [npm](#npm)
- [nrm](#nrm)
- [nvm](#nvm)

---

## [npm](#npm)

安装*Nodejs*会自带 *npm*，这个默认的包管理器。

常用的基本命令有
- 初始化，建立工程（主要体现在生成一个*package.json*的文件）
```
npm init
```

- 安装包
  如果是*clone*一个已有工程，下到本地第一步自然是安装所有的依赖包了。
  ```
  npm install
  // 简写：
  npm i
  ```
  如果要全局安装一个包，
  ```
  npm install -global <packagename>
  // 或简写
  npm i -g <packagename>
  ```
  如果是局部安装，只在本项目工程内使用，有*开发依赖*与*生产依赖*之分  
  - 生产依赖（安装完会被添加到*package.json*文件的*dependencies*）
  ```
  npm install --save <packagename>
  // 或简写：
  npm i -S <packagename>
  ```
  - 开发依赖（安装完会被添加到*package.json*文件的*devDependencies*）
  ```
  npm install --save-dev <packagename>
  // 或简写：
  npm i -D <packagename>
  ```

- 执行命令
除了初始化和安装包，最常用的要数`npm run <commandname>`了。  
即执行命令任务。

  都可以执行什么呢？  
  可执行的命令任务都配置在了*package.json*文件的`scripts`下。  
  初始化完成后往往都是有一个默认的`test`命令。  
  类似的，我们可以在这里添加自己的任务内容。

  比如：
  ```
  "scripts": {
    "start": "webpack-dev-server --open",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js",
  },
  ```
  以上配置中，键值对中的键名自己随便起，后面的值，就根据你装的对应的包来了，  
  如*webpack-dev-server*就是方便前端开发用的模拟接口用的服务器，  
  *eslint*是语法检查排错的工具。  
  在后面的就是传的参数了。

  特别的一点是，`npm start`是默认就有的一个命令，
  其实就是它可以省略`run`而已，  
  执行的还是`npm run start`。

- 补充：
  国内访问国外的npm服务器来安装的话，网速缓慢，经常会出现安装失败的情况。  
  往往都是用[淘宝 NPM 镜像](http://npm.taobao.org/)`cnpm`来安装。  

  - 首先全局安装*cnpm*
  ```
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```
  - 这样就可以使用`cnpm`来安装各种依赖包了  
   只是把`npm`换成`cnpm`而已，其它install用法完全一样。
   ```
   cnpm install <packagename>
   ```

   这样，包安装就快多了，基本不可能安装失败。  
   另外，不能一个包用npm装，一个包就cnpm装，反正我试的时候要删掉`node_modules`文件夹重新用同一源安装。

---

## [nrm](#nrm)

上面说到了`cnpm`，改用访问淘宝NPM镜像，这是一种方式。

还有很多另外的源，nrm是统一管理的工具，可以一键切换npm包安装源。

- 全局安装*nrm*
  ```
  npm install -g nrm
  ```

- 查看源
  ```bash
  nrm ls
  ```
  显示源列表：
  ```
  * npm ---- https://registry.npmjs.org/
    cnpm --- http://r.cnpmjs.org/
    taobao - https://registry.npm.taobao.org/
    nj ----- https://registry.nodejitsu.com/
    npmMirror  https://skimdb.npmjs.com/registry/
    edunpm - http://registry.enpmjs.org/
  ```
  带星号`*`的就是当前使用的源，也可以用一下命令查看：
  ```
  nrm current

  // => 显示 npm
  ```

- 切换源
  ```
  nrm use <originname>
  ```
  如：
  ```
  nrm use cnpm
  
  // 显示：
  Registry has been set to: http://r.cnpmjs.org/
  ```

  ```
  nrm current

  // 显示：
  cnpm
  ```

> 注意：  
>     这里的*cnpm*与上面提到的*cnpm*不是一回事儿。  

这里的cnpm只是给npm切换源，上面的cnpm是单独一个安装工具，除了没有`npm publish`,其它都跟npm一样。

---

## [nvm](#nvm)

> 安装了*node*，就是此时最新的版本。  
> 如果要参与的是已有老项目，可能会版本不匹配，环境有问题，  
> 这时候要重新安装一个旧版本的吗？  
> 再做新项目的时候又再卸载重新安装新版本吗？

那样多麻烦。当然有简便的办法了，那就是`nvm`，node多版本管理工具。

- 下载并安装
  [nvm-windows released-in-Github](https://github.com/coreybutler/nvm-windows/releases)

- 查看已安装node版本
  ```
  nvm ls

  // 显示：
  * 10.15.3 (Currently using 64-bit executable)
    8.15.1
  ```
  即当前使用版本为*10.15.3*，本机安装了两个版本的node了，另一个是*8.15.1*  
  可以通过`nvm use [version]`来切换版本

- 切换版本
  ```
  nvm use 8.15.1
  
  // 显示：
  Now using node v8.15.1 (64-bit)
  ```
  很显然，安装的有点旧了，最新的LTS版本都到*12.13.0*了，  
  怎么安装最新版呢？

  - 添加新的node版本
    查看已发布的可用版本：

  ```
  nvm ls avilable
  ```

  输出显示：

  ```
  |   CURRENT    |     LTS      |  OLD STABLE  | OLD UNSTABLE |
  |--------------|--------------|--------------|--------------|
  |    13.0.1    |   12.13.0    |   0.12.18    |   0.11.16    |
  |    13.0.0    |   10.17.0    |   0.12.17    |   0.11.15    |
  |   12.12.0    |   10.16.3    |   0.12.16    |   0.11.14    |
  |   12.11.1    |   10.16.2    |   0.12.15    |   0.11.13    |
  |   12.11.0    |   10.16.1    |   0.12.14    |   0.11.12    |
  |   12.10.0    |   10.16.0    |   0.12.13    |   0.11.11    |
  |    12.9.1    |   10.15.3    |   0.12.12    |   0.11.10    |
  |    12.9.0    |   10.15.2    |   0.12.11    |    0.11.9    |
  |    12.8.1    |   10.15.1    |   0.12.10    |    0.11.8    |
  |    12.8.0    |   10.15.0    |    0.12.9    |    0.11.7    |
  |    12.7.0    |   10.14.2    |    0.12.8    |    0.11.6    |
  |    12.6.0    |   10.14.1    |    0.12.7    |    0.11.5    |
  |    12.5.0    |   10.14.0    |    0.12.6    |    0.11.4    |
  |    12.4.0    |   10.13.0    |    0.12.5    |    0.11.3    |
  |    12.3.1    |    8.16.2    |    0.12.4    |    0.11.2    |
  |    12.3.0    |    8.16.1    |    0.12.3    |    0.11.1    |
  |    12.2.0    |    8.16.0    |    0.12.2    |    0.11.0    |
  |    12.1.0    |    8.15.1    |    0.12.1    |    0.9.12    |
  |    12.0.0    |    8.15.0    |    0.12.0    |    0.9.11    |
  |   11.15.0    |    8.14.1    |   0.10.48    |    0.9.10    |
  
  This is a partial list. For a complete list, visit https://nodejs.org/download/  release
  ```

  我们来安装一下*12.13.0*吧

  ```
  nvm install 12.13.0    
  ```

  输出显示：

  ```
  Downloading node.js version 12.13.0 (64-bit)...
  Complete
  Creating C:\nvm\temp
  
  Downloading npm version 6.12.0... Complete
  Installing npm v6.12.0...
  
  Installation complete. If you want to use this version, type
  
  nvm use 12.13.0
  ```
  告诉我们安装完成，如果要使用这个版本的话就敲入这个命令（*nvm use 12.13.0*）。  
  你会发现，安装最新*node*的时候，*npm*也是配套更新的。

---

## 其实还有一个：[`npx`](#其实还有一个npx)

它的主要特点是，可以让我们直接使用一些包的命令，  
不用关心有没有已经安装，因为它检查到没有就会先来安装。  

还可以配参数来指定强制安装最新还是使用本地已有。

另外就是临时安装，用完即删，下次npx的时候还会安装。

它还提供类似*nvm*的功能，供临时切换*node*版本。

这个我倒是没怎么使用。

与*npm*相对的还有一个`yarn`，在下一篇里再做介绍和总结吧。
