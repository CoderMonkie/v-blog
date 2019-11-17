# 将`VuePress`建立的博客部署到GitHub或Gitee上

在上一篇中，我们详细介绍了如何利用`VuePress`搭建起个人博客系统，但这只是在本地debug启动的，接下来，我们把它部署到`Github`网站。

- 在`config.js`中配置`base`

  ```js
    base: '/v-blog/',
  ```
  `v-blog`是我Github上的仓库名

- 编写自动化脚本

  在根目录`/v-blog/`下我们需要编写两个脚本

  因为写在一个脚本里话编译完会直接退出，  
  所以把编译的命令单独放在另外一个脚本文件里调就可以了

  - build.bat
    ```bat
    @echo off
    vuepress build docs
    ```

  - deploy.bat
    ```bat
    @echo off

    echo building...
    call build.bat
    echo building-complete.

    cd docs/.vuepress/dist
    git init
    git add -A
    git commit -m 'auto-deploy'
    git remote add origin https://github.com/CoderMonkie/v-blog.git
    git pull
    git push --force origin HEAD:gh-pages

    REM To delete the dist folder
    cd ..
    echo delete-directory: "%cd%/dist"
    rmdir /s /q "%cd%/dist"
    cd..
    cd..
    echo Auto-Deploy-Complete!
    pause
    ```

  然后，只要双击执行`depploy.bat`就可以。  
  或者配置到`package.json`的`scripts`中。
  ```json
  "scripts": {
    "deploy": "deploy.bat"
  }
  ```
  ```bat
  npm run deploy
  ```

  编译完成提及到远程的时候，会提示输入用户名密码。  
  (或者保存登录权限信息使其静默推送)

- GitHub中本项目的`setting`下确认

  我们在push时设为推送到`gh-pages`分支，  
  此时，`v-blog` -- `setting`下的`GitHub Pages`设置，  
  应该为`gh-pages`选中状态，不是的话改为`gh-pages`

  这样就完成了。如果`GitHub Pages`设置页显示：
  ```
  Your site is published at https://codermonkie.github.io/v-blog/
  ```
  那么说明网站发布了，可以查看。
  ```
  Your site is ready to be published at https://codermonkie.github.io/v-blog/.
  ```
  那么说明`GitHub`还没有完成给你发布，访问的话会是404，*等待吧。*

---

  (深夜)更新：已经好了[v-blog](https://codermonkie.github.io/v-blog/)  
  在`GitHub Pages`/`source`的下拉框里切换了几次，不经意间发现已经发布了。

---

### 补充：

补两张图，看起来能更简明，直截了当。

- GitHub

  在【Setting -- GitHub Pages】的Source的下拉框中选择要使用的分支  
  （也可以branch/docs文件夹，不过我们VuePress生成的博客嘛直接用分支了）
  ![GitHub Pages](https://s2.ax1x.com/2019/11/17/MrO6RH.png)

- Gitee

  在【服务 -- Gitee Pages】点【启动】
  ![Gitee Pages](https://s2.ax1x.com/2019/11/17/MrOsiD.png)

  更新网站的话静态文件推送后要点【更新】
  ![Gitee Pages](https://s2.ax1x.com/2019/11/17/MrOczd.png)

---

### 如果是要将博客部署到Gitee：

除了我们可以同时提交到两个远程（GitHub和Gitee仓库），   
[关联多个远程仓库，实现一次push多站提交](https://gitee.com/coder-monkey/JS-Corner/tree/master/JS-Corner-07)   
也可以在同一个工程文件里实现两个远程仓库的部署。

将上面给出的脚本`deploy.bat`，另存一份`deploy-gitee.bat`,  
修改一下，主要有两处：
- 远程地址（github -> gitee 的地址）
- 提交到的远程分支名（gh-pages -> v-blog-pages）  

```bat
@echo off

echo building...
call build.bat
echo building-complete.

cd docs/.vuepress/dist
git init
git remote add origin https://gitee.com/coder-monkey/v-blog.git
git add -A
git commit -m 'auto-deploy'
git pull
git push --force origin HEAD:v-blog-pages

REM To delete the dist folder
cd ..
echo delete-directory: "%cd%/dist"
rmdir /s /q "%cd%/dist"
cd..
cd..
echo Auto-Deploy-Complete!
pause
```

`package.json`里加`scripts`一个命令
```json
"scripts": {
  "deploy-gitee": "deploy-gitee.bat"
}
```

双击执行`deploy-gitee.bat`或以下：
```bat
npm run deploy-gitee
```

再稍微动动手脚本稍作修改就可以实现一次命令多个远程部署了~

---

> `auto-deploy.bat`最终版：

```bat
@echo off

echo building...
call build.bat
echo building-complete.

cd docs/.vuepress/dist

git init
git config user.name maonianyou
git config user.email maonianyou@foxmail.com
git add -A
git commit -m "%date% %time% auto-deploy"
REM 静默推送的话可在地址里填入username和password,如
REM git remote add origin https://username:password@gitee.com/username/repo.git
git remote add origin https://gitee.com/coder-monkey/v-blog.git
git pull
git push --force origin HEAD:v-blog-pages
echo "Gitee Pages Deploy Complete!"

REM 部署完上面的 Gitee Pages
REM 需要删除 .git 文件夹
REM 以备部署 GitHub Pages 再次初始化时用
rmdir /s /q "%cd%/.git"

git init
git config user.name maonianyou
git config user.email maonianyou@gmail.com
git add -A
git commit -m "%date% %time% auto-deploy"
REM 静默推送的话可在地址里填入username和password,如
REM git remote add origin https://username:password@github.com/username/repo.git
git remote add origin https://github.com/CoderMonkie/v-blog.git
git pull
git push --force origin HEAD:gh-pages
echo "GitHub Pages Deploy Complete!"

REM To delete the dist folder
cd ..
echo delete-directory: "%cd%/dist"
rmdir /s /q "%cd%/dist"
cd..
cd..
echo Auto-Deploy-Complete!
pause
```

```json
  "scripts: {
    "deploy": "auto-deploy.bat"
  }
```

```cmd
npm run deploy
```

---

> 继续改进

- `package.json`/`scripts`
  加一条，执行`git push`和`auto-deploy.bat`  
  这样推送加部署就一口气完成啦

- 使用`netlify`或者`travis-ci`这样的工具  
  `GitHub`的`WebHook`也要了解一下

更多好玩的，赶快来探索吧~
