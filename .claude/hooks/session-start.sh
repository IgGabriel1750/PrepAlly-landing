#!/bin/bash
# SessionStart hook for PrepAlly landing.
# On each (ephemeral) web session: ensure deps, rebuild the local Tailwind CSS,
# and start the static preview server in the background. Idempotent + non-blocking.
set -euo pipefail

# Run asynchronously so the session doesn't wait on install/build.
echo '{"async": true, "asyncTimeout": 300000}'

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}" || exit 0

# 1. Install npm deps only when missing (container caches the tree after first run).
if [ ! -d node_modules ]; then
  npm install >/dev/null 2>&1 || true
fi

# 2. Rebuild the compiled stylesheet from source.
npx tailwindcss -i src/input.css -o assets/styles.css --minify >/dev/null 2>&1 || true

# 3. Start the preview server only if it isn't already running.
if ! pgrep -f "http.server 8000" >/dev/null 2>&1; then
  nohup python3 -m http.server 8000 >/tmp/prepally-preview.log 2>&1 &
fi
