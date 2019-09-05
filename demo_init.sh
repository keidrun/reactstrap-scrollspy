#!/bin/sh

readonly BUILD_DIR=dist

git checkout -b gh-pages
yarn build
git add $BUILD_DIR --force
git commit -m "Deploy a demo page..."
git subtree push --prefix $BUILD_DIR origin gh-pages
git checkout master
git branch -D gh-pages
