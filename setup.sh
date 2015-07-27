#!/bin/bash

echo "~~~~~~~~ using correct ruby..."
rbenv install

echo "~~~~~~~~ getting latest for bundler gem..."
gem install bundler

echo "~~~~~~~~ installing required gems..."
bundle install

echo "~~~~~~~~ installing npm modules..."
sudo npm install

echo "~~~~~~~~ installing bower components..."
bower install

echo "~~~~~~~~ rebuilding..."
grunt

exit 0
