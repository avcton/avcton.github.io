#!/bin/bash

# Read the content of the file
content=$(cat)

# Check if the frontmatter contains 'public: true'
if echo "$content" | grep -q '^publish: true'; then
    # Pass the file through unchanged
    echo "$content"
else
    # Exit with a status code indicating that the file should be skipped
    exit 1
fi
