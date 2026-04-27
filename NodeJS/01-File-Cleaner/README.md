# Node.js File Space Cleaner

A custom-built Node.js script that reads a text file, strips out all irregular, consecutive spaces and tabs, and perfectly preserves paragraph structures and newlines. 

## How it Works
The script uses the **Read -> Modify -> Write** architecture:
1. Opens and reads `./readfile.txt` using Node's asynchronous `fs/promises` module.
2. Parses the string character-by-character to rebuild the text with single spacing.
3. Overwrites the original file with the cleaned text.

## How to Run
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository.
3. Use `readfile.txt` in the root directory or create one and paste your messy text inside. 
4. Run the script from your terminal:
   ```bash
   node index.js