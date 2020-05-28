const crypto = require('crypto-js/sha256');
const Base64 = require('crypto-js/enc-base64');

const jsonData = {reqSerialNum: "2020040318241452", agentId: "1000000000000002", memberId: "310000016002378725", photoType: "01" };
// jsonData
console.log(JSON.stringify(jsonData) + 'chinapnr');
// checkValue
console.log(crypto(JSON.stringify(jsonData) + 'chinapnr').toString());
// console.log(crypto({"agentId":"310000015002423502","memberId":310000016002426182,"photoType":"06","reqSerialNum":1211}chinapnr, 'chinanpr').toString());
