#!/bin/sh

readonly BUILD_DIR=dist

git checkout -b gh-pages
git subtree add --prefix $BUILD_DIR origin gh-pages
rm -rf $BUILD_DIR
yarn build
git add $BUILD_DIR --force
git commit -m "Update demo site..."
git subtree push --prefix $BUILD_DIR origin gh-pages
git checkout master
git branch -D gh-pages
