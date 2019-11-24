# Git常用命令入门

Git：
> 分布式版本管理系统，  
> 不同于SVN的集中式，  
> 在本地（即没有网也可以）就可以对仓库的代码做版本管理。  
> 将一处的代码视为中心/源（origin），  
> 把本地的版本推送到origin上，其它各处就可以同步更新。  
>
> 第一次接触时非常明显地不适应的​一点区别：  
> + SVN是多个分支对应多个路径多份代码，  
> + Git是一个仓库一个路径，该路径下切换不同分支，  
> + 变更保存在本地。


下面来一波新手必知必会的Git基本命令​。​

## 新建仓库

+ 在本地新建
  ```bat
  git init
  ```
+ 从克隆远程
  ```bat
  git clone <远程仓库地址.git>
  ```

## 创建分支

+ 创建本地分支，未追踪远程
  ```bat
  git checkout --branch <要新建的本地分支名>
  ```

+ 创建远程分支（将本地新建分支推送到远程还未存在的同名分支，并完成追踪）
  ```bat
  git push -u origin <本地分支名也就是要新建的远程分支名 (同名的话就可以只填一个)>
  ```
  本地与远程分支不同名的时候：
  ```bat
  git push -u origin <本地分支名>:<远程分支名>
  ```
  > 注意：本地分支名与远程分支名中间的冒号

## 查看分支

+ 查看本地分支
  ```bat
  git branch
  ```

+ 查看远程分支
  ```bat
  git branch --remote
  
  git branch -r
  ```

+ 查看所有全部分支
  ```bat
  git branch --all
  
  git branch -a
  ```


## 切换分支

+ 切换本地分支
  ```bat
  git checkout <本地分支名>
  ```

+ 切换远程分支
  ```bat
  git checkout -b <要新建的本地分支名> origin/<存在于远程的分支名>
  ```

## 删除分支

+ 删除远程分支
  ```bat
  git push origin : <远程分支名>
  ```
  > 注意：origin后面的分号

  删除远程的master分支 与  
  重新创建远程的master分支  
  ```bat
  git push origin :master
  
  git push origin master
  ```
  区别就在于分支名前面带一个冒号

+ 删除本地分支
  ```bat
  git branch --delete <本地分支名>
  ```

## 更新本地分支

+ git pull

  > 对于已经追踪的本地分支，修改前一定要先获取到远程的更新

  获取远程更新合并到本地当前分支
  ```bat
  git pull
  ```
  如果有报错信息说明有本地变更冲突导致没法merge。
  ```
  error: Your local changes to the following files would be overwritten by checkout:
        directory/filename.js
  Please commit your changes or stash them before you switch branches.
  Aborting
  ```

  如果更新前，本地已存在修改，一定要先commit一下，但不push（只放到暂存区）
  ```bat
  git add .
  git commit
  
  git pull
  ```

  可以指定更新
  ```bat
  git pull <远程地址> <远程分支名>:<本地分支名>
  ```
  与当前本地分支合并的话，`: <本地分支名>`可以省略不指定

+ git fetch

  > 获取远程仓库的更新

  如 取回远程master分支的更新
  ```bat
  git fetch origin master
  ```

  `git pull`相当于先`fetch`后`merge`，如
  ```bat
  git fetch origin master
  git merge FETCH_HEAD
  ```

## 本地代码变更提交

+ 
  ```bat
  git add .
  git commit <comment注释>
  ```

## 推送更新到远程

+ Case-1：远程已有分支并与本地当前分支关联，直接push
  ```bat
  git push
  ```

+ Case-2：远程已有分支，未与本地当前分支关联
  ```bat
  git push -u origin/<远程分支名>
  ```

+ Case-3：没有远程分支

  参见《创建远程分支》

---

## 其它

+ 切换git的HEAD分支
  ```bat
  git remote set-head origin some_branch
  ```

+ 添加忽略文件/文件夹

  > 如果没有`.gitignore`文件则在根目录下新建一个

  编辑`.gitignore`，比如：
  ```
  logs
  *.log
  npm-debug.log*
  yarn-debug.log*
  .vscode/
  node_modules/
  ```

  如果文件已经被追踪，  
  那么添加到`.gitignore`是不会起作用的，  
  变动后仍然提示，
  需要先在暂存区删除，
  再添加`.gitignore`就可以了。
  ```
  git rm -r --cache <file name>
  ```

+ 撤销远程仓库分支上的错误提交
  ```bat
  git reflog
  
  git reset --hard abc123xxx
  
  git push -f
  ```

+ 添加用户信息

  ```bat
  git config user.name yourname
  git config user.email youremail
  ```

  上面的配置会存储在当前git管理的路径下的`.git/config`文件中，

  全局配置的话，只要加一个`--global`的参数。

  ```bat
  git config -g user.name yourname
  git config -g user.email youremail
  ```

+ 例举上面用到的几个参数简写

  `--all` => `-a`  
  `--branch` => `-b`  
  `--global` => `-g`  
  `--set-upstream` => `-u`  

---

实际上使用中大部分人都是用开发工具里集成的Git功能，很少直接敲命令的。

像我使用过的`VisualStudio`跟`VSCode`都可以方便地操作Git.

但是基础知识还是要有一些的。

另外还有类似于SVN可视化的工具（如TortoiseGit）可以使用，用过TortoiseSVN的朋友，不会感到陌生，对新手更友好，只是，如果一点不懂Git原理的话用起来还是会特别不顺。

用习惯了就好了，还是Git香~​


+ 高级用法或实践（略）
  如：git命令的简写，自定义别名；自定义`.gitconfig`配置文件；版本管理中特定分支的使用（develop/feature/bugfix/tag...）；冲突覆盖后的解决（尤其是团队开发下影响降到最低）；