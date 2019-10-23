#!/bin/
git add .
git add -A
git add -u
read -p "Commit description: " desc 
git commit -m "$desc"
git push origin master

