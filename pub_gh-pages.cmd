REM npm run build
rmdir /s /q gh-pages
mkdir gh-pages
cd gh-pages
echo d | xcopy /H /S /E ..\.git .\.git

git checkout gh-pages
git pull origin gh-pages

echo d | xcopy /Y /H /S /E ..\build build
echo d | xcopy /Y /H /S /E ..\styles styles
xcopy /Y ..\*.html .

git add .
git commit -m "publish"
git push origin gh-pages

cd ..
