const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "file");
const url = dirPath + 'fileaa.js';
fs.readFileSync(dirPath + 'aa.js', (err, data) => {
    console.log(data.toString())
})