#!/usr/bin/env bash
virtualenv .env -p python3
source .env/bin/activate
pip install -r requirements.txt
npm i
gulp build
cd build/
open http://127.0.0.1:35729
livereload