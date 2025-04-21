#!/bin/bash

sudo -v  # Ask for password upfront

# Run rsync with sudo on the remote side
npx @11ty/eleventy && rsync -zavP --rsync-path="sudo rsync" /path/to/your/_site/ user@url:/var/www/webserver