(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{175:function(a,t,e){"use strict";e.r(t);var s=e(4),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"git常用命令入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令入门"}},[a._v("#")]),a._v(" Git常用命令入门")]),a._v(" "),e("p",[a._v("Git：")]),a._v(" "),e("blockquote",[e("p",[a._v("分布式版本管理系统，"),e("br"),a._v("\n不同于SVN的集中式，"),e("br"),a._v("\n在本地（即没有网也可以）就可以对仓库的代码做版本管理。"),e("br"),a._v("\n将一处的代码视为中心/源（origin），"),e("br"),a._v("\n把本地的版本推送到origin上，其它各处就可以同步更新。")]),a._v(" "),e("p",[a._v("第一次接触时非常明显地不适应的​一点区别：")]),a._v(" "),e("ul",[e("li",[a._v("SVN是多个分支对应多个路径多份代码，")]),a._v(" "),e("li",[a._v("Git是一个仓库一个路径，该路径下切换不同分支，")]),a._v(" "),e("li",[a._v("变更保存在本地。")])])]),a._v(" "),e("p",[a._v("下面来一波新手必知必会的Git基本命令​。​")]),a._v(" "),e("h2",{attrs:{id:"新建仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库"}},[a._v("#")]),a._v(" 新建仓库")]),a._v(" "),e("ul",[e("li",[a._v("在本地新建"),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git init\n")])])])]),a._v(" "),e("li",[a._v("从克隆远程"),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git clone <远程仓库地址.git>\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"创建分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[a._v("#")]),a._v(" 创建分支")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("创建本地分支，未追踪远程")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git checkout --branch <要新建的本地分支名>\n")])])])]),a._v(" "),e("li",[e("p",[a._v("创建远程分支（将本地新建分支推送到远程还未存在的同名分支，并完成追踪）")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git push -u origin <本地分支名也就是要新建的远程分支名 (同名的话就可以只填一个)>\n")])])]),e("p",[a._v("本地与远程分支不同名的时候：")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git push -u origin <本地分支名>:<远程分支名>\n")])])]),e("blockquote",[e("p",[a._v("注意：本地分支名与远程分支名中间的冒号")])])])]),a._v(" "),e("h2",{attrs:{id:"查看分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看分支"}},[a._v("#")]),a._v(" 查看分支")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("查看本地分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git branch\n")])])])]),a._v(" "),e("li",[e("p",[a._v("查看远程分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git branch --remote\n\ngit branch -r\n")])])])]),a._v(" "),e("li",[e("p",[a._v("查看所有全部分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git branch --all\n\ngit branch -a\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"切换分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[a._v("#")]),a._v(" 切换分支")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("切换本地分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git checkout <本地分支名>\n")])])])]),a._v(" "),e("li",[e("p",[a._v("切换远程分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git checkout -b <要新建的本地分支名> origin/<存在于远程的分支名>\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"删除分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[a._v("#")]),a._v(" 删除分支")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("删除远程分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git push origin : <远程分支名>\n")])])]),e("blockquote",[e("p",[a._v("注意：origin后面的分号")])]),a._v(" "),e("p",[a._v("删除远程的master分支 与"),e("br"),a._v("\n重新创建远程的master分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git push origin :master\n\ngit push origin master\n")])])]),e("p",[a._v("区别就在于分支名前面带一个冒号")])]),a._v(" "),e("li",[e("p",[a._v("删除本地分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git branch --delete <本地分支名>\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"更新本地分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新本地分支"}},[a._v("#")]),a._v(" 更新本地分支")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("git pull")]),a._v(" "),e("blockquote",[e("p",[a._v("对于已经追踪的本地分支，修改前一定要先获取到远程的更新")])]),a._v(" "),e("p",[a._v("获取远程更新合并到本地当前分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git pull\n")])])]),e("p",[a._v("如果有报错信息说明有本地变更冲突导致没法merge。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("error: Your local changes to the following files would be overwritten by checkout:\n      directory/filename.js\nPlease commit your changes or stash them before you switch branches.\nAborting\n")])])]),e("p",[a._v("如果更新前，本地已存在修改，一定要先commit一下，但不push（只放到暂存区）")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git add .\ngit commit\n\ngit pull\n")])])]),e("p",[a._v("可以指定更新")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git pull <远程地址> <远程分支名>:<本地分支名>\n")])])]),e("p",[a._v("与当前本地分支合并的话，"),e("code",[a._v(": <本地分支名>")]),a._v("可以省略不指定")])]),a._v(" "),e("li",[e("p",[a._v("git fetch")]),a._v(" "),e("blockquote",[e("p",[a._v("获取远程仓库的更新")])]),a._v(" "),e("p",[a._v("如 取回远程master分支的更新")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git fetch origin master\n")])])]),e("p",[e("code",[a._v("git pull")]),a._v("相当于先"),e("code",[a._v("fetch")]),a._v("后"),e("code",[a._v("merge")]),a._v("，如")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git fetch origin master\ngit merge FETCH_HEAD\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"本地代码变更提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地代码变更提交"}},[a._v("#")]),a._v(" 本地代码变更提交")]),a._v(" "),e("ul",[e("li",[e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git add .\ngit commit <comment注释>\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"推送更新到远程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送更新到远程"}},[a._v("#")]),a._v(" 推送更新到远程")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Case-1：远程已有分支并与本地当前分支关联，直接push")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git push\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Case-2：远程已有分支，未与本地当前分支关联")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git push -u origin/<远程分支名>\n")])])])]),a._v(" "),e("li",[e("p",[a._v("Case-3：没有远程分支")]),a._v(" "),e("p",[a._v("参见《创建远程分支》")])])]),a._v(" "),e("hr"),a._v(" "),e("h2",{attrs:{id:"其它"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[a._v("#")]),a._v(" 其它")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("切换git的HEAD分支")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git remote set-head origin some_branch\n")])])])]),a._v(" "),e("li",[e("p",[a._v("添加忽略文件/文件夹")]),a._v(" "),e("blockquote",[e("p",[a._v("如果没有"),e("code",[a._v(".gitignore")]),a._v("文件则在根目录下新建一个")])]),a._v(" "),e("p",[a._v("编辑"),e("code",[a._v(".gitignore")]),a._v("，比如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("logs\n*.log\nnpm-debug.log*\nyarn-debug.log*\n.vscode/\nnode_modules/\n")])])]),e("p",[a._v("如果文件已经被追踪，"),e("br"),a._v("\n那么添加到"),e("code",[a._v(".gitignore")]),a._v("是不会起作用的，"),e("br"),a._v("\n变动后仍然提示，\n需要先在暂存区删除，\n再添加"),e("code",[a._v(".gitignore")]),a._v("就可以了。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git rm -r --cache <file name>\n")])])])]),a._v(" "),e("li",[e("p",[a._v("撤销远程仓库分支上的错误提交")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git reflog\n\ngit reset --hard abc123xxx\n\ngit push -f\n")])])])]),a._v(" "),e("li",[e("p",[a._v("添加用户信息")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git config user.name yourname\ngit config user.email youremail\n")])])]),e("p",[a._v("上面的配置会存储在当前git管理的路径下的"),e("code",[a._v(".git/config")]),a._v("文件中，")]),a._v(" "),e("p",[a._v("全局配置的话，只要加一个"),e("code",[a._v("--global")]),a._v("的参数。")]),a._v(" "),e("div",{staticClass:"language-bat extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git config -g user.name yourname\ngit config -g user.email youremail\n")])])])]),a._v(" "),e("li",[e("p",[a._v("例举上面用到的几个参数简写")]),a._v(" "),e("p",[e("code",[a._v("--all")]),a._v(" => "),e("code",[a._v("-a")]),e("br"),a._v(" "),e("code",[a._v("--branch")]),a._v(" => "),e("code",[a._v("-b")]),e("br"),a._v(" "),e("code",[a._v("--global")]),a._v(" => "),e("code",[a._v("-g")]),e("br"),a._v(" "),e("code",[a._v("--set-upstream")]),a._v(" => "),e("code",[a._v("-u")])])])]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("实际上使用中大部分人都是用开发工具里集成的Git功能，很少直接敲命令的。")]),a._v(" "),e("p",[a._v("像我使用过的"),e("code",[a._v("VisualStudio")]),a._v("跟"),e("code",[a._v("VSCode")]),a._v("都可以方便地操作Git.")]),a._v(" "),e("p",[a._v("但是基础知识还是要有一些的。")]),a._v(" "),e("p",[a._v("另外还有类似于SVN可视化的工具（如TortoiseGit）可以使用，用过TortoiseSVN的朋友，不会感到陌生，对新手更友好，只是，如果一点不懂Git原理的话用起来还是会特别不顺。")]),a._v(" "),e("p",[a._v("用习惯了就好了，还是Git香~​")]),a._v(" "),e("ul",[e("li",[a._v("高级用法或实践（略）\n如：git命令的简写，自定义别名；自定义"),e("code",[a._v(".gitconfig")]),a._v("配置文件；版本管理中特定分支的使用（develop/feature/bugfix/tag...）；冲突覆盖后的解决（尤其是团队开发下影响降到最低）；")])])])}),[],!1,null,null,null);t.default=v.exports}}]);