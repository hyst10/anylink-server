#!/bin/bash

#当前目录
cpath=$(pwd)
ver=$(cat version)
echo $ver
ver1=$(go env -w CGO_ENABLED=0 GOOS=linux GOARCH=amd64)
cmd=$(go build -o filename.exe)
echo $ver
eval $ver
