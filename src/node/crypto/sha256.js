const crypto = require('crypto');
const jsonData = {reqSerialNum: "2020040318241452", agentId: "1000000000000002", memberId: "310000016002378725", photoType: "01" };
// jsonData
console.log(jsonDataStr);
const res = crypto.createHash('sha256').update(JSON.stringify(jsonData) + 'chinapnr').digest('hex');
console.log(res)