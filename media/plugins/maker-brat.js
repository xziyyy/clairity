require('../../media/settings/config');
const axios = require('axios');
const fs = require('fs');

module.exports = {
    command: ['sbrat', 'brat'],
    exec: async (m, from, { q, fuzzy, args, command, prefix, reply }) => { // START
        if (!q) return reply(`Masukan Teks\n\nContoh: ${global.prefix + m.command} hallo`);
        const commandText = m?.text?.trim();
        if (commandText.startsWith('. brat') || commandText.startsWith('. Brat')) {
            return reply('Jangan ada spasi antara titik dan brat!!');
        }

        const clairityApi = `https://aqul-brat.hf.space/?text=${encodeURIComponent(q.trim())}`;
        const siputApi = `https://clairity-nine.vercel.app/api/brat?text=${encodeURIComponent(q.trim())}`;

       reply('_Tunggu sebentar, sedang memproses..._')
        
        try {
            // Coba akses API Clairity
            const response = await axios.get(clairityApi, { responseType: 'arraybuffer' });
            await fuzzy.sendImageAsSticker(m.chat, response.data, m, {
                packname: global.packname,
                author: global.author
            });
        } catch (error) {
            console.error('API Clairity error, mencoba API Siput:', error.message);
            try {
                // Jika Clairity gagal, coba akses API Siput
                const response = await axios.get(siputApi, { responseType: 'arraybuffer' });
                await fuzzy.sendImageAsSticker(m.chat, response.data, m, {
                    packname: global.packname,
                    author: global.author
                });
            } catch (error) {
                console.error('API Siput juga error:', error.message);
                return reply('Kedua API error, mohon coba lagi nanti.');
            }
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