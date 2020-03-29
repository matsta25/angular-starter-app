#!/bin/bash

### This script will rename your angular project.

if [ "$#" -eq  "0" ]
 then
   echo "No arguments supplied."
   echo "Type:"
   echo "./cleanup.sh your-app-name"
   exit 1
else
  find ./ -type f -exec sed -i "s/angular-starter-app/$1/g" {} + &&
  echo "# your-app-name" > README.md &&
#  rm -rf ./docs
  exit 0
fi
