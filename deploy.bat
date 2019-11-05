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
::git branch --set-upstream-to=origin/gh-pages master
::git checkout -b gh-pages origin/gh-pages
git push --force origin gh-pages

::To delete the dist folder
::cd ..
::echo delete-directory: "%cd%/dist"
::rmdir /s /q "%cd%/dist"
::cd..
::cd..
pause