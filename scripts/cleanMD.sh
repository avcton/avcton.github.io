#!/bin/bash

# Read the content of the file
content=$(cat)

# Check if the frontmatter contains 'public: true'
if echo "$content" | grep -q '^publish: true'; then
    # Pass the file through unchanged
    echo "$content"
else
    # Exit without emitting anything
    exit 0
fi
