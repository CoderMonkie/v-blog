# Win10下安装Linux子系统Ubuntu

> WSL: Windows Subsystem for Linux

----在Win10上轻松拥有Linux环境

---

## 准备工作

+ 控制面板 》 程序和功能 》 启用或关闭 Windows 功能

  勾选【适用于 Linux 的Windows 子系统】
    
  ![win10-subsys-ubuntu-0-prepare-01.jpg](/v-blog/img/wsl-ubuntu/win10-subsys-ubuntu-0-prepare-01.jpg)

  ![win10-subsys-ubuntu-0-prepare-02.jpg](/v-blog/img/wsl-ubuntu/win10-subsys-ubuntu-0-prepare-02.jpg)

+ 设置 》 更新和安全 》 开发者选项

  选择【开发人员模式】

  ![win10-subsys-ubuntu-0-prepare-03.jpg](/v-blog/img/wsl-ubuntu/win10-subsys-ubuntu-0-prepare-03.jpg)

> 做完准备工作，需要重启电脑，  
  不然安装完 Ubuntu 后启动时还是会提示

## 下载安装 Ubuntu

+ 打开 Microsoft Store 应用商店

  点【开始】输入 Microsoft Store 即可找到，打开搜索 Linux。

+ 第一个就是 Ubuntu，点【免费下载】

  下载+安装，完毕后会出现启动按钮，也可以在开始菜单找到并打开。

  ![win10-subsys-ubuntu-1-download-01.jpg](https://upload-images.jianshu.io/upload_images/14619861-20f9f19cfe3bb46a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ 启动 Ubuntu

  如果在准备工作后没有重启，此时会找不到子系统，还是需要重启一下的。

  ![win10-subsys-ubuntu-1-start-01.jpg](https://upload-images.jianshu.io/upload_images/14619861-a5fba8fab3da5bcb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ 安装中...

  正常情况的话就会是以下这样：

  ![win10-subsys-ubuntu-1-install-01.jpg](https://upload-images.jianshu.io/upload_images/14619861-1ea9b593217bb397.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ 设置用户名密码以添加用户  
  
  ![win10-subsys-ubuntu-1-install-02.jpg](https://upload-images.jianshu.io/upload_images/14619861-e61045e94ed14324.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  ![win10-subsys-ubuntu-1-install-03.jpg](https://upload-images.jianshu.io/upload_images/14619861-8f0f233fd04f0289.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  ![win10-subsys-ubuntu-1-install-04.jpg](https://upload-images.jianshu.io/upload_images/14619861-7bffbabc321a3550.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  ![win10-subsys-ubuntu-1-install-05.jpg](https://upload-images.jianshu.io/upload_images/14619861-34e8505e48aff7a9.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

通过命令行，就可以便捷地完成很多工作了，  
准备另外开一篇记录 bash 总结。  

现在，我们还有两点需求：

+ 网络原因，跟之前介绍的 npm 一样，需要将源换为国内镜像
+ 操作习惯，安装一个图形界面，便于浏览网页查看图片等

---

## 切换源

+ 先备份下原源文件
  ```bash
  sudo mv /etc/apt/sources.list /etc/apt/sources.list.bak;
  # or
  sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak1
  ```

+ 复制

  [Ubuntu 清华镜像：](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)
  ```
  # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
  
  # 预发布软件源，不建议启用
  # deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
  ```
  
+ 粘贴

  ```bash
  sudo apt edit-sources
  ```
  选择 Vim 打开文件，或者直接：
  ```bash
  sudo vim /etc/apt/sources.list
  ```
  然后输入`:1,d`清空所有行，复制上面的镜像内容，在这里点鼠标右键就粘贴上了。
  
  ```bash
  :wq
  ```
  保存并退出，编辑完成后会提示：
  ```bash
  Your '/etc/apt/sources.list' file changed, please run 'apt-get update'.maony@Hasee-201301:/etc/apt$
  ```
  输入：
  ```bash
  sudo apt update    # 替代了 sudo apt-get update
  ```

  ![win10-subsys-ubuntu-2-repository-01.jpg](https://upload-images.jianshu.io/upload_images/14619861-dfcd3d879921090f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  更新结束：
  
  ![win10-subsys-ubuntu-2-repository-02.jpg](https://upload-images.jianshu.io/upload_images/14619861-4ec1347a4bbeaeff.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

## 安装图形界面
+ lxde

  ```bash
  sudo apt install lxde
  ```

  ```bsh
  sudo apt install vnc4server
  ```

  基本每次安装东西会询问是否安装，输入`Y`，然后耐心等待安装完成即可。  

  可以一次安装多个，上面两个主要的单独列出来了而已。

  ```bash
  sudo apt install gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal
  ```

  配置 vncserver 的 xstartup 文件：
  ```bash
  sudo vim /home/username/.vnc/xstartup
  ```
  替换为以下内容：
  ```
  #!/bin/sh
  export XKL_XMODMAP_DISABLE=1  
  unset SESSION_MANAGER  
  unset DBUS_SESSION_BUS_ADDRESS  
  gnome-panel &  
  gnome-settings-daemon &  
  metacity &  
  nautilus &  
  gnome-terminal &
  start lxde &
  ```
  参考了很多资料都没有启动起来桌面，最终加了上面的最后一句`start lxde &`才可以的。

+ win10上使用 [vncviewer](https://bintray.com/tigervnc/stable/download_file?file_path=vncviewer64-1.9.0.exe) 来连接 ubuntu

  点连接(https://bintray.com/tigervnc/stable/download_file?file_path=vncviewer64-1.9.0.exe)或另行搜索下载 vncview。

+ 使用方法
  
  - 在WindowsSubSystemLinux（WSL）的Ubuntu上启动 vncserver，
    ```
    vncserver  # 等同于 vncserver :0，以这个数字ID区分可以开多个桌面
    ```
    ![win10-subsys-ubuntu-3-remote-01.jpg](https://upload-images.jianshu.io/upload_images/14619861-cae2d56dcb883c52.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  - 在Win10上，启动VNC Viewer

    输入ubuntu系统地址，如果`vncserver :1`，这里就是`127.0.0.1:1`，默认为0可以省略。

    ![win10-subsys-ubuntu-3-remote-02.jpg](https://upload-images.jianshu.io/upload_images/14619861-47f3edcdf240eff3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

    ![win10-subsys-ubuntu-3-remote-03.jpg](https://upload-images.jianshu.io/upload_images/14619861-e692912d8d813ef7.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 以下为没有正常显示出图形界面的情况：

  ![win10-subsys-ubuntu-3-remote-04.jpg](https://upload-images.jianshu.io/upload_images/14619861-20d83433ce51e832.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 正常显示的情况：

  ![win10-subsys-ubuntu-simple-UI-lxde.jpg](https://upload-images.jianshu.io/upload_images/14619861-dd6c3fccbb1b6372.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---

这个极简的界面显得low一些（虽然这不是重点），等改天还是再整个漂亮点的UI吧。

---

> 补充

+ 尝试另一个桌面：xfce4

  ```bash
  sudo apt install xubuntu-desktop xfce4
  ```
  编辑`/home/username/.vnc/xstartup`，将最后一行的命令替换为（注意没有空格）
  ```bash
  startxfce4 &
  ```
  ![win10-subsys-ubuntu-3-xfce-01.png](https://upload-images.jianshu.io/upload_images/14619861-f73ba2b3c1cec210.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
