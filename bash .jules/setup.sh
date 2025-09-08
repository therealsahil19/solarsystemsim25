#!/bin/bash

set -e  # Exit on error
set -x  # Echo commands for logging

cd /app

# Setup git config function (based on log)
setup_git_config() {
  # Preclean git config
  keys_to_unset=$(git config --global --get-all --show-names --regexp '^url.*insteadof$' | cut -d ' ' -f1)
  if [ -n "$keys_to_unset" ]; then
    for key in $keys_to_unset; do
      git config --global --unset-all "$key" || echo "git config unset exited with code $?"
      echo "git config unset '$key'"
    done
  fi

  git config --global user.name 'google-labs-jules[bot]'
  git config --global user.email '161369871+google-labs-jules[bot]@users.noreply.github.com'
  git config --global --add url.http://git@192.168.0.1:8080/.insteadOf https://github.com/
  git config --global --add url.http://git@192.168.0.1:8080/.insteadOf git@github.com:
  git config --global core.hooksPath /dev/null
}

setup_git_config

# Fetch the repo (uses insteadOf proxy)
git fetch https://github.com/therealsahil19/solarsystemsim25 --depth 1 +refs/heads/main:refs/remotes/origin/main

# Clean untracked files to avoid conflicts (e.g., build artifacts like dist/)
git clean -fdx

# Force checkout to discard any local changes/conflicts
git checkout -f -B main origin/main
