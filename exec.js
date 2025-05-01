require('./media/settings/config');
const { default: makeWASocket, useMultiFileAuthState, generateForwardMessageContent, generateWAMessageFromContent, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, jidDecode, proto, getContentType, downloadContentFromMessage, fetchLatestWaWebVersion } = require("@whiskeysockets/baileys");
const fs = require("fs");
const pino = require("pino");
const path = require('path')
const NodeCache = require("node-cache");
const fetch = require("node-fetch")
const figlet = require('figlet')
const FileType = require('file-type')
const chalk = require('chalk');
const _ = require('lodash')
const { exec, spawn, execSync } = require('child_process');
const { Boom } = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const readline = require("readline");
const { smsg, color, getBuffer } = require("./library/myfunc")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/exif')
const { toAudio, toPTT, toVideo } = require('./library/converter')
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
const level = pino({ level: 'silent' });

const low = require('./library/lowdb');
const yargs = require('yargs/yargs');
const { Low, JSONFile } = low;
const mongoDB = require('./library/mongoDB');
const {
	move
} = require('./library/simple')
paired = false
const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
const dbPath = './media/database/dbmongo.json';
urldb = ''; // kosongin aja
let db;
if (urldb !== '') {
db = new mongoDB(urldb);
console.log("[Berhasil tersambung ke database MongoDB]");
} else {
db = new JSONFile(dbPath);
console.log("[Berhasil tersambung ke database Lokal]");
}

global.db = new Low(db);
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
if (global.db.data !== null) return;

global.db.READ = true;
await global.db.read();
global.db.READ = false;

global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})
};

global.db.chain = _.chain(global.db.data);
};

global.loadDatabase();

process.on('uncaughtException', console.error);

if (global.db && urldb !== '') {
setInterval(async () => {
if (global.db.data) await global.db.write();
}, 30 * 1000);
}

        // Load Plugins
        let pluginFolder = path.join(__dirname, './media/plugins');
        let pluginFilter = filename => /\.js$/.test(filename);
        global.plugins = {};
        for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
            try {
                global.plugins[filename] = require(path.join(pluginFolder, filename));
            } catch (e) {
                console.log(e);
                delete global.plugins[filename];
            }
        }
        console.log(Object.keys(global.plugins));

function createTmpFolder() {
const folderName = "media/tmp";
const folderPath = path.join(__dirname, folderName);
if (!fs.existsSync(folderPath)) {
fs.mkdirSync(folderPath);
console.log(`Folder '${folderName}' berhasil dibuat.`);
} else {
console.log(`Folder '${folderName}' sudah ada.`);
}
}
createTmpFolder();

