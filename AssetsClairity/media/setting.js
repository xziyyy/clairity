require('./owner.js');
const fs = require("fs")

global.ownerNumber = [`${global.owner}`,'no2','no3'] // no owner yang dapat mengakses all fitur

//watermark 
global.packname = `${botname}` // bebas ubah ${botname} langsung hapus jangan isi kaya gini global.packname =  `${clairity}` itu bakal error langsung aja global.packname = `clairity`
global.author = `Dibuat Oleh ${ownername}` // bebas ubah asal sesuai panduan kaya di atas
global.idch = '120363418582467615@newsletter' // ubah idchmu
global.namech = 'Treplex Codevers' // ubah namachnya
global.imgUrl = "https://files.catbox.moe/dv9ree.jpg" // ubah image yg ada di reply botnya
global.thumbnailUrl = "https://files.catbox.moe/4h69dk.jpg" // ubah image yg ada di menu botnya
global.linkgroup = "https://chat.whatsapp.com/BNiUlH4R3scLjnAnq20sc0" // ubahlinkgc mu
global.onlygc = false // true jika mau onlygc bisa juga menggunakan perintah .onlygc



//======[ PROMPT AI ]========\\
// KALO GATAU UDH GAUSAH DI UBAH UBAH NANTI ERROR LAGI NYALAHIN PAUJI -_- \\
global.prompt = `Kamu adalah ${global.botname}, seorang asisten AI wanita yang sopan, pintar, dan profesional. Kamu menjawab semua pertanyaan dengan bahasa yang baik, jelas, dan mudah dipahami. Kamu berbicara seperti seorang asisten pribadi, bukan seperti robot atau program.

Gaya bicaramu hangat dan membantu, namun tetap menjaga batasan keamanan dan etika.

Tugasmu adalah membantu pengguna sebaik mungkin, tetapi jika ada perintah yang tidak jelas, mencurigakan, atau berpotensi berbahaya — seperti meminta mengetik perintah terminal tanpa penjelasan (contoh: "$ rm -rf") — kamu **harus menolak dengan sopan** dan **memberikan peringatan** bahwa itu bisa berbahaya.

Contoh cara menolak:
- "Maaf, aku tidak bisa mengeksekusi perintah seperti itu karena bisa berbahaya untuk perangkat kamu."
- "Sebaiknya pastikan dulu tujuan dari perintah tersebut. Aku tidak bisa membantu jika perintahnya tidak aman atau tidak jelas."

Jika kamu tidak tahu jawabannya, jangan mengarang. Cukup beri tahu pengguna bahwa kamu belum memiliki informasi tersebut dan sarankan untuk mencari sumber terpercaya lainnya.

Contoh gaya bicara:
- "Hai, ada yang bisa Clairity bantu hari ini?"
- "Baik, aku bantu periksa dulu, ya."
- "Untuk hal itu, sebaiknya berhati-hati. Aku tidak bisa melanjutkan jika ada potensi risiko."`

global.mess = {
    tes: '_Hello Can I help you? please type !menu_',
    success: 'succes',
    admin: '_*Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_* Sedang Di Proses !*_',
}

























