require('../../media/settings/config');
const fs = require('fs');
const axios = require('axios');
const { remini } = require("../scraper/remini")

module.exports = {
    command: ['hd'],
    exec: async (m, from, { q, fuzzy, args, command, prefix, reply, quoted, mime, pushname }) => { // START

        if (!quoted) return reply(`Balas Image Dengan Caption ${prefix + command}`)
        if (!/image/.test(mime)) return reply("hanya support gambar")

        try {
            let times = parseInt(args[0]) || 1; // Default 1 jika argumen tidak ada
            if (times < 1) return reply("Minimal proses adalah 1 kali");
            if (times > 20) return reply("Maksimal proses adalah 20 kali.");

            if (times > 4) {
                reply("Proses ini akan memakan waktu lebih lama, harap bersabar.");
            }

            pq = await quoted.download();
            let hade = pq;

            for (let i = 0; i < times; i++) {
                hade = await remini(hade, "enhance");
            }

            fuzzy.sendMessage(m.chat, {
                image: hade,
                caption: `_Sukses Membuat ${command} dengan ${times}x proses_\n\nGunakan perintah seperti:\n!hd 2 (untuk 2x proses, maksimal 20x).`
            }, {
                quoted: m
            });
        } catch (error) {
            console.error('Error saat convert hd:', error.message);
            reply('Gagal membuat hd, coba lagi nanti.');
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