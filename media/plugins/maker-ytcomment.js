require('../../media/settings/config');
const axios = require('axios');
const fs = require('fs');

module.exports = {
    command: ['ytcomment'],
    exec: async (m, from, { fuzzy, reply, args }) => { // START
        try {


				const wm = args.join(" ")
				const username = wm.split("|")[0];
				const comment = wm.split("|")[1];

            if (!username || !comment) {
                return reply('Format tidak valid! Gunakan format: !ytcomment username|comment');
            }

            reply('_Tunggu sebentar, sedang memproses..._');

        let ppuser;
        try {
            ppuser = await fuzzy.profilePictureUrl(m.sender, 'image');
        } catch (err) {
            ppuser = 'https://files.catbox.moe/0arg0u.jpg';
        }

            if (!ppuser) {
                return reply('Kamu tidak memiliki foto profil atau terjadi kesalahan saat mengambil foto profil!');
            }

           const apiUrl = `https://itzpire.com/maker/youtube-comment?username=${encodeURIComponent(username)}&comment=${encodeURIComponent(comment)}&url=${encodeURIComponent(ppuser)}`;
            const result = await axios.get(apiUrl, { responseType: 'arraybuffer' }).then((res) => res.data);

            await fuzzy.sendMessage(from, { 
                image: result, 
                caption: "Ini hasilnya setelah ditambahkan komentar!", 
                mimetype: "image/jpeg" 
            }, { quoted: m });

        } catch (e) {
            console.error('Error pada plugin ytcomment:', e.message);
            reply('Terjadi kesalahan atau server sedang offline.');
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