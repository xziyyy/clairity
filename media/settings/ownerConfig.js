
const fs = require('fs')
// gausah di ubah rek karna
// udh ada request pas di scan pairing
<<<<<<< HEAD
global.ownername = "xZiyy";
global.owner = "6283159451487";
global.botname = "clairity bot";
=======
global.ownername = 'xZiyy';
global.owner = '6283804078729';
global.botname = '6285697725326';
>>>>>>> f110bc2 (update)

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