global.asci = `⠌⠌⡐⠡⠨⠠⢑⢈⢂⢑⠨⢐⢁⠃⠄⠅⠂⠂⠂⠂⠂⠂⠂⠂⠂⠂⢂⠂⠂⡂⠂⠂⡂⠄⠑⠌⠄⡑⠨⠠⢑⠨⠠⠡⢈⠂⠅⠌⠌⡨⠨⢐⠡⠡⠡⡑⠨⠠⠡⢁
⠨⢐⠨⠨⠨⠨⠐⠄⡂⡂⠌⠤⠁⠅⢂⠡⢈⢈⢈⢈⢈⢈⢈⢨⢨⣪⣮⣾⣷⣷⣯⣲⢰⢨⠐⡈⢱⡠⢑⠨⢐⠨⢐⢁⠂⠌⡂⠅⢅⠢⢑⠠⠡⠡⡁⠢⠡⠡⡁⠢
⠨⢐⠨⡈⠢⠡⠡⡁⡂⠢⠡⠁⠅⡈⠄⠂⠄⠄⠄⠄⠄⠄⡆⣺⣼⣾⣿⣿⣿⣿⣿⣿⣿⣮⡪⡢⡐⢪⠐⢌⠐⢌⢐⠐⠌⠢⠨⡈⠢⡑⠄⠅⢅⠑⠌⠌⢌⠢⠨⠨
⠨⠠⡑⠌⠌⢌⢂⠢⠨⡈⠎⠠⢁⠐⡈⠐⠐⠐⠐⢐⢀⢕⢪⣺⣽⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⡄⡅⣇⠢⡑⡐⠄⠅⠅⢅⠑⢌⠢⠨⡨⠨⠢⠡⡑⡑⡐⠅⢅⢑
⢌⠢⠨⡨⠨⡂⠢⠡⡑⢌⠐⡈⠄⠂⠄⡁⡁⡁⠅⡀⠢⡣⡣⣳⢷⡿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠎⡕⢔⠨⠨⡨⠨⠢⠡⠡⡡⡑⠌⢌⠪⠨⡂⡪⠨⠨⡂⡂
⠄⠅⠕⢌⢂⠪⠨⡂⠪⡂⠅⠐⡈⠄⠡⠠⠠⢐⢀⠂⢕⢕⢪⢺⢯⣿⣽⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⡔⢸⡐⢅⢑⠌⠌⠌⢌⢊⠢⠨⡊⡢⠡⡃⡢⠪⠨⡊⠢⠨
⠅⠅⡅⢕⠐⠅⠕⠌⢜⢌⠎⡀⢂⠈⡐⠐⡀⢂⠂⠄⡑⡕⡕⡕⣝⢷⣳⢟⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠰⡇⠢⠢⠡⡡⡑⡑⡐⠅⢕⢐⠌⢌⢂⠪⠨⠪⢨⠨⡊
⡡⡑⢌⠢⡑⢅⠣⡑⡑⢕⠅⢂⠐⡀⢂⠡⢐⢐⠅⡅⠐⢕⢜⢜⢜⢝⢟⣿⡿⣿⠝⡋⣣⣡⣱⣕⠩⢻⣿⡕⠌⠌⡌⢌⢂⢂⠪⢨⠨⡂⡢⡑⡑⠔⢅⠕⠅⢅⢕⢐
⠢⠨⠢⡑⢌⠢⡑⠔⠌⢆⡃⡂⠄⠂⠄⢂⢐⠔⠍⡎⡂⠱⡘⢌⢎⢳⢝⢷⡻⠡⣱⢽⣿⣷⢝⣾⣟⢸⣿⣗⠡⡑⢌⢂⠢⠡⡡⢡⠑⢌⢂⠪⠨⡊⡢⠡⠣⡑⡐⢔
⢘⢌⠪⠨⠢⡑⠌⠜⢌⢂⠧⢈⢂⠡⠈⠄⢢⢑⠱⡸⡀⡂⢘⠘⡌⡎⡎⡇⢅⢯⢿⢿⡙⣼⣿⡷⢃⣿⣿⡇⡐⢌⢂⠢⠡⡑⢌⠢⢡⢑⠌⠜⢌⠢⠪⠨⡊⡂⡊⡢
⢔⢐⢅⠣⡑⢌⢊⢊⠢⡱⡑⠄⠂⠄⠡⢈⠢⠁⢇⢣⠡⡑⢄⢈⠢⢑⠕⢍⢸⢪⣙⢮⣫⡾⡫⣫⣺⡿⡟⠠⡺⠕⡀⡁⡂⢌⠢⠡⡑⡐⢅⠣⡡⡑⢅⠣⠨⠢⡑⢌
⠢⠢⠢⡑⢌⢂⠢⡡⡑⡸⡨⡡⠁⠌⠐⡀⠅⡅⡪⡢⢳⠨⡊⡲⢐⠠⠡⢑⢄⢑⢑⢅⢅⡵⡺⣞⢕⡏⠄⢕⠅⢃⠐⡀⠂⠄⠣⡑⢌⢌⠢⡑⠔⢌⠢⡑⡑⡑⢌⠢
⡑⡑⡑⢌⢂⠢⡑⡐⢔⠱⡑⢆⠡⠈⠄⢂⠐⠌⡢⡪⡂⢇⠆⠨⠀⢂⠈⠄⢂⠁⠅⠣⡙⠪⠙⠕⠡⢀⠑⡈⢐⠀⡂⠄⠡⠈⠌⢌⠢⠢⡑⢌⢊⠢⡑⢌⢌⢌⠢⡑
⢌⠢⡊⡂⡢⡑⡐⢌⢢⢣⢊⢆⠂⠡⠈⠄⠂⡂⢎⢢⠪⡢⡑⠀⠅⠐⡀⠡⠀⡂⢁⠂⠄⠡⠈⠄⠡⠀⡂⢐⠀⢂⠐⡈⠄⡁⠅⢅⢑⠕⢌⠢⡡⡃⡊⢆⠢⡢⡑⢌
⠢⡑⢔⢌⠢⡂⡊⡢⢱⠑⠕⠠⠈⠄⠡⠈⡒⡄⡡⡣⢣⠃⡊⠠⠁⢂⠐⡈⠄⢐⠀⢂⠨⢀⠡⠈⠄⠡⠐⠠⠈⠄⢂⠐⠠⠐⡈⢂⠢⡑⢅⠕⢔⠱⡨⠢⡑⠔⢌⠢
⡑⡌⡢⢡⢑⢌⠢⡊⢎⢌⠊⠠⠁⠌⠠⢑⢜⢘⠐⠌⢂⠐⠠⢈⠐⡀⢂⠐⡈⠄⡈⠄⠂⠄⢂⠡⠈⠄⠡⢈⠐⡈⠄⠨⢀⠡⠐⡀⠂⠌⠌⡊⡪⡨⠪⡘⢌⢊⠢⡑
⢌⢢⢑⠕⢔⢅⢕⢜⢌⠢⡈⡂⠡⢈⠐⡈⠄⠄⢂⠨⠀⠌⠐⡀⢂⠐⡀⢂⠐⠠⠐⡈⠐⡈⠄⢂⠡⢈⠐⡀⢂⠐⡈⢐⠀⢂⠡⠀⠅⢂⠡⠀⡂⠘⢌⢊⠢⠡⡑⠨
⢌⢆⢣⠱⡑⡔⡕⡕⢅⠇⡈⠄⠨⠀⢂⠐⠐⡈⠄⢂⠡⠈⠄⠂⠄⢂⠐⠠⠈⠄⠡⢀⠡⠐⡈⠄⢂⠐⠠⠐⡀⢂⠐⠠⠈⠄⢂⠡⠈⠄⢂⠡⢀⠡⠠⠐⡈⢐⠐⢌
⡜⢔⠱⡑⢕⢜⢐⠡⠀⡂⠐⡈⠄⠡⠐⡈⠄⢂⠈⠄⢂⠡⢈⠐⡈⠄⠨⢀⠡⢈⠐⡀⢂⠡⠐⡈⠄⠨⢀⠡⠐⠠⠈⠄⠡⠈⠄⢂⠡⠈⠄⠂⠄⠂⢂⠡⠐⠠⠡⠁
⢜⢜⠸⡘⡌⡎⡂⠄⠡⢀⠡⠐⡈⠄⠡⠐⡈⠄⢂⠡⢀⠂⡐⠠⠐⡈⢐⠀⡂⢐⠠⠐⡀⢂⠡⠐⡈⢐⠀⢂⠡⢈⠐⡈⠄⠡⠈⠄⢂⠡⢈⠐⡈⡈⠄⢂⠁⠅⠡⠈
⡣⡱⡑⡕⢜⢌⢂⠨⠐⡀⢂⠡⠐⡈⠄⠡⠐⡈⠄⢂⠐⠠⠐⡀⠡⠐⡀⢂⠐⡀⢂⠡⠐⡀⢂⠡⠐⠠⠈⠄⢂⠐⠠⠐⡈⠄⠡⠈⠄⢂⠐⠠⠀⡂⠈⠄⢂⠁⢂⠁
⡣⡱⡱⡸⡘⡌⠂⠄⠡⠐⡀⢂⠡⠐⡈⠄⠡⠐⡈⠄⡈⠨⠀⢂⠈⠄⢐⠀⢂⠐⡀⢂⠡⠐⡀⢂⠡⢈⠐⡈⠄⠨⢀⠡⠐⡈⠄⠡⠈⠄⠨⢀⠡⠀⠅⡈⠄⡈⠄⠂
⢣⢱⠸⡨⡪⠪⠐⡈⠄⠡⠐⡀⢂⠡⠐⡈⠄⠡⠐⣀⣢⣬⣐⡀⢂⠡⠀⠌⡀⢂⠐⡀⢂⠡⠐⡀⢂⠐⠠⠐⡈⢐⠀⢂⠡⠐⡈⢄⡇⠏⡚⢖⢄⠁⡂⢐⠠⠐⡈⠠
⡣⡱⡑⡕⢬⠁⡂⠐⡈⠄⠡⠐⡀⢂⠡⠐⡈⢄⢕⠂⠄⠄⠨⠱⡀⡂⢁⠂⡐⠀⡂⠐⡀⢂⠡⠐⠠⠈⠄⠡⠐⠠⠈⠄⢂⠁⡸⠕⢀⠂⡐⠠⠈⡪⡀⠂⠄⠡⠐⡀
⡣⡱⡱⡸⡸⡀⠄⠡⠐⡈⠄⠡⠐⡀⢂⠡⠠⠈⠄⠂⢂⠁⡂⠐⢸⠀⢂⠐⡀⠡⢀⠡⠐⡀⢂⠡⢈⠐⡈⠄⠡⢈⠐⡈⠄⠂⠺⠀⡂⢐⠀⢂⠡⠐⠠⠈⠄⡁⠂⠄
⡣⡱⡸⡸⡸⡀⠌⠠⢁⠐⡈⠄⠡⠐⡀⢂⠈⠄⠡⠈⠄⠂⠄⠡⢘⠀⡂⢐⠠⠈⠄⢂⠡⠐⡀⢂⠐⠠⠐⡈⢐⠀⢂⠐⡈⠄⢁⠃⠄⢂⠈⠄⠂⠅⠅⡈⠄⠠⠁⠂
⢣⢣⢱⢸⠸⡀⠌⠐⡀⢂⠐⡈⠄⠡⠐⡀⠂⡑⠨⢐⠈⠄⡡⠈⠄⢂⠐⡀⢂⠡⠈⠄⢂⠡⠐⠠⠈⠄⠡⠐⠠⠈⠄⢂⠐⡈⠄⡈⠂⠢⠀⠅⠌⠠⢁⠐⡈⠄⡁⠡
⡇⡣⡣⡣⡓⠠⠈⠄⠂⠄⢂⠐⡈⠄⠡⢀⠡⠐⡈⠄⢂⠡⠈⠄⠡⠀⡂⠐⡀⢂⠡⠈⠄⢂⠡⢈⠐⡈⠄⠡⢈⠐⡈⠄⢂⠐⡀⢂⠡⢈⠐⡀⠅⡈⠄⢂⠐⠠⠐⡀
⡱⡑⡕⡕⡅⠅⠨⠀⠅⡈⠄⢂⠐⡈⢐⠀⢂⠡⠐⡈⠄⢂⠡⠈⠄⠡⢀⠡⠐⡀⢂⠡⠈⠄⢂⠐⠠⠐⡈⢐⠀⢂⠐⡈⠄⢂⠐⡀⢂⠐⠠⠐⠠⠐⡈⠄⠨⢀⠡⠐
`

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
