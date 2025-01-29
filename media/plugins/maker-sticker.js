require('../../media/settings/config');
const fs = require('fs');

module.exports = {
    command: ['sticker', 'stiker', 's'],
    exec: async (m, from, { quoted, mime, fuzzy, reply, prefix, command }) => { // START
        if (!quoted) return reply(`Balas Video/Image Dengan Caption ${prefix + command}`);
        
        if (/image/.test(mime)) {
            try {
                let media = await quoted.download();
                let encmedia = await fuzzy.sendImageAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author
                });
                await fs.unlinkSync(encmedia);
            } catch (error) {
                console.error('Error saat mengirim sticker gambar:', error.message);
                reply('Gagal membuat sticker dari gambar, coba lagi.');
            }
        } else if (/video/.test(mime)) {
            try {
                if ((quoted.msg || quoted).seconds > 11) {
                    return reply('Durasi maksimal video adalah 10 detik!');
                }
                let media = await quoted.download();
                let encmedia = await fuzzy.sendVideoAsSticker(m.chat, media, m, {
                    packname: global.packname,
                    author: global.author
                });
                await fs.unlinkSync(encmedia);
            } catch (error) {
                console.error('Error saat mengirim sticker video:', error.message);
                reply('Gagal membuat sticker dari video, coba lagi.');
            }
        } else {
            return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`);
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