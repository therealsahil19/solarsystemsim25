#!/usr/bin/env bash
set -euxo pipefail

# OS packages for headless WebGL
sudo apt-get update -y
sudo apt-get install -y libgl1
sudo apt-get clean -y

# ──────────────── 2. Node toolchain ───────────────
# Jules images already ship with Node 18 LTS.
echo "Using pre-installed Node version:"
node -v
npm -v


# Dependencies, build, tests, lints
npm ci
npm run build
npm test        --if-present
npm run lint    --if-present
npm run typecheck --if-present
