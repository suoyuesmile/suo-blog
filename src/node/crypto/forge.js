
const forge = require('node-forge');

const res = forge.md.sha256.create().update('{"agentId":"310000015002423502","memberId":310000016002426182,"photoType":"06","reqSerialNum":1211}chinapnr').digest().toHex()

console.log(res)