#!/bin/sh

# Have git mark this repository as safe
git config --global --add safe.directory ${PWD}

# Install nx globally
npm install --global nx

# Reset cache when the workspace is rebuilt
nx reset
