"use strict"; // Prevents silent errors (like variable typos)
const fs = require('fs/promises');

async function readMyFile() {
    try {
        // Use a relative path so this works on any machine that clones the repo
        const filePath = './readfile.txt';
        
        // 1. Read the file
        const data = await fs.readFile(filePath, 'utf8');
        
        // 2. Modify the file (Wait for the promise to resolve!)
        let newFile = await changesInFile(data);
        
        // 3. Overwrite the file with the cleaned data
        await fs.writeFile(filePath, newFile, 'utf8');
        console.log("Success! File has been cleaned of extra spaces.");
        
    } catch(err) {
        console.error(`Error processing the file: `, err);
    }
}

// Core Algorithm: Removes extra spaces but preserves formatting and newlines
function removeSpaces(s) {
    let s_new = "", w = "";                    
    let size = s.length;
    let i = 0;
    
    // Flag to track if we are at the start of a new line
    let isNewLine = true; 
    
    while(i < size) {
        // Use strict equality (===) to prevent unexpected type coercion bugs
        if(s[i] === " " || s[i] === "\t") {
            if(w !== "") {
                if(isNewLine) {
                    s_new += w;
                    isNewLine = false; // First word placed, no longer a new line
                } else {
                    s_new += ' ' + w;
                }
                w = "";
            }
        } 
        // Handle Windows (\r) and Linux/Mac (\n) line breaks
        else if(s[i] === "\r" || s[i] === "\n") {
            if(w !== "") {
                if(isNewLine) s_new += w;
                else s_new += ' ' + w;
                w = "";
            }
            s_new += s[i];     // Append the line break itself
            isNewLine = true;  // Reset flag for the next line
        } 
        else {
            w += s[i]; // Build the word character by character
        }
        i++;
    }
    
    // Catch the final word if the file doesn't end with a space or newline
    if(w !== "") {
        if(isNewLine) s_new += w;
        else s_new += ' ' + w;
    } 
    
    return s_new;
}

// Wrapper function to process the data
async function changesInFile(data) {
    let newFile = removeSpaces(data);
    return newFile;
}

// Execute the program
readMyFile();