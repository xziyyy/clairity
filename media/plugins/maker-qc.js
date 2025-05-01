require('../../media/settings/config');
const fs = require('fs');
const axios = require('axios');
const { quotedark } = require('../../library/quote.js');

module.exports = {
    command: ['qc'],
    exec: async (m, from, { q, fuzzy, args, command, prefix, reply, quoted, mime, pushname}) => { // START
        let ppuser;
        try {
            ppuser = await fuzzy.profilePictureUrl(m.sender, 'image');
        } catch (err) {
            ppuser = 'https://files.catbox.moe/0arg0u.jpg'; // Default profile picture
        }


        if (!q) return reply("Masukkan teks atau balas pesan yang ingin dijadikan quote!");
        if (q.length > 30) return reply("Maksimal 30 karakter untuk teks!");

        try {
            const rest = await quotedark(q, pushname, ppuser);
            await fuzzy.sendImageAsSticker(m.chat, rest.result, m, {
                packname: global.packname,
                author: global.author
            });
        } catch (error) {
            console.error('Error saat membuat quote:', error.message);
            reply('Gagal membuat quote, coba lagi nanti.');
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