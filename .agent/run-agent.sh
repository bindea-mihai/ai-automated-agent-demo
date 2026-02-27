#!/bin/bash
set -e

echo "Cloning repository..."
git clone "$REPO_URL" /workspace
cd /workspace

git config user.email "agent@yourdomain.com"
git config user.name "Claude Agent"

echo "Reading task and system prompt..."
TASK=$(cat task.md)
SYSTEM_PROMPT=$(cat CLAUDE.md)

echo "Running Claude agent..."
claude -p "$TASK" \
  --allowedTools "Read,Edit,Write,Bash(git add *),Bash(git commit *),Bash(git status *),Bash(git diff *),Bash(git log *),Bash(ls *),Bash(find *),Bash(cat *),Bash(dotnet *),Bash(npm *),Bash(npx *),Bash(mkdir *),Bash(cp *),Bash(mv *)" \
  --append-system-prompt "$SYSTEM_PROMPT" \
  --output-format json

echo "Pushing changes..."
git push "$REPO_URL" HEAD:main

echo "Done."
