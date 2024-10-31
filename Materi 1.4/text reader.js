const fs = require('node:fs');
const fp = require('node:path');
const readLine = require('node:readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rl.question(`Apa nama filenya?\n`, fileName => {
    let filePath = fp.join(__dirname, fileName + ".txt");
    fs.readFile(filePath, 'utf8', (error, text) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log("\n\n", text);
    });
    rl.close();
  });