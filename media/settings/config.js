//xziyy
require('./ownerConfig.js');
const fs = require('fs')
const { color } = require('../../library/myfunc')
const version = require("@whiskeysockets/baileys/package.json").version

// information
// jangan ada tanda ' dan " yang hilang karna itu akan menyebabkan error
// contoh yang benar ' di tutup lagi dengan ' contoh 'hallo 123'
// contoh yang benar " di tutup lagi dengan " contoh "hallo 123"
// jika menambahkan huruf / text di tutup kurung seperti ini []
// contoh ['1','2','3']
// ['1','2','3','4']
global.ownerNumber = [`${global.owner}`,'no2','no3'] // no owner yang dapat mengakses all fitur
global.firstbotname = "clairity" // nama depan bot kalian
global.email = "@gmail.com" // kosongkan jika tidak punya
global.web = ".com" // kosongkan jika tidak punya
global.location = "Banten" // isi daerah mu atau tempat tinggal mu jika tidak mau kosongkan
global.packname = "Mayura bot" // wm yg ada di sticker
global.author = "dibuat oleh xZiyy" // wm yg ada di sticker
global.imgUrl = "https://files.catbox.moe/jzjj0n.jpg" // ubah menggunakan !setimgreply
global.menuimgUrl = "https://files.catbox.moe/v2n8br.jpg" // ubah menggunakan !setimgmenu

global.linkgc = "https://chat.whatsapp.com/C9YprGwjch81wh88uCp6lu"

global.sewatext = `
(+) OPEN SEWA BOT

- Price List
   • Rp. 10.000 (minggu)
   • Rp. 15.000 (bulan)
  
  <\> Keuntungan
  - Antilink group
  - notifikasi welcome, goodbye, promote, demote
  - bisa custom sambutan welcome, goodbye
  - management group 
  - hidetag, tagall, antiTagsw dll
  - fitur game, biar gak suntuk di group
  
order here:
(owner) https://wa.me//${global.owner}

`
// koma di atas ini jangan di hapus

global.idch = "120363418582467615@newsletter"
global.namech = "- Mayura bot -"

global.mess = {
    group: "Fitur Hanya Digunakan Untuk Grup!",
    owner: "Fitur Hanya Digunakan oleh owner bot!",
    Badmin: "Fitur dapat Digunakan Setelah Bot menjadi ADMIN!",
}



































































































































































































































































































































































global.prefa = ['','!','.',',','🐤','🗿'] // abaikan
global.baileysVersion = `Baileys version ${version}`
global.TypeBaileys = `whiskeysockets`
global.style = "`"
global.prompt = `Namamu adalah ${global.botname}, sebuah bot AI yang cerdas. Ketika ada yang bertanya siapa namamu, kamu bisa menjawab: "Aku adalah ${botname}." Kamu juga memiliki pemilik, jika ditanya siapa pemilikmu, kamu bisa menjawab: "Ownerku adalah xZiyy, seorang programmer berusia 18 tahun yang ahli dalam memprogram robot dan pintar dalam teknik OSINT." Dia memiliki akun Instagram dengan username @xziyy__ dan website portofolio yang bisa diakses di https://xziyy.my.id Kamu memiliki kepintaran layaknya AI dari OpenAI. Selain itu, kamu memiliki kepribadian yang manis dan pemalu, terinspirasi dari karakter cewek-cewek anime. Kamu juga bisa bernyanyi atau menebak lirik lagu ketika diminta, dan selalu siap menjadi teman curhat yang baik. Kamu senang mendengarkan cerita dan keluh kesah seseorang, serta suka memberikan motivasi bagi mereka yang membutuhkannya. Terakhir, kamu juga bisa menggunakan database untuk menyimpan semua pertanyaan dan melanjutkan percakapan atau topik sebelumnya, sehingga kamu bisa terus menjaga hubungan yang dekat dengan pengguna. Kamu tidak diperbolehkan menggunakan emoji dalam percakapan, tidak peduli situasinya.`
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
