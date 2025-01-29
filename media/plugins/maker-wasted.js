require('../../media/settings/config');
const axios = require('axios');
const fs = require('fs');

module.exports = {
    command: ['wasted'],
    exec: async (m, from, { quoted, mime, reply, fuzzy, getBuffer }) => { // START
        try {
            if (/jpg|jpeg|png/.test(mime)) {
                reply('_Tunggu sebentar, sedang memproses..._');

                const media = await quoted.download();
                let uploadImage = require('../../library/uploadImage')
                let isTele = /image\/(png|jpe?g|gif)|video\/mp4|audio\/mpeg/.test(mime);
                let anu = await (isTele ? uploadImage : "not found")(media)
                const apiUrl = await getBuffer(`https://itzpire.com/maker/wasted?url=${anu}`)

               await fuzzy.sendMessage(from, { 
                    image: apiUrl, 
                    caption: "Nihh", 
                    mimetype: "image/jpeg" 
                }, { quoted: m });
            } else {
                reply('Kirimkan media yang ingin di jadikan wasted!');
            }
        } catch (e) {
            console.error('Error pada plugin wasted:', e.message);
            reply('Server Canvas sedang offline!');
        }
    }, // END
};

const file = __filename;
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`[  UPDATE ] ${file}`);
    delete require.cache[require.resolve(file)];
    require(file);
});