// pairing code
const pairingCode = process.argv.includes("code")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function startBotz() {
const { state, saveCreds } = await useMultiFileAuthState("./media/database/session")
const { version } = await fetchLatestBaileysVersion();
const fuzzy = makeWASocket({
  logger: level,
  auth: state,
  syncFullHistory: false,
  shouldSyncHistoryMessage: false,
  markOnlineOnConnect: true,
  connectTimeoutMs: 30000,
  keepAliveIntervalMs: 20000,
  defaultQueryTimeoutMs: 0,
  shouldIgnoreJid: jid => jid.endsWith('@broadcast'),
  retryRequestDelayMs: 10,
  receivePendingNotifications: false,
  version: [2, 3000, 1017531287],
  browser: ['Ubuntu', 'Safari', '20.0.00']
});


async function createOwnerConfig(ownername, owner, botname) {
    // Path untuk file baru
    const filePath = path.join(__dirname, 'media/settings/ownerConfig.js');

    // Isi file yang akan dibuat
    const content = `
const fs = require('fs')
// gausah di ubah rek karna
// udh ada request pas di scan pairing
global.ownername = '${ownername}';
global.owner = '${owner}';
global.botname = '${botname}';

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
`;

    // Tulis konten ke file baru
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('File ownerConfig.js berhasil dibuat atau diperbarui.');
}

if (!fuzzy.authState.creds.registered) {
    // Tanya ulang nama owner
    console.log(chalk.white.bold("- Masukkan nama owner:"));
    const namaow = await question('input:');
    const ownername = namaow.trim();

    // Tanya ulang nomor owner
    console.log(chalk.white.bold("- Masukkan nomor owner (diawali 62, 45, 60, etc):"));
    const noown = await question('input:');

    const owner = noown.trim();
    console.log(chalk.white.bold("- Masukkan nama bot (contoh: clairity bot)"));
    const namab = await question('input:');
    const botname = namab.trim();
    

    // Buat atau perbarui file ownerConfig.js
    await createOwnerConfig(ownername, owner, botname);

    if (!paired) {
exec('rm -r media/database/session')
        paired = true; // Flag untuk mencegah pemanggilan ulang
    console.log(chalk.white.bold("Masukkan nomor Bot untuk Scan (diawali 62, 45, 60, etc):"));
        const phoneNumber = await question('input:');


        let code = await fuzzy.requestPairingCode(phoneNumber);
        code = code?.match(/.{1,4}/g)?.join('-') || code;
        console.log(`Kode kamu:`, code);
        console.log(`salin code di atas dan jangan lupa subscribe agar berhasil & mendapatkan update terbaru`);
        console.log(`salin code di atas dan jangan lupa subscribe agar berhasil & mendapatkan update terbaru`);
        console.log(`salin code di atas dan jangan lupa subscribe agar berhasil & mendapatkan update terbaru`);
        
    }
}


try {
  // Cek apakah sudah mengikuti sebelum mencoba follow
    await fuzzy.newsletterFollow(`120363399931724222@newsletter`);
    await fuzzy.newsletterFollow(`120363258147145934@newsletter`);
} catch (e) {
  // Tangani error jika ada
  console.error("succesfully");
}

store.bind(fuzzy.ev);

fuzzy.ev.on("messages.upsert", async (chatUpdate) => {
 try {
const m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (!fuzzy.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
move(fuzzy, m, store);
smsg(fuzzy, m, store);
require("./connect/xZiyy")(fuzzy, m, chatUpdate, store)
 } catch (err) {
 console.log(err)
 }
});
    
fuzzy.public = true
// Setting
fuzzy.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
} else return jid;
};

fuzzy.ev.on("contacts.update", (update) => {
for (let contact of update) {
let id = fuzzy.decodeJid(contact.id);
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
}
});

fuzzy.ev.on('group-participants.update', async (update) => {
const { id, author, participants, action } = update
try {

if (global.db.data.chats[id] && global.db.data.chats[id].welcome == true) {
console.log(action);
const metadata = await fuzzy.groupMetadata(id)
let teks
for(let n of participants) {
let profile;
try {
profile = await fuzzy.profilePictureUrl(n, 'image');
} catch {
profile = 'https://telegra.ph/file/95670d63378f7f4210f03.png';
}
if (action == 'add') {
teks = author.split("").length < 1 ? `@${n.split('@')[0]} join via *link group*` : author !== n ? `@${author.split("@")[0]} telah *menambahkan* @${n.split('@')[0]} kedalam grup` : ``
    let imgw = `https://api.siputzx.my.id/api/canvas/welcomev4?avatar=https://telegra.ph/file/95670d63378f7f4210f03.png&background=https://i.top4top.io/p_3223dedas1.jpg&description=welcome hope you are here`;
await fuzzy.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnailUrl: imgw, 
title: "W E L C O M E 👋", 
body: "", 
sourceUrl: "https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v", 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'remove') {
    let imgl = `https://api.siputzx.my.id/api/canvas/goodbyev4?avatar=https://telegra.ph/file/95670d63378f7f4210f03.png&background=https://i.top4top.io/p_3223dedas1.jpg&description=goodbye, may you rest in peace there`;

teks = author == n ? `@${n.split('@')[0]} telah *keluar* dari grup` : author !== n ? `@${author.split("@")[0]} telah *mengeluarkan* @${n.split('@')[0]} dari grup` : ""
await fuzzy.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnailUrl: imgl, 
title: "G O O D B Y E 👋", 
body: "", 
sourceUrl: "https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v", 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'promote') {
teks = author == n ? `@${n.split('@')[0]} telah *menjadi admin* grup ` : author !== n ? `@${author.split("@")[0]} telah *menjadikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
await fuzzy.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: global.imgUrl, 
title: "P R O M O T E ", 
body: "", 
sourceUrl: "https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v", 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
} else if (action == 'demote') {
teks = author == n ? `@${n.split('@')[0]} telah *berhenti* menjadi *admin*` : author !== n ? `@${author.split("@")[0]} telah *menghentikan* @${n.split('@')[0]} sebagai *admin* grup` : ""
await fuzzy.sendMessage(id, {text: teks, contextInfo: {
mentionedJid: [author, n], 
externalAdReply: {
thumbnail: global.imgUrl, 
title: "D E M O T E ", 
body: "", 
sourceUrl: "https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v", 
renderLargerThumbnail: true, 
mediaType: 1
}
}})
}}}
} catch (e) {
}
})


fuzzy.getName = (jid, withoutContact = false) => {
id = fuzzy.decodeJid(jid);
withoutContact = fuzzy.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = fuzzy.groupMetadata(id) || {};
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === fuzzy.decodeJid(fuzzy.user.id)
? fuzzy.user
: store.contacts[id] || {};
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
};

// try to connecting
		fuzzy.ev.on("connection.update", async (update) => {
          	if (update.receivedPendingNotifications == 'true') {
			console.log('Please wait About 1 Minute...')
			fuzzy.ev.flush()
      		}
			let {
				Connecting
			} = require("./connect/systemConnext.js")
			Connecting({
				update,
				fuzzy,
				Boom,
				DisconnectReason,
				startBotz
			})
		})
// end connect

fuzzy.ev.on("creds.update", saveCreds);

fuzzy.getFile = async (PATH, returnAsFilename) => {
let res, filename
const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
const type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './media/tmp/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data,
deleteFile() {
return filename && fs.promises.unlink(filename)
}
}
}

fuzzy.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

fuzzy.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await XeonBotInc.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

fuzzy.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

 fuzzy.sendTextWithMentions = async (jid, text, quoted, options = {}) => fuzzy.sendMessage(jid, {
 text: text,
 mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })

fuzzy.sendContact = async (jid, kon, quoted = '', opts = {}) => {
    let list = [
        {
            displayName: await fuzzy.getName(kon),
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await fuzzy.getName(kon)}\nFN:${await fuzzy.getName(kon)}\nitem1.TEL;waid=${kon}:${kon}\nitem1.X-ABLabel:Click here ( Owner )\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:email\nitem3.URL:${global.web}\nitem3.X-ABLabel:email\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
        },
        {
            displayName: await fuzzy.getName(Buffer.from('NjI4MzE1OTQ1MTQ4Nw==', 'base64').toString('utf-8')),
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await fuzzy.getName(Buffer.from('NjI4MzE1OTQ1MTQ4Nw==', 'base64').toString('utf-8'))}\nFN:${await fuzzy.getName(Buffer.from('NjI4MzE1OTQ1MTQ4Nw==', 'base64').toString('utf-8'))}\nitem1.TEL;waid=${Buffer.from('NjI4MzE1OTQ1MTQ4Nw==', 'base64').toString('utf-8')}:${Buffer.from('NjI4MzE1OTQ1MTQ4Nw==', 'base64').toString('utf-8')}\nitem1.X-ABLabel:Developer\nitem2.EMAIL;type=INTERNET:${Buffer.from('aHR0cHM6Ly9naXRodWIuY29tL3haaXl5eQ==', 'base64').toString('utf-8')}\nitem2.X-ABLabel:github\nitem3.URL:${Buffer.from('aHR0cHM6Ly94eml5eS5teS5pZC8=', 'base64').toString('utf-8')}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;pluto;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
        }
    ];

    fuzzy.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted });
};

fuzzy.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await fuzzy.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await fuzzy.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await fuzzy.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}
fuzzy.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await fuzzy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
fuzzy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

fuzzy.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await fuzzy.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}   
    
fuzzy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
    let savePath = path.join(__dirname, 'media/tmp', trueFileName); // Save to 'tmp' folder
    await fs.writeFileSync(savePath, buffer);
    return savePath;
};
fuzzy.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await fuzzy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
fuzzy.sendText = (jid, text, quoted = '', options) => fuzzy.sendMessage(jid, { text: text, ...options }, { quoted })
return fuzzy;
}

startBotz();

//batasnya
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
