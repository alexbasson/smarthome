#!/usr/bin/env bash

set -e

git remote remove origin

npm --prefix js install

gradle build
