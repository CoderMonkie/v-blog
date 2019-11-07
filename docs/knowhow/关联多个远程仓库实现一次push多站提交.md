# 关联多个远程仓库实现一次push多站提交

如果我们有一个Github上的仓库，  
然后在Gitee上建了同名的仓库（没有选择导入仓库），  
想在编辑本地仓库后提交到上面两个远程仓库，怎么做？

---

- 在本地仓库中添加远程

  已有Github，  
  添加Gitee：
  ```
  git remote add origin https://gitee.com/coder-monkey/v-blog.git
  ```

  然后再`git push`就会分别提交到两个远程仓库了。

  Gitee 上由于是空仓库，需要：
  ```bat
  git push --set-upstream origin master
  ```

  如果不是免密提交的话，还会在命令行提示输入用户和密码。  
  (最下面附有解决办法)

- 不用命令，手动编辑`config`也是可以的

  正常`clone`下来仓库的`.git/config`文件会是这样的：

  ```
  [remote "origin"]
      url = https://github.com/CoderMonkie/v-blog.git
      fetch = +refs/heads/*:refs/remotes/origin/*
  [branch "master"]
      remote = origin
      merge = refs/heads/master
  ```

  只需要在`origin`里加上另外一个`Gitee`的地址就可以了

  ```
  [remote "origin"]
      url = https://github.com/CoderMonkie/v-blog.git
      url = https://gitee.com/coder-monkey/v-blog.git
      fetch = +refs/heads/*:refs/remotes/origin/*
  [branch "master"]
      remote = origin
      merge = refs/heads/master
  ```

---

> 如何免密提交到远程：

* 编辑`config`文件的`origin`下的`url`

  - > `https://username:password@github.com/username/repository.git`
   - username就是你账号
   - password写密码
   - project是仓库名

* 另一种方式

  ```cmd
  git config --global credential.helper store
  ```

  `.git/config`中添加`credential`配置
  ```config
  [credential]  
      helper = store
  ```

  也就是会记住登录信息，以后就不用手输了。
