/*

KAYANYA YANG DISINI GADA YG PERLU DI UBAH UBAH TERUNTUK USER SCRIPT
JIKA KAMU SUDAH PAHAM TENTANG BOT TIDAK MASALAH SIH
ERROR TANGGUNG SENDIRI

 Allert !
jangan asal ubah nanti eror
// eror? contact me : 6281291418274

jangan hapus Nama gw di Tq To dasar bocah Copy paste
// copy boleh asal apa? asal no delete w m
// apa itu wm: watermark
// apa itu watermark? fungsi google apa

anda bingung? masuk aja gc ini
https://chat.whatsapp.com/Lf6XnvJfYZdESpR9RfE
jangan sungkan² untuk bertanya

 ©Aypa Team
* [`Aprilia`](https://github.com/?)
* [`YanzBotz`](https://github.com/YanzBotz)
* [`Febriansyah`](https://github.com/FebriansyahXd)
* [`Aldi Fauzi`](https://github.com/xZiyyy) // ME xZiyy

Thanks For Using My Project and Thanks For u Has Respect The creator
*/

const process = require('process');
process.on('uncaughtException', console.error)

require('../media/settings/ownerConfig.js');
require('../media/settings/config')
const { default: makeWaSocket, proto, prepareWAMessageMedia, generateWAMessageFromContent, downloadContentFromMessage, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const { util, promisify } = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const path = require("path");
const yts = require ('yt-search');
const chalk = require('chalk')
const crypto = require('crypto')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("../library/TelegraPH")
const moment = require("moment-timezone")
const os = require('os');
const pino = require('pino')
const { pipeline } = require('stream')
const ytdl = require('ytdl-core')
const speed = require('performance-now')
let BodyForm = require("form-data")
const more = String.fromCharCode(8206); 
const readmore = more.repeat(4001);
const {
  jarak,
  ssweb,
  tiktok,
  PlayStore,
  BukaLapak,
  pinterest,
  stickersearch,
  lirik
} = require("../media/scraper/scraper")

const { toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  videoConvert,
  ttp,
  addExifAvatar } = require('../library/converter')
  

const { bytesToSize, getRandomFile, smsg, checkBandwidth, sleep, formatSize, getRandom, format, getBuffer, isUrl, jsonformat, nganuin, pickRandom, runtime, clockString, shorturl, formatp, fetchJson, color, getGroupAdmins } = require("../library/myfunc");
const { addExif } = require('../library/exif')
const yetedln = require("../media/scraper/yetedln")
const apiUrlw = 'https://clairity-nine.vercel.app'

// game
// read database
let tebaklagu = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let tebakjkt48 = []
let tebakff = []
let tebakml = []
let _family100 = db.data.game.family100 = []

const list = JSON.parse(fs.readFileSync("./media/database/list.json"))
const admin = JSON.parse(fs.readFileSync("./media/database/admin.json"))


module.exports = fuzzy = async (fuzzy, m, msg, chatUpdate, store, groupCache) => {
const { type, sender, pushname, isGroup } = m
try {
// no multi prefix
//must use prefix
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const prefix = /^[°zZ#$*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'

const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''   
const order = body.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await fuzzy.decodeJid(fuzzy.user.id);
const senderNumber = sender.split('@')[0]
const pureNumber = botNumber.split('@')[0];
const isBot = botNumber.includes(senderNumber)
const isCreator = (m && m?.sender && [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const q = args.join(' ')
const text = args.join(" ");
const chat = isGroup?[m.chat] : false
const mentionedJid = [m.sender]
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m?.quoted || m;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted?.msg || quoted);
const from = m.key.remoteJid
const isMedia = /image|video|sticker|audio/.test(mime);
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2') 
//group
const groupMetadata = m?.isGroup ? await fuzzy.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
    
const mentionByTag = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = msg.xtype == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""       
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : false 

let datauser = JSON.parse(fs.readFileSync('./media/database/datauser.json'))
const isAdmin = admin.includes(senderNumber)
const isUser = datauser.includes(m.sender)
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('isBanned' in user)) user.isBanned = false
        if (!('afkReason' in user)) user.afkReason = ''
} else global.db.data.users[m?.sender] = {
        afkTime: -1,
        afkReason: '',
        isBanned: false,
}

// chats
 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBannedChat' in chat)) chat.isBannedChat = false
 if (!('autoai' in chats)) chats.autoai = false
 if (!('welcome' in chats)) chats.welcome = false
} else global.db.data.chats[m.chat] = {
autoai: false,
isBannedChat: false,
welcome: false,
}
// setting
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
if (!('onlygrub' in setting)) setting.onlygrub = false
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
 onlygrub: false,
}
} catch (err) {
}




//======[ AUTO REGISTER ]=======\\
if (isCmd && !isUser) {
datauser.push(m.sender)
fs.writeFileSync('./media/database/datauser.json', JSON.stringify(datauser, null, 2))
}
//======[ SETTING ]=======\\
if ((!global.db.data.settings[botNumber]?.public && !isCreator && !isAdmin) || ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users) && ((global.db.data.chats[m.chat]?.isBannedChat || global.db.data.users[m.sender]?.isBanned) && !isCreator && !isAdmin))) return;

// AUTOREAD
if (db.data.settings[botNumber].autoread) { fuzzy.readMessages([m?.key]) }

if (isCmd) {
let check = list.find(e => e.cmd === command);
if (check) {
    if (check.image) {
        await fuzzy.sendMessage(m.chat, {
            image: { url: check.image },
            caption: check.respon
        }, { quoted: m });
    } else {
        await m.reply(check.respon);
    }
}

    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {}

    let category = categories.find(cat => cat.category === command);

    if (category) {
        if (category.items.length === 0) {
            return m.reply(`Belum ada menu dalam kategori *${category.category}*`);
        }

        let menuText = `*MENU ${category.category.toUpperCase()}*\n\n`;
        category.items.forEach((item, index) => {
            menuText += `${index + 1}. ${prefix}${item.cmd}\n`;
        });

        return m.reply(menuText);
    }

for (const cat of categories) {
    const item = cat.items.find(item => item.cmd === command);
    if (item) {
        if (item.image) {
            return fuzzy.sendMessage(m.chat, {
                image: { url: item.image },
                caption: item.respon
            }, { quoted: m });
        } else {
            return m.reply(item.respon);
        }
    }
}

    console.log(
        chalk.bgBlackBright.green.bold(' [ LOG ] ') +
        `\n╔═════════════════════════════════════════════════════╗\n` +
        `║ ${chalk.bgCyan.black.bold(` ${command.toUpperCase()} `)} \n` +
        `╠═════════════════════════════════════════════════════╣\n` +
        `║ ${chalk.hex('#FFA500').bold('⇝ From:')} ${chalk.green.underline(pushname)} ${chalk.magenta.bold(`(${m.sender})`)} \n` +
        `║ ${chalk.hex('#FFA500').bold('⇝ In:')} ${chalk.greenBright(m.isGroup ? groupName : 'Private Chat')} \n` +
        `║ ${chalk.gray(from)} \n` +
        `╚═════════════════════════════════════════════════════╝\n` +
        chalk.bgBlackBright.green(`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`)
    );
} else if (isCmd && !isBot) {
    console.log(
        chalk.bgBlackBright.green.bold(' [ LOG CHAT ] ') +
        `\n╔═════════════════════════════════════════════════════╗\n` +
        `║ ${chalk.bgCyan.black.bold(` ${body} `)} \n` +
        `╠═════════════════════════════════════════════════════╣\n` +
        `║ ${chalk.hex('#FFA500').bold('⇝ From:')} ${chalk.green.underline(pushname)} ${chalk.magenta.bold(`(${m.sender})`)} \n` +
        `║ ${chalk.hex('#FFA500').bold('⇝ In:')} ${chalk.greenBright(m.isGroup ? groupName : 'Private Chat')} \n` +
        `║ ${chalk.gray(from)} \n` +
        `╚═════════════════════════════════════════════════════╝\n` +
        chalk.bgBlackBright.green(`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`)
    );
}
const reply = async (teks) => {
    try {
      fuzzy.sendMessage(
        m.chat, {
          text: teks,
          contextInfo: {
            externalAdReply: {
              body: `Hi ${pushname}`, // Isi deskripsi atau teks tambahan
              containsAutoReply: true, // Menunjukkan ini balasan otomatis (opsional)
              mediaType: 1, // Tipe media (1 untuk gambar, 2 untuk video, dll.)
              mediaUrl: "", // URL media atau link utama
              renderLargerThumbnail: false, // Membuat thumbnail lebih besar
              showAdAttribution: true, // Menampilkan label "Ad" (opsional)
              sourceUrl: "", // URL sumber yang akan diakses
              thumbnailUrl: global.imgUrl, // URL thumbnail
              title: botname, // Judul link preview
            },
          },
        }, {
          quoted: m
        }
      );
    } catch (error) {
        console.error('Error saat mengirim pesan:', error);
        m.reply('Gagal mengirim pesan, silakan coba lagi.');
    }
};

//======[ PLUGIN ]=======\\
(function(_0x32f062,_0x2968c9){function _0x32cc16(_0x4aed6e,_0x482f47,_0x46e87a,_0x31fc3a){return _0x35ad(_0x31fc3a- -0x28e,_0x4aed6e);}const _0x58e2f5=_0x32f062();function _0x1ce63b(_0x255ae9,_0x381b2d,_0x378e7d,_0x25f14e){return _0x35ad(_0x255ae9-0xdc,_0x25f14e);}while(!![]){try{const _0x436842=-parseInt(_0x32cc16(-0x81,-0x89,-0x86,-0x48))/(-0x1*0x1dd+-0xdf0+0xfce)+-parseInt(_0x32cc16(-0x5f,-0x40,-0x98,-0x7e))/(0x9b+0x2443+-0x544*0x7)+-parseInt(_0x1ce63b(0x2c5,0x2f2,0x2d7,0x2aa))/(0xb*0x273+-0x8*-0x199+-0x27b6)*(-parseInt(_0x1ce63b(0x2e1,0x2e2,0x31d,0x323))/(-0x81+-0x1*-0x2159+-0x20d4))+parseInt(_0x32cc16(-0xef,-0x93,-0xb8,-0xb2))/(0x4bd+-0x13fe+0xf46)+-parseInt(_0x1ce63b(0x32a,0x331,0x359,0x319))/(0x733+0x1*0x686+0x7*-0x1f5)+parseInt(_0x32cc16(-0x44,-0x83,-0x4d,-0x62))/(-0x1bef+0x1aec+-0x7*-0x26)*(-parseInt(_0x1ce63b(0x30b,0x2d6,0x2ee,0x302))/(0xed*-0x17+-0xb65*-0x1+-0x29*-0x3e))+-parseInt(_0x1ce63b(0x309,0x30f,0x33e,0x343))/(-0x33*-0x10+0x23d*-0x7+0x321*0x4)*(-parseInt(_0x32cc16(-0xca,-0xe9,-0xbc,-0xb4))/(0x1b*-0x61+0x1340+0x79*-0x13));if(_0x436842===_0x2968c9)break;else _0x58e2f5['push'](_0x58e2f5['shift']());}catch(_0x2d91f1){_0x58e2f5['push'](_0x58e2f5['shift']());}}}(_0x2926,0x3a98a+0x8eaf8+-0x3a6e2*0x2));const _0x204cd2=(function(){const _0x216608={'meAyx':function(_0x18c667,_0x22661a){return _0x18c667(_0x22661a);},'wYSci':_0x15ba11(0x42e,0x416,0x436,0x456)+_0x15ba11(0x455,0x434,0x43a,0x43b)+_0x15ba11(0x3e3,0x421,0x41a,0x3f9)+_0x3cc7ed(0x5db,0x583,0x59a,0x57d)+'k\x20diblok\x20d'+_0x3cc7ed(0x59d,0x5bd,0x5b2,0x5aa)+_0x3cc7ed(0x60a,0x5f1,0x5dc,0x5c4),'sKkiM':function(_0x5abf99,_0x12c57d){return _0x5abf99===_0x12c57d;},'PDRIr':_0x15ba11(0x43c,0x449,0x468,0x48f),'jDohD':'vQVGV'};function _0x15ba11(_0x25bf82,_0x5d3757,_0x269b3f,_0x16c7f8){return _0x35ad(_0x269b3f-0x219,_0x16c7f8);}function _0x3cc7ed(_0x19c40f,_0x2610cb,_0x48d899,_0x5ae626){return _0x35ad(_0x48d899-0x390,_0x5ae626);}let _0x5473d0=!![];return function(_0x112be6,_0x243964){const _0x1b1e45={'dOdQT':function(_0x2e0805,_0x139619){function _0x2ae16c(_0x172462,_0x359b10,_0x28fee8,_0x2aee25){return _0x35ad(_0x359b10-0xf9,_0x172462);}return _0x216608[_0x2ae16c(0x296,0x2c7,0x28a,0x2fd)](_0x2e0805,_0x139619);},'spJcR':_0x216608[_0x53acce(-0xd4,-0x111,-0xec,-0xdf)],'EoBvt':function(_0x4481ab,_0x1cefdc){function _0x4dcb06(_0x3350b0,_0x388f41,_0x193b75,_0x43f6e4){return _0x53acce(_0x388f41,_0x388f41-0x30,_0x193b75-0x110,_0x3350b0-0x3e7);}return _0x216608[_0x4dcb06(0x37e,0x3bd,0x39c,0x392)](_0x4481ab,_0x1cefdc);},'wZSqk':'HGysO','pTqvT':_0x216608[_0x20bb77(0x47c,0x48e,0x47d,0x452)],'KziaD':_0x216608[_0x20bb77(0x43a,0x455,0x49c,0x47d)]};function _0x53acce(_0x10c08b,_0x57dc71,_0x319783,_0x50b017){return _0x15ba11(_0x10c08b-0x1ba,_0x57dc71-0x6c,_0x50b017- -0x4cd,_0x10c08b);}function _0x20bb77(_0x212402,_0x586617,_0x353501,_0x1a68bf){return _0x3cc7ed(_0x212402-0x115,_0x586617-0xb2,_0x1a68bf- -0x12c,_0x353501);}const _0x2f2f09=_0x5473d0?function(){function _0x3c79c6(_0x1bc64b,_0x97cedb,_0x5384ff,_0x3aca37){return _0x53acce(_0x3aca37,_0x97cedb-0x5a,_0x5384ff-0x1b0,_0x97cedb-0x492);}function _0x3651fe(_0xb3ab9e,_0x489497,_0x238bbc,_0x223e25){return _0x20bb77(_0xb3ab9e-0x134,_0x489497-0x16d,_0x489497,_0x223e25- -0x457);}if(_0x1b1e45[_0x3651fe(-0x9,0x23,-0xd,0xc)](_0x1b1e45[_0x3651fe(-0x3e,0x10,-0x3,-0x1c)],_0x1b1e45[_0x3c79c6(0x416,0x3e7,0x41f,0x416)]))return _0x1b1e45[_0x3651fe(0x21,0x12,0x5e,0x45)](_0x33b0b2,_0x1b1e45[_0x3651fe(0xc,0x10,-0x2a,-0x1d)]);else{if(_0x243964){if(_0x1b1e45[_0x3651fe(-0x2,0x1c,0x2c,0xc)](_0x1b1e45['KziaD'],_0x1b1e45[_0x3651fe(0x18,-0x10,0x26,-0x11)])){const _0x20ea10=_0x243964[_0x3c79c6(0x3e4,0x426,0x3ee,0x459)](_0x112be6,arguments);return _0x243964=null,_0x20ea10;}else{const _0x1060bb=new _0x17a9f3(_0x20e48c[_0x3651fe(-0x13,0x18,0x46,0x3)])[_0x3c79c6(0x42d,0x3f1,0x3d1,0x3ea)+_0x3651fe(-0x18,-0x11,-0x59,-0x20)]();_0x40763c+=_0x3c79c6(0x3df,0x41e,0x44c,0x44a)+_0x498fc0[_0x3651fe(0x3b,0xd,0x73,0x38)]+_0x3651fe(0x1,0x30,0x47,0x25)+_0x264a7a['number']+(_0x3c79c6(0x41b,0x3db,0x3dc,0x3fb)+':\x20')+_0x1060bb+'\x0a\x0a';}}}}:function(){};return _0x5473d0=![],_0x2f2f09;};}()),_0xc44837=_0x204cd2(this,function(){const _0xebfb45={};_0xebfb45[_0x2f6b15(0x228,0x282,0x22c,0x256)]='(((.+)+)+)'+'+$';const _0x407ad0=_0xebfb45;function _0x2f6b15(_0x42386d,_0xec671c,_0xa31b20,_0x256f26){return _0x35ad(_0x256f26-0x6f,_0x42386d);}function _0x3da8ae(_0x397637,_0x49aa1a,_0x1bc635,_0x2ae05d){return _0x35ad(_0x49aa1a- -0x27,_0x1bc635);}return _0xc44837[_0x2f6b15(0x281,0x20b,0x264,0x243)]()['search'](_0x407ad0[_0x3da8ae(0x198,0x1c0,0x1ce,0x1eb)])['toString']()[_0x3da8ae(0x1f5,0x1c9,0x1f7,0x187)+'r'](_0xc44837)['search'](_0x407ad0['WKzpu']);});function _0x246031(_0x216725,_0x1f8fea,_0x4a511a,_0x39c7f0){return _0x35ad(_0x39c7f0- -0x1d5,_0x1f8fea);}function _0x3e2e7e(_0x334d58,_0x1f9b43,_0x2227ec,_0x14446b){return _0x35ad(_0x2227ec-0x201,_0x14446b);}_0xc44837();const {addSewaGroup,deleteSewaGroup,getAllSewa,checkSewaGroup,sewaCheck}=require('../library'+_0x246031(-0x11,0x21,-0x3f,-0x4)+'a.js');let sewa=require(_0x246031(0x26,0x25,0x6,0x23)+'atabase/se'+'wa.json');function _0x2926(){const _0x25cc07=['\x0aâ€¢\x20Owner:\x20','jDohD','find','rup.','ihapus.','Gagal\x20ambi','mor|linkgc','https://xz','mediaUrl','l\
