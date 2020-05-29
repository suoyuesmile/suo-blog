const fs = require('fs');
const path = require('path');
const request = require('request');

const url = '';
// fs.readFile(url, (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data.toString());
// })

var dirPath = path.join(__dirname, "file");
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log("文件夹创建成功");
} else {
    console.log("文件夹已存在");
}

let stream = fs.createWriteStream(dirPath + 'aa.jpg');
request(url).pipe(stream).on("close", function (err) {
    console.log("文件下载完毕");
});
