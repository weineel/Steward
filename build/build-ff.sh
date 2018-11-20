#!/bin/sh

# only work on MacOS
# prepare
echo "prepare......"
rm -fr output
mkdir -p output

# build
echo "building....."
npm run build || { echo "failed to build，please check and rebuild"; exit 1; }

zip -r steward.zip output/steward/

echo "done package"

mv -f steward.zip ~/Desktop

echo "move to desktop"