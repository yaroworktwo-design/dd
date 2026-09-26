#!/usr/bin/env bash
# Regenerates public/models/*.glb with headless Blender.
# BLENDER can point at any Blender 4.2+ binary.
set -euo pipefail
cd "$(dirname "$0")/.."
BLENDER="${BLENDER:-$(command -v blender || echo /tmp/blender-4.2.3-linux-x64/blender)}"
"$BLENDER" -b --factory-startup --python tools/blender/make_cats.py -- public/models "$@"
