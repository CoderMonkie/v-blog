@echo off

call build.bat
echo building-complete.
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'auto-deploy'
git remote add origin https://github.com/CoderMonkie/v-blog.git
git push --force origin HEAD:gh-pages

pause