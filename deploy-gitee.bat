@echo off

echo building...
call build.bat
echo building-complete.

cd docs/.vuepress/dist
git init
git add -A
git commit -m "%date% %time% auto-deploy"
git remote add origin https://gitee.com/coder-monkey/v-blog.git
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