#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { format } from "date-fns";

// 1️⃣ Get the current date & time in the correct format
const now = new Date();
const folderDate = format(now, "yyyy-MM-dd-HH-mm"); // Folder name
const isoDate = format(now, "yyyy-MM-dd'T'HH:mm:ss"); // For front matter

// 2️⃣ Define paths
const postDir = path.join("src", "posts", folderDate);

// 3️⃣ Ensure the directory exists
if (!fs.existsSync(postDir)) {
  fs.mkdirSync(postDir, { recursive: true });
}

// 4️⃣ Create the markdown file with front matter
const postFile = path.join(postDir, "index.md");
const defaultContent = `---
title: "Optional title"
date: "${isoDate}"
tags:
    - tags
eleventyExcludeFromCollections: true to make private/false to make public
---

write here
`;

fs.writeFileSync(postFile, defaultContent, { flag: "wx" });

console.log(`✅ New post created: ${postFile}`);