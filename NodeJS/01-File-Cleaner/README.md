# Node.js File Space Cleaner

A custom-built Node.js script that reads a text file, strips out all irregular, consecutive spaces and tabs, and perfectly preserves paragraph structures and newlines. 

## How it Works
The script uses the **Read -> Modify -> Write** architecture:
1. Opens and reads `./readfile.txt` using Node's asynchronous `fs/promises` module.
2. Uses a Regular Expression (`/[ \t]+/g`) to instantly find and replace all consecutive spaces and tabs with a single space.
3. Overwrites the original file with the cleaned text.

## How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository.
3. Use `readfile.txt` in the root directory or create one and paste your messy text inside. 
4. Run the script from your terminal:
   ```bash
   node index.js

## What I Learned Building This
* **Asynchronous File System (`fs/promises`):** How to use `async/await` to pause execution until a file is fully read or written.
* **Regular Expressions (Regex):** How to use regex patterns to efficiently parse and clean text data in a single line of code, replacing complex loops.
* **String Methods:** Using `.trim()` to easily remove leading and trailing whitespace.
* **Strict Equality and "Use Strict":** Using `"use strict";` to catch variables that were misspelled or undeclared, preventing silent global variable creation.