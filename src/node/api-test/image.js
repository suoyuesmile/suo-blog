const fetch = require('node-fetch');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const request = require('request');

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

const 


const form = new FormData();
form.append('checkValue', '3f1f3fb5b7fa79d4cdf9aaaea1558eb5322bfd7f0f8f09d6f37fd93154ec71be');
form.append('jsonData', '{"agentId":"310000015002423502","memberId":310000016002426182,"photoType":"06","reqSerialNum":1211}');
form.append('picture', file);

(async () => {
	const response = await fetch('https://nsposf.cloudpnr.com/nsposfweb/webB9002/uploadWebMerPic', {method: 'POST', body: form});
	const json = await response.json();
	
	console.log(json)
})();

// OR, using custom headers
// NOTE: getHeaders() is non-standard API

// const options = {
// 	method: 'POST',
// 	body: form,
// 	headers: form.getHeaders()
// };

// (async () => {
// 	const response = await fetch('https://httpbin.org/post', options);
// 	const json = await response.json();
	
// 	console.log(json)
// })();