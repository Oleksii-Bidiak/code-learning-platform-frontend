#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" == "main" ]; then
  echo "❌ Пуш у main заборонено! Використовуйте pull request."
  exit 1
fi

exit 0