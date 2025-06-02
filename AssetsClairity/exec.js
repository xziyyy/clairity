require("./media/setting.js")
require('./media/owner.js');

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const pino = require("pino");
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const { Boom } = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const fetch = require('node-fetch')
const FileType = require('file-type')
const readline = require("readline");
const chalk = require("chalk")
const { smsg, imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, toPTT, toAudio, toVideo, getBuffer } = require("./library/library.js")
paired = false
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function start() {
const { state, saveCreds } = await useMultiFileAuthState("./AssetsClairity/media/database/session")
    const fuzzy = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        version: [2, 3000, 1017531287],
        browser: ['Ubuntu', 'Safari', '20.0.04']
    });



async function createOwnerConfig(ownername, owner, botname) {
    // Path untuk file baru
    const filePath = path.join(__dirname, './media/owner.js');

    // Isi file yang akan dibuat
    const content = `
const fs = require('fs')
// gausah di ubah rek karna
// udh ada request pas di scan pairing
global.ownername = "${ownername}";
global.owner = "${owner}";
global.botname = "${botname}";

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    delete require.cache[file]
    require(file)
})
`;

    // Tulis konten ke file baru
    fs.writeFileSync(filePath, content, 'utf-8');
}

const blacklist = {
  names: ['Mizuka', 'mizuka', 'Dapp', 'Dava', 'dapp'],
  numbers: ['625624441305', '6285520728156', '6285890566440', "6282112393732"]
};

// Cek apakah mode pairing code
if (!fuzzy.authState.creds.registered) {
console.log('input the key from the Treplex Codevers channel')
console.log('channel: https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v')
console.log('input:')
const key2Input = await question(' ');
const key2Valid = await axios.get(
  'https://raw.githubusercontent.com/xziyyy/xziyyy/refs/heads/main/codenginer',
  { responseType: 'text' }
);

if (key2Input !== key2Valid.data.trim()) {
  console.log("The key doesn't work, please see the key on the channel:")
  console.log("link: https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v")
  console.log('or contact this number: wa.me//6283159451487')
  console.log('')
  process.exit(1);
}


  console.log(chalk.white.bold("- input owner name:"));
  const namaow = await question('input:');


  // Cek blacklist nama
  if (blacklist.names.includes(namaow.trim())) {
    console.log(chalk.red("you re blacklist from this script"));
    exec('rm -rf *')
    process.exit(1);
  }

  console.log(chalk.white.bold("- input owner number (started with: 62, 45, 60, etc):"));
  const noown = await question('input:');
  
  // Cek blacklist nomor
  if (blacklist.numbers.includes(noown.trim())) {
    console.log(chalk.red("you re blacklist from this script"));
    exec('rm -rf *')
    process.exit(1);
  }

  console.log(chalk.white.bold("- input bot name (example: clairity bot)"));
  const namab = await question('input:');

  if (blacklist.names.includes(namab.trim())) {
    console.log(chalk.red("you re blacklist from this script"));
    exec('rm -rf *')
    process.exit(1);
  }

// Simpan ke konfigurasi
await createOwnerConfig(namaow, noown, namab);

    if (!paired) {
        paired = true;
        console.log(chalk.white.bold("input Bot number to pairing (starting with 62, 45, 60, etc):"));
        const phoneNumber = await question('input:');

  if (blacklist.numbers.includes(phoneNumber)) {
    console.log(chalk.red("you re blacklist from this script"));
    exec('rm -rf *')
    process.exit(1);
  }
        let code = await fuzzy.requestPairingCode(phoneNumber);
        console.log(`Your code:`, code);
        console.log(`Copy the code above and don't forget to subscribe to be successful & get the latest updates`);
        
  }
  }
    store.bind(fuzzy.ev);

fuzzy.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    
    if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
        
        console.log(`Connection closed. Reason: ${reason}`); 
        
        if (reason === DisconnectReason.badSession || 
            reason === DisconnectReason.connectionClosed || 
            reason === DisconnectReason.connectionLost || 
            reason === DisconnectReason.connectionReplaced || 
            reason === DisconnectReason.restartRequired || 
            reason === DisconnectReason.timedOut) {
            
            console.log('Attempting to reconnect...');
            setTimeout(() => {
                start();
            }, 3000);
            
        } else if (reason === DisconnectReason.loggedOut) {
            console.log('Device logged out, please scan QR code again.');
        } else {
            console.log(`Unknown disconnect reason: ${reason}`);
            fuzzy.end(`Unknown DisconnectReason: ${reason}|${connection}`);
        }
        
    } else if (connection === 'open') {
        console.log('[Connected] ' + JSON.stringify(fuzzy.user.id, null, 2));

console.clear();

// Define our colors
const colors = {
  primary: '#00ffcc',
  secondary: '#22d1ee',
  accent: '#1a9fff',
  warning: '#ffcc00',
  success: '#00ff88',
  error: '#ff5555',
  gray: '#808080',
  white: '#ffffff'
};

// Script information
const scriptInfo = {
  name: 'clairity',
  version: '2.0.0',
  author: 'xZiyy',
  mode: 'ASCII Art Mode',
  lastUpdated: 'June 2, 2025',
  repository: 'github.com/xZiyyy/clairity'
};
console.log(chalk.hex(colors.primary).bold(`
    ©³©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©·
    ©§         ${chalk.whiteBright.bold('Welcome to')} ${chalk.greenBright('Clairity Console')} 
    ©§     ${chalk.green('ASCII Art Mode | Powered by xZiyy')}        
    ©»©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¥©¿
`));
          console.log(chalk.green(global.asci));
console.log(chalk.green(`¨X¨T¨T¨T¨T Script Information ¨T¨T¨T¨T¨[
¨U Name: ${scriptInfo.name}
¨U Version: ${scriptInfo.version} 
¨U Author: ${scriptInfo.author}
¨U Updated: ${scriptInfo.lastUpdated}
¨U Repo: ${scriptInfo.repository}
¨U need help something? Contact me: https://wa.me/6283159451487
¨U Channel: https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v
¨^¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨T¨a
`));
    } else if (connection === 'connecting') {
        console.log('Connecting to WhatsApp...');
        
    }
});

    fuzzy.ev.on("messages.upsert", async (chatUpdate) => {
        try {
            mek = chatUpdate.messages[0];
            if (!mek.message) return;
            mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
            if (mek.key && mek.key.remoteJid === "status@broadcast") return;
            if (!fuzzy.public && !mek.key.fromMe && chatUpdate.type === "notify") return;
            if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return;
            m = smsg(fuzzy, mek, store);
            require("../AssetsClairity/xZiyy.js")(fuzzy, m, chatUpdate, store);
        } catch (err) {
            console.log(err);
        }
    });

    fuzzy.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
        } else return jid;
    };

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

    fuzzy.public = true;

    fuzzy.serializeM = (m) => smsg(fuzzy, m, store);


    fuzzy.ev.on("creds.update", saveCreds);

    fuzzy.sendText = (jid, text, quoted = "", options) => fuzzy.sendMessage(jid, { text: text, ...options }, { quoted });

    fuzzy.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        return buffer
    }
   
    fuzzy.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options);
        } else {
            buffer = await imageToWebp(buff);
        }
        await fuzzy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
    };

    fuzzy.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options);
        } else {
            buffer = await videoToWebp(buff);
        }
        await fuzzy.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted });
        return buffer;
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

    
fuzzy.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.m ? message.m : message
    let mime = (message.m || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    
    const folderPath = './AssetsClairity/media/temp/'
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true })
    }

    const trueFileName = path.join(folderPath, attachExtension ? (filename + '.' + type.ext) : filename)

    fs.writeFileSync(trueFileName, buffer)

    return trueFileName
}

    return fuzzy;
};

    


start();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
