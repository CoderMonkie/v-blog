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
::git checkout -b v-blog-pages origin/v-blog-pages
git push --force origin v-blog-pages

::To delete the dist folder
::cd ..
::echo delete-directory: "%cd%/dist"
::rmdir /s /q "%cd%/dist"
::cd..
::cd..
pause