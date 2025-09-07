#!/usr/bin/env bash
set -euxo pipefail

# OS packages for headless WebGL
sudo apt-get update -y
sudo apt-get install -y libgl1
sudo apt-get clean -y

# Node toolchain
corepack enable
NODE_VERSION=${NODE_VERSION:-18}
if [[ -f .nvmrc ]]; then NODE_VERSION=$(cat .nvmrc); fi
nvm install "$NODE_VERSION"
nvm use "$NODE_VERSION"

# Dependencies, build, tests, lints
npm ci
npm run build
npm test        --if-present
npm run lint    --if-present
npm run typecheck --if-present
