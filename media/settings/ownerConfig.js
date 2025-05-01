
const fs = require('fs')
// gausah di ubah rek karna
// udh ada request pas di scan pairing
global.ownername = 'xZiyy';
global.owner = '6283804078729';
global.botname = '6285697725326';

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
