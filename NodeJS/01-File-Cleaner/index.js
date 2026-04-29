"use strict"; // Prevents silent errors (like variable typos)
const fs = require('fs/promises');

async function readMyFile() {
    try {
        // Use a relative path so this works on any machine that clones the repo
        const filePath = 'readfile.txt';
        
        // 1. Read the file
        const data = await fs.readFile(filePath, 'utf8');
        
        // 2. Modify the file (Wait for the promise to resolve!)
        let newFile = removeSpaces(data);
        
        // 3. Overwrite the file with the cleaned data
        await fs.writeFile(filePath, newFile, 'utf8');
        console.log("Success! File has been cleaned of extra spaces.");
        
    } catch(err) {
        console.error(`Error processing the file: `, err);
    }
}

//using Regex to replace multiple spaces and tabs with a single space, and then trim leading/trailing spaces
function removeSpaces(s) {
    return s.replace(/[ \t]+/g, ' ').trim();
}

// Execute the program
readMyFile();