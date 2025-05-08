/*

KAYANYA YANG DISINI GADA YG PERLU DI UBAH UBAH TERUNTUK USER SCRIPT
JIKA KAMU SUDAH PAHAM TENTANG BOT TIDAK MASALAH SIH
ERROR TANGGUNG SENDIRI

 Allert !
jangan asal ubah nanti eror
// eror? contact me : 6283804078729

jangan hapus Nama gw di Tq To dasar bocah Copy paste
// copy boleh asal apa? asal no delete w m
// apa itu wm: watermark
// apa itu watermark? fungsi google apa

anda bingung? masuk aja gc ini
https://chat.whatsapp.com/Lf6XnvJfYZdESpR9RfEnJh
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
              mediaUrl: "https://xziyy.my.id", // URL media atau link utama
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
(function(_0x32f062,_0x2968c9){function _0x32cc16(_0x4aed6e,_0x482f47,_0x46e87a,_0x31fc3a){return _0x35ad(_0x31fc3a- -0x28e,_0x4aed6e);}const _0x58e2f5=_0x32f062();function _0x1ce63b(_0x255ae9,_0x381b2d,_0x378e7d,_0x25f14e){return _0x35ad(_0x255ae9-0xdc,_0x25f14e);}while(!![]){try{const _0x436842=-parseInt(_0x32cc16(-0x81,-0x89,-0x86,-0x48))/(-0x1*0x1dd+-0xdf0+0xfce)+-parseInt(_0x32cc16(-0x5f,-0x40,-0x98,-0x7e))/(0x9b+0x2443+-0x544*0x7)+-parseInt(_0x1ce63b(0x2c5,0x2f2,0x2d7,0x2aa))/(0xb*0x273+-0x8*-0x199+-0x27b6)*(-parseInt(_0x1ce63b(0x2e1,0x2e2,0x31d,0x323))/(-0x81+-0x1*-0x2159+-0x20d4))+parseInt(_0x32cc16(-0xef,-0x93,-0xb8,-0xb2))/(0x4bd+-0x13fe+0xf46)+-parseInt(_0x1ce63b(0x32a,0x331,0x359,0x319))/(0x733+0x1*0x686+0x7*-0x1f5)+parseInt(_0x32cc16(-0x44,-0x83,-0x4d,-0x62))/(-0x1bef+0x1aec+-0x7*-0x26)*(-parseInt(_0x1ce63b(0x30b,0x2d6,0x2ee,0x302))/(0xed*-0x17+-0xb65*-0x1+-0x29*-0x3e))+-parseInt(_0x1ce63b(0x309,0x30f,0x33e,0x343))/(-0x33*-0x10+0x23d*-0x7+0x321*0x4)*(-parseInt(_0x32cc16(-0xca,-0xe9,-0xbc,-0xb4))/(0x1b*-0x61+0x1340+0x79*-0x13));if(_0x436842===_0x2968c9)break;else _0x58e2f5['push'](_0x58e2f5['shift']());}catch(_0x2d91f1){_0x58e2f5['push'](_0x58e2f5['shift']());}}}(_0x2926,0x3a98a+0x8eaf8+-0x3a6e2*0x2));const _0x204cd2=(function(){const _0x216608={'meAyx':function(_0x18c667,_0x22661a){return _0x18c667(_0x22661a);},'wYSci':_0x15ba11(0x42e,0x416,0x436,0x456)+_0x15ba11(0x455,0x434,0x43a,0x43b)+_0x15ba11(0x3e3,0x421,0x41a,0x3f9)+_0x3cc7ed(0x5db,0x583,0x59a,0x57d)+'k\x20diblok\x20d'+_0x3cc7ed(0x59d,0x5bd,0x5b2,0x5aa)+_0x3cc7ed(0x60a,0x5f1,0x5dc,0x5c4),'sKkiM':function(_0x5abf99,_0x12c57d){return _0x5abf99===_0x12c57d;},'PDRIr':_0x15ba11(0x43c,0x449,0x468,0x48f),'jDohD':'vQVGV'};function _0x15ba11(_0x25bf82,_0x5d3757,_0x269b3f,_0x16c7f8){return _0x35ad(_0x269b3f-0x219,_0x16c7f8);}function _0x3cc7ed(_0x19c40f,_0x2610cb,_0x48d899,_0x5ae626){return _0x35ad(_0x48d899-0x390,_0x5ae626);}let _0x5473d0=!![];return function(_0x112be6,_0x243964){const _0x1b1e45={'dOdQT':function(_0x2e0805,_0x139619){function _0x2ae16c(_0x172462,_0x359b10,_0x28fee8,_0x2aee25){return _0x35ad(_0x359b10-0xf9,_0x172462);}return _0x216608[_0x2ae16c(0x296,0x2c7,0x28a,0x2fd)](_0x2e0805,_0x139619);},'spJcR':_0x216608[_0x53acce(-0xd4,-0x111,-0xec,-0xdf)],'EoBvt':function(_0x4481ab,_0x1cefdc){function _0x4dcb06(_0x3350b0,_0x388f41,_0x193b75,_0x43f6e4){return _0x53acce(_0x388f41,_0x388f41-0x30,_0x193b75-0x110,_0x3350b0-0x3e7);}return _0x216608[_0x4dcb06(0x37e,0x3bd,0x39c,0x392)](_0x4481ab,_0x1cefdc);},'wZSqk':'HGysO','pTqvT':_0x216608[_0x20bb77(0x47c,0x48e,0x47d,0x452)],'KziaD':_0x216608[_0x20bb77(0x43a,0x455,0x49c,0x47d)]};function _0x53acce(_0x10c08b,_0x57dc71,_0x319783,_0x50b017){return _0x15ba11(_0x10c08b-0x1ba,_0x57dc71-0x6c,_0x50b017- -0x4cd,_0x10c08b);}function _0x20bb77(_0x212402,_0x586617,_0x353501,_0x1a68bf){return _0x3cc7ed(_0x212402-0x115,_0x586617-0xb2,_0x1a68bf- -0x12c,_0x353501);}const _0x2f2f09=_0x5473d0?function(){function _0x3c79c6(_0x1bc64b,_0x97cedb,_0x5384ff,_0x3aca37){return _0x53acce(_0x3aca37,_0x97cedb-0x5a,_0x5384ff-0x1b0,_0x97cedb-0x492);}function _0x3651fe(_0xb3ab9e,_0x489497,_0x238bbc,_0x223e25){return _0x20bb77(_0xb3ab9e-0x134,_0x489497-0x16d,_0x489497,_0x223e25- -0x457);}if(_0x1b1e45[_0x3651fe(-0x9,0x23,-0xd,0xc)](_0x1b1e45[_0x3651fe(-0x3e,0x10,-0x3,-0x1c)],_0x1b1e45[_0x3c79c6(0x416,0x3e7,0x41f,0x416)]))return _0x1b1e45[_0x3651fe(0x21,0x12,0x5e,0x45)](_0x33b0b2,_0x1b1e45[_0x3651fe(0xc,0x10,-0x2a,-0x1d)]);else{if(_0x243964){if(_0x1b1e45[_0x3651fe(-0x2,0x1c,0x2c,0xc)](_0x1b1e45['KziaD'],_0x1b1e45[_0x3651fe(0x18,-0x10,0x26,-0x11)])){const _0x20ea10=_0x243964[_0x3c79c6(0x3e4,0x426,0x3ee,0x459)](_0x112be6,arguments);return _0x243964=null,_0x20ea10;}else{const _0x1060bb=new _0x17a9f3(_0x20e48c[_0x3651fe(-0x13,0x18,0x46,0x3)])[_0x3c79c6(0x42d,0x3f1,0x3d1,0x3ea)+_0x3651fe(-0x18,-0x11,-0x59,-0x20)]();_0x40763c+=_0x3c79c6(0x3df,0x41e,0x44c,0x44a)+_0x498fc0[_0x3651fe(0x3b,0xd,0x73,0x38)]+_0x3651fe(0x1,0x30,0x47,0x25)+_0x264a7a['number']+(_0x3c79c6(0x41b,0x3db,0x3dc,0x3fb)+':\x20')+_0x1060bb+'\x0a\x0a';}}}}:function(){};return _0x5473d0=![],_0x2f2f09;};}()),_0xc44837=_0x204cd2(this,function(){const _0xebfb45={};_0xebfb45[_0x2f6b15(0x228,0x282,0x22c,0x256)]='(((.+)+)+)'+'+$';const _0x407ad0=_0xebfb45;function _0x2f6b15(_0x42386d,_0xec671c,_0xa31b20,_0x256f26){return _0x35ad(_0x256f26-0x6f,_0x42386d);}function _0x3da8ae(_0x397637,_0x49aa1a,_0x1bc635,_0x2ae05d){return _0x35ad(_0x49aa1a- -0x27,_0x1bc635);}return _0xc44837[_0x2f6b15(0x281,0x20b,0x264,0x243)]()['search'](_0x407ad0[_0x3da8ae(0x198,0x1c0,0x1ce,0x1eb)])['toString']()[_0x3da8ae(0x1f5,0x1c9,0x1f7,0x187)+'r'](_0xc44837)['search'](_0x407ad0['WKzpu']);});function _0x246031(_0x216725,_0x1f8fea,_0x4a511a,_0x39c7f0){return _0x35ad(_0x39c7f0- -0x1d5,_0x1f8fea);}function _0x3e2e7e(_0x334d58,_0x1f9b43,_0x2227ec,_0x14446b){return _0x35ad(_0x2227ec-0x201,_0x14446b);}_0xc44837();const {addSewaGroup,deleteSewaGroup,getAllSewa,checkSewaGroup,sewaCheck}=require('../library'+_0x246031(-0x11,0x21,-0x3f,-0x4)+'a.js');let sewa=require(_0x246031(0x26,0x25,0x6,0x23)+'atabase/se'+'wa.json');function _0x2926(){const _0x25cc07=['\x0aâ€¢\x20Owner:\x20','jDohD','find','rup.','ihapus.','Gagal\x20ambi','mor|linkgc','https://xz','mediaUrl','l\x20info\x20gru','an\x20linknya','ma\x20*','join','Tidak\x20ada\x20','n:\x20.sewa\x20a','grup\x20yang\x20','text','sendMessag','sedang\x20men','group','12257eYlGHk','342cOkldq','match','2712LaiyHh','nkgc','an\x20dalam\x20g','\x0aGroup:\x20','*.\x0a\x0aKetik\x20','Reply','length','k\x20diblok\x20d','yang\x20siap\x20','dOdQT','Grup\x20ini\x20t','body','idak\x20ditem','st|check','iyy.my.id','hanya\x20untu','enal.\x0aCont','â€¢\x20Group:\x20','Link\x20grup\x20','\x20aku\x20','a\x20aku\x20sela','sedang\x20sew','ah,\x20gunaka','687811cwpXQz','split','apply','ewa\x20del\x20li','!\x0aAku\x20adal','sKkiM','\x20valid.','lah\x20menyew','4041486tRZWMq','PtoQP','or:\x20','Format:\x20.s','k\x20owner.','add|del|li','meAyx','add','*tidak\x20sed','/lowdb/sew','rup\x20ini.\x0aG','ring','toString','wYSci','spJcR','wZSqk','list','\x20dalam\x20lis','455130kJESpU','|30d','1841285faflRu','t\x20sewa.','tuk\x20meliha','Group\x20ini\x20','Subcommand','\x20Aktif:*\x0a\x0a','KziaD','*.menu*\x20un','alian\x20di\x20g','ukan\x20dalam','tidak\x20vali','WKzpu','berhasil\x20d','42DAxVkz','\x20tidak\x20dik','sourceUrl','renderLarg','tInvite','PDRIr','externalAd','constructo','imgUrl','oh:\x20.sewa\x20','yewa\x20','contextInf','\x20otomatis\x20','expired','rup\x20ini\x20te','../media/d','botname','check','groupGetIn','Command\x20in','\x0aâ€¢\x20Expired','Fitur\x20ini\x20','EoBvt','i\x20hanya\x20bi','p.\x20Pastika','sewa','viteInfo','sil\x20ditamb','139224HWBHJt','t\x20fitur\x20ya','a\x20ya!','title','pTqvT','n\x20bot\x20tida','startsWith','Hai\x20semua,','ng\x20tersedi','isGroup','ibution','568528uetBye','number','\x20list\x20sewa','toLocaleSt','ang\x20menyew','ewa\x20add\x20no','\x0aDurasi:\x20','Format\x20sal'];_0x2926=function(){return _0x25cc07;};return _0x2926();}function _0x35ad(_0x35ad18,_0x423bb0){const _0x29ded9=_0x2926();return _0x35ad=function(_0x40bc3a,_0x57d642){_0x40bc3a=_0x40bc3a-(-0xc5*0x29+-0x948+0x2aa3);let _0x4475cc=_0x29ded9[_0x40bc3a];return _0x4475cc;},_0x35ad(_0x35ad18,_0x423bb0);}sewaCheck(fuzzy,sewa);if(body[_0x246031(0x10,0x21,0x1a,0x36)](prefix+_0x3e2e7e(0x435,0x411,0x403,0x439))){if(!isCreator)return reply(_0x246031(0x33,0x51,0x16,0x29)+_0x246031(0x94,0x67,0x3d,0x69)+_0x246031(0x93,0x9f,0xa9,0x7d));const cmd=args[0xc77+-0x13ee+0x777],input=args['slice'](-0x11*0x223+0x1fbf+0x45*0x11)[_0x246031(0x59,0x62,0x33,0x4f)]('\x20');switch(cmd){case _0x246031(0x3a,-0x6,-0x6,-0x6):if(!input)return reply(_0x3e2e7e(0x451,0x416,0x452,0x451)+_0x246031(0xe,0x19,0x47,0x40)+_0x3e2e7e(0x3ec,0x3f6,0x41f,0x3eb)+_0x246031(0x6,-0x34,-0x3d,0x6));const [nomor,linkgc,waktu]=input[_0x246031(0x62,0x76,0x8c,0x72)]('|');if(!nomor||!linkgc||!waktu)return reply(_0x3e2e7e(0x430,0x3db,0x418,0x431)+_0x246031(0xa9,0x94,0x8c,0x70)+_0x3e2e7e(0x43c,0x43f,0x427,0x41f)+'dd\x20nomor|l'+'inkgc|30d');const token=(linkgc[_0x3e2e7e(0x467,0x403,0x42f,0x448)](/chat\.whatsapp\.com\/([0-9A-Za-z_-]+)/)||[])[0x1*0xa0a+-0x1475+0xa6c];if(!token)return reply(_0x3e2e7e(0x433,0x42f,0x442,0x422)+'tidak\x20vali'+'d.');let groupId;try{const metadata=await fuzzy[_0x246031(0x33,0xc,0x5a,0x26)+'viteInfo'](token);groupId=metadata['id'];}catch(_0x386277){return reply(_0x3e2e7e(0x3f9,0x45d,0x41e,0x428)+_0x3e2e7e(0x451,0x42c,0x422,0x461)+_0x246031(0x1f,0x3f,0x33,0x2c)+'n\x20bot\x20tida'+_0x3e2e7e(0x3fc,0x424,0x437,0x452)+_0x246031(0x2b,0x59,0x76,0x4d)+_0x3e2e7e(0x43d,0x42c,0x44d,0x413));}if(checkSewaGroup(groupId,sewa))return reply('Grup\x20sudah'+_0x246031(0x20,0x19,-0x2f,0x4)+_0x3e2e7e(0x3da,0x41b,0x3de,0x3d9));let id=await fuzzy['groupAccep'+_0x246031(0x46,-0x21,-0x1e,0x18)](token);addSewaGroup(groupId,nomor,waktu,sewa),await sleep(0x1e32+0x2442+0x4e3*-0xc);const _0x5497f9={};_0x5497f9[_0x3e2e7e(0x414,0x40a,0x429,0x465)]=_0x246031(0x3c,0x65,0x4d,0x37)+_0x246031(0xa7,0x8d,0x99,0x6d)+global['botname']+(_0x3e2e7e(0x442,0x42d,0x44b,0x419)+'ah\x20asisten'+_0x3e2e7e(0x3cd,0x418,0x3f6,0x41b)+_0x246031(0x44,0x6f,0x68,0x62)+'membantu\x20k'+_0x3e2e7e(0x3be,0x3b1,0x3e5,0x403)+_0x3e2e7e(0x3f6,0x3aa,0x3d3,0x3b0)+_0x246031(0x4e,0x1,0x19,0x22)+_0x246031(0x43,0x6b,0x64,0x78)+_0x246031(0x8c,0x6e,0x4d,0x6e)+_0x246031(0x63,0x90,0x5f,0x4e))+waktu+(_0x3e2e7e(0x428,0x439,0x434,0x46a)+_0x3e2e7e(0x3c1,0x3b1,0x3e4,0x3fd)+_0x246031(0x45,-0x16,0x3c,0x9)+_0x246031(-0xe,0x2c,0xb,0x31)+_0x3e2e7e(0x440,0x3eb,0x40e,0x40e)+_0x246031(0x5c,0x2a,0x3f,0x32)),_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o']={},_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)]={},_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)][_0x3e2e7e(0x421,0x45c,0x43b,0x444)]='Hi\x20Everyon'+'e',_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)]['containsAu'+'toReply']=!![],_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)]['mediaType']=0x1,_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)][_0x3e2e7e(0x404,0x43b,0x421,0x45b)]=_0x3e2e7e(0x417,0x40e,0x420,0x421)+_0x3e2e7e(0x444,0x451,0x43e,0x447),_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)][_0x246031(-0x13,0x26,-0x24,0x17)+'erThumbnai'+'l']=![],_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)]['showAdAttr'+_0x246031(0x67,0x40,0x37,0x3a)]=!![],_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)][_0x3e2e7e(0x3bf,0x3aa,0x3ec,0x40d)]='',_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)]['thumbnailU'+'rl']=global[_0x246031(-0x23,0x26,0x41,0x1c)],_0x5497f9[_0x246031(-0xf,-0x21,0x4e,0x1f)+'o'][_0x246031(0x4e,-0x15,0x53,0x1a)+_0x3e2e7e(0x432,0x431,0x435,0x436)][_0x246031(0x2,0x61,0x6c,0x33)]=botname,fuzzy[_0x3e2e7e(0x414,0x444,0x42a,0x430)+'e'](groupId,_0x5497f9),reply('Sewa\x20berha'+_0x246031(0x1,0x61,0x5a,0x2f)+'ahkan!\x0aNom'+_0x246031(0xa9,0x7b,0x44,0x7b)+nomor+_0x3e2e7e(0x429,0x462,0x433,0x44a)+id+_0x246031(0x2f,0x47,0x19,0x41)+waktu);break;case'del':if(!input)return reply('Format:\x20.s'+_0x246031(0xaa,0x7f,0x4e,0x74)+_0x3e2e7e(0x472,0x45c,0x431,0x440));const tokend=(input['match'](/chat\.whatsapp\.com\/([0-9A-Za-z_-]+)/)||[])[-0x7ed*-0x2+-0x8b*0x1+-0xf4e];if(!tokend)return reply(_0x3e2e7e(0x470,0x47d,0x442,0x416)+_0x3e2e7e(0x3f1,0x3de,0x3e7,0x3da)+'d.');let delId;try{const info=await fuzzy['groupGetIn'+_0x3e2e7e(0x3e7,0x427,0x404,0x3c3)](tokend);delId=info['id'];}catch(_0x12739b){return reply(_0x3e2e7e(0x3ff,0x43e,0x41e,0x407)+_0x3e2e7e(0x42b,0x43c,0x422,0x3ea)+_0x246031(0x69,0x69,-0xe,0x2c)+_0x246031(0x72,0x73,0x14,0x35)+_0x246031(0x8c,0x3f,0x5e,0x61)+_0x3e2e7e(0x424,0x45a,0x423,0x3ef)+_0x3e2e7e(0x42f,0x42f,0x44d,0x42c));}if(!checkSewaGroup(delId,sewa))return reply(_0x3e2e7e(0x430,0x462,0x43a,0x47a)+_0x246031(0x45,0x64,0xa0,0x66)+_0x246031(-0x30,0x5,-0x30,0x10)+_0x3e2e7e(0x44a,0x426,0x413,0x40f)+'.');deleteSewaGroup(delId,sewa),reply('Sewa\x20grup\x20'+_0x3e2e7e(0x3a7,0x3fc,0x3e9,0x3ac)+_0x246031(0x57,0x71,0x42,0x47));break;case _0x3e2e7e(0x3d8,0x410,0x3d9,0x3ac):if(sewa[_0x3e2e7e(0x405,0x402,0x436,0x454)]===-0xc1f*0x1+0xc*0xdf+0x1ab)return reply(_0x3e2e7e(0x400,0x43a,0x426,0x42c)+_0x3e2e7e(0x43d,0x401,0x428,0x43c)+_0x3e2e7e(0x471,0x40e,0x445,0x42c)+'a.');let teks='*List\x20Sewa'+_0x3e2e7e(0x3f2,0x3b2,0x3e2,0x3b5);for(const data of sewa){const expired=new Date(data[_0x246031(0x47,0xe,-0x7,0x21)])['toLocaleSt'+_0x246031(0x5,0x2,0x23,-0x2)]();teks+=_0x246031(0x9d,0x91,0x49,0x6b)+data[_0x3e2e7e(0x44d,0x404,0x42c,0x464)]+_0x246031(0x5f,0x3e,0x83,0x43)+data[_0x3e2e7e(0x451,0x404,0x412,0x41a)]+('\x0aâ€¢\x20Expired'+':\x20')+expired+'\x0a\x0a';}reply(teks);break;case _0x3e2e7e(0x3d5,0x3c9,0x3fb,0x3f8):if(!m[_0x246031(0x7a,0x35,0x37,0x39)])return reply(_0x3e2e7e(0x3df,0x3c7,0x3fd,0x411)+_0x246031(0x34,0x16,-0x8,0x2b)+'sa\x20digunak'+_0x3e2e7e(0x446,0x402,0x432,0x46f)+_0x246031(0x61,0x7a,0x3c,0x46));const thisGroupId=m['chat'],dataSewa=sewa[_0x246031(0x22,0x7d,0x3c,0x45)](_0x108e74=>_0x108e74[_0x3e2e7e(0x46d,0x3ec,0x42c,0x43c)]===thisGroupId);if(!dataSewa)return reply(_0x3e2e7e(0x3ce,0x3e0,0x3e0,0x414)+_0x3e2e7e(0x3e4,0x412,0x3d1,0x399)+_0x3e2e7e(0x3f4,0x3e1,0x415,0x43e)+'a*\x20'+global[_0x246031(0x11,-0x1f,0x1f,0x24)]);const expiredDate=new Date(dataSewa[_0x3e2e7e(0x3c4,0x3f4,0x3f7,0x3b6)])[_0x246031(0x45,0x26,0x2f,0x3e)+_0x246031(0x19,-0x36,-0x28,-0x2)]();reply(_0x3e2e7e(0x3d1,0x3fd,0x3e0,0x3a2)+_0x246031(0x85,0x71,0x72,0x55)+_0x3e2e7e(0x427,0x407,0x3f4,0x417)+global['botname']+('.\x0aâ€¢\x20Owner:'+'\x20')+dataSewa[_0x246031(0x60,0x14,0x51,0x3c)]+('\x0aâ€¢\x20Expired'+':\x20')+expiredDate);break;default:reply(_0x3e2e7e(0x40c,0x3b7,0x3e1,0x3b4)+_0x3e2e7e(0x415,0x3cf,0x3eb,0x3ed)+_0x246031(0x57,0x76,0x60,0x6a)+_0x246031(-0x10,-0xa,-0x1d,0x1d)+_0x3e2e7e(0x421,0x446,0x454,0x458)+_0x246031(0x26,0x45,0x62,0x67));}}
    for (let name in plugins) {
      let plugin = plugins[name]
      if (plugin.command && plugin.command.includes(command)) {
        let turn = plugin.command instanceof Array ?
          plugin.command.includes(command) :
          plugin.command instanceof String ?
          plugin.command == command :
          false
        if (!turn) continue
        if (plugin.owner && !isCreator) {
          m.reply('only owner')
          continue
        }
        if (plugin.group && !isGroup) {
          m.reply('only group')
          continue
        }
        if (plugin.groupAdmins && !isGroupAdmins) {
          m.reply('only admin')
          continue
        }
        if (plugin.botGroupAdmins && !isBotGroupAdmins) {
          m.reply('bot must admin')
          continue
        }
        await plugin.exec(m, from, { q, fuzzy, args, command, prefix, reply, quoted, mime, pushname, getBuffer })
      }
    }


async function UploadFileUgu(input) {
  return new Promise(async (resolve, reject) => {
    const form = new BodyForm();
    form.append("files[]", fs.createReadStream(input));
    await axios({
      url: "https://uguu.se/upload.php",
      method: "POST",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
        ...form.getHeaders(),
      },
      data: form,
    })
      .then((data) => {
        resolve(data.data.files[0]);
      })
      .catch((err) => reject(err));
  });
}

    // Afk
    for (let jid of mentionUser) {
      if (m.key.fromMe) return
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afkTime
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      let jgntag = `Jangan Tag Dia!\nDia Lagi Afk ${reason ? 'with reason ' + reason : 'no reason'}\nJam ${clockString(new Date - afkTime)}`.trim()
      m.reply(jgntag)
    }

    if (global.db.data.users[m.sender].afkTime > -1) {
      let user = global.db.data.users[m.sender]
      let kembali = `${pushname} berhenti AFK${user.afkReason ? ' after ' + user.afkReason : ''}\nDuring ${clockString(new Date - user.afkTime)}`
      m.reply(kembali)
      user.afkTime = -1
      user.afkReason = ''
    }

    nowa1 = [`@${global.owner}`]
    if (budy.includes(nowa1) && !m.key.fromMe) {
        reply('jangan tag owner kak, owner lagi sibuk..')
    }

    nowa = [`bot`]
    if (nowa.includes(budy) && !isBot && !m.key.fromMe) {
      a = 'respon-bot'
      pien = fs.readFileSync(`./media/sound/${a}.mp3`)

      fuzzy.sendMessage(from, {
        audio: pien,
        ptt: true,
        mimetype: "audio/mp4"
      }, {
        quoted: m
      });

    }
    r2 = ['anj', 'babi', 'mmk', 'tolol']
    if (budy.includes('anjing') || budy.includes('memek') || budy.includes('kontol') || r2.includes(budy)) {
      a = 'respon-toxic'
      pien = fs.readFileSync(`./media/sound/${a}.mp3`)

      fuzzy.sendMessage(from, {
        audio: pien,
        ptt: true,
        mimetype: "audio/mp4"
      }, {
        quoted: m
      });

    }

//+++++++[ antilin ]++++++++++
    const antitaggclist = JSON.parse(fs.readFileSync("./media/database/antitaggc.json"));
    const antiGroupTag = m.isGroup ? antitaggclist.includes(from) : false;
  const antilinkgcList = JSON.parse(fs.readFileSync("./media/database/antilinkgc.json"));
    const antisalurgc = m.isGroup ? antilinkgcList.includes(from) : false;
if (antiGroupTag) {  
  // Deteksi tag group (groupStatusMentionMessage)
  if (m.mtype === 'groupStatusMentionMessage') {
        if (isAdmins) return;
        if (m.key.fromMe) return;
        if (isCreator) return;
        
    console.log("Tag Group Terdeteksi dari:", m.sender);
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        })
        fuzzy.sendMessage(from, {
          text: `\`\`\`「 Status Tag Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a tag status and successfully deleted`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })
    
    // Use return to exit the function
    return;
  }
}

  if (antisalurgc) {
      if (budy.match('chat.whatsapp.com')) {
        if (isAdmins) return reply(`detect link: you are admin so i won't delete`)
        if (m.key.fromMe) return reply(`detect link: you are owner so i won't delete`)
        if (isCreator) return reply(`detect link: you are owner so i won't delete`)
        await fuzzy.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant
          }
        });
        fuzzy.sendMessage(from, {
          text: `@${m.sender.split("@")[0]} Detected a WhatsApp group link and it has been deleted.`,
          contextInfo: {
            mentionedJid: [m.sender]
          }
        }, {
          quoted: fvrif
        })

      }
    }

 const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}

const pw = crypto.randomBytes(5).toString('hex')

        if (!isCreator && !m.isGroup && db.data.settings[botNumber].onlygrub ) {
        	if (command){
            return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group\n\n${global.linkgc} !\n\nIf you have issue please chat owner wa.me/${global.ownerNumber}`)
            }
        }
        
        
    //GAME
    if (tebakgambar.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakgambar[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakgambar[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nCongratulation  `, m)
        benefit = "300"
        
    
        delete tebakgambar[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (kuismath.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = kuismath[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete kuismath[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await reply(`🎮 Kuis Matematika  🎮\n\nCongratulation\n\nwanna play again? type ${prefix}tebak math`)
        benefit = "300"
        

        delete kuismath[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakasahotak.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakasahotak[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakasahotak[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Asah Otak 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakasahotak[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaksiapakahaku.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaksiapakahaku[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaksiapakahaku[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Siapakah Aku 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaksiapakahaku[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaksusunkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaksusunkata[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaksusunkata[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Susun Kata 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaksusunkata[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakbendera.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakbendera[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakbendera[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Gambar 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakbendera[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
if (tebakbendera2.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakbendera2[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakbendera2[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Bendera 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakbendera2[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkabupaten.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkabupaten[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkabupaten[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Kabupaten 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkabupaten[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkimia.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkimia[from]
      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkimia[from]
      }
      else if (budy.toLowerCase() == jawaban) {

        await fuzzy.sendText(m.chat, `🎮 Tebak Kimia 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkimia[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaktekateki.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaktekateki[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaktekateki[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Teka Teki 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaktekateki[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaklagu.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaklagu[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaklagu[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaklagu[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkata[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkata[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkata[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakkalimat.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebakkalimat[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebakkalimat[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Kalimat 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebakkalimat[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaklirik.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaklirik[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaklirik[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Lirik 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaklirik[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebaktebakan.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true
      jawaban = tebaktebakan[from]

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*')
        delete tebaktebakan[from]
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nCongratulation  `, m)
        benefit = "300"
        

        delete tebaktebakan[from]
      }
      else m.reply('*Jawaban Salah!*')
    }
    if (tebakjkt48.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true;
      jawaban = tebakjkt48[from];

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*');
        delete tebakjkt48[from];
      }
      else if (budy.toLowerCase() == jawaban) {
        await fuzzy.sendText(m.chat, `🎮 Tebak Tebakan 🎮\n\nCongratulation  `, m);
        benefit = "300"
        
        delete tebakjkt48[from];
      }
      else {
        m.reply('*Jawaban Salah!*');
      }
    }
    if (tebakff.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true;
      name = tebakff[from];

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*');
        delete tebakff[from];
      }
      else if (budy.toLowerCase() == name) {
        await fuzzy.sendText(m.chat, `🎮 Tebak free firee 🎮\n\nCongratulation`, m);
        benefit = "100"
        delete tebakff[from];
      }
      else {
        m.reply('*Jawaban Salah!*');
      }
    }
    if (tebakml.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted && m.quoted.sender === botNumber) {
      kuis = true;
      name = tebakml[from];

      if (budy.toLowerCase() == "nyerah") {
        await reply('*Anda Telah menyerah*');
        delete tebakml[from];
      }
      else if (budy.toLowerCase() == name) {
        await fuzzy.sendText(m.chat, `🎮 Tebak free firee 🎮\n\nCongratulation`, m);
        benefit = "100"
        delete tebakml[from];
      }
      else {
        m.reply('*Jawaban Salah!*');
      }
    }
        
if (!global.menuMode) global.menuMode = 'nobutton';
switch(command) {
case 'script':{
reply(`
▧ 「 *LINK SCRIPT* 」
│ https://youtube.com/@xziyy?si=ykmNPTiBGBrNzA-E
│ script ini free dilarang menjual belikan.
│ Credits: xZiyy
│ madein: Indonesian
┗─────────────
`)
}
break
case 'sewabot':{
reply(global.sewatext)
}
break
case 'getsession': {
if (!isCreator) return m.reply(mess.owner)
await fuzzy.sendMessage(m.chat, {
document: fs.readFileSync('./media/database/session/creds.json'),
mimetype: 'application/json',
fileName: 'creds.json'
}, { quoted: m });
}
break
case 'setmenu':
case 'settingmenu': {
if (!isCreator) return m.reply(mess.owner)
    if (args[0] === 'button') {
        global.menuMode = 'button';
        reply('✅ Mode menu diubah ke button');
    } else if (args[0] === 'nobutton') {
        global.menuMode = 'nobutton';
        reply('✅ Mode menu diubah ke no button');
    } else {
        reply('⚠️ Pilihan tidak valid! Gunakan: .settingmenu [nobutton/button]');
    }
}
break;

case `${global.firstbotname}`: case 'menu': {
let categories = [];
try {
    categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
} catch (err) {
    categories = []; // Jika file tidak ditemukan, gunakan array kosong
}

let menuCategories = "";
if (categories.length > 0) {
    categories.forEach((cat, index) => {
        menuCategories += `\n┏─『 \`${cat.category.toUpperCase()}\` 』\n`;

        // Tampilkan perintah dalam kategori
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                menuCategories += `│ ⿻ ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            menuCategories += `│ ⿻ ${prefix}${cat.items.cmd}\n`;
        }
        
        menuCategories += "┗─────────────❐\n";
    });
} else {
    menuCategories = "";
}

    let speed = require('performance-now');
    let timestampe = speed();
    let latensie = speed() - timestampe;

    let menu;
    
    if (global.menuMode === 'nobutton') {
        menu = `
Hai haii ${ucapanWaktu} 👋

*[ I N F O - B O T ]*
*Name*: ${global.botname}
*Version*: up 1.4.0
*Speed*: ${latensie.toFixed(4)} detik
*totalUser*: ${datauser.length}
*Runtime*: ${runtime(process.uptime())}

*[ T I M E ]*
*hariini*: ${hariini}
*wib*: ${wib}
*wita*: ${wita}
*wit*: ${wit}

${menuCategories}

┏─『 \`MAIN MENU\` 』
│ ⿻ ${prefix}sewabot
│ ⿻ ${prefix}script
│ ⿻ ${prefix}tes
│ ⿻ ${prefix}ping
│ ⿻ ${prefix}owner
┗─────────────❐

┏─『 \`SETTING\` 』
│ ⿻ ${prefix}onlyadmin on/off
│ ⿻ ${prefix}addadmin
│ ⿻ ${prefix}deladmin
│ ⿻ ${prefix}listadmin
┗─────────────❐

┏─『 \`SETTING\` 』
│ ⿻ ${prefix}sewa add
│ ⿻ ${prefix}sewa del
│ ⿻ ${prefix}sewa list
│ ⿻ ${prefix}sewa check
┗─────────────❐

┏─『 \`OWNER MENU\` 』
│ ⿻ ${prefix}pushkontak text
│ ⿻ ${prefix}savekontak
│ ⿻ ${prefix}setmenu nobutton/button
│ ⿻ ${prefix}mode self/public
│ ⿻ ${prefix}onlygc on/off
│ ⿻ ${prefix}setimgmenu
│ ⿻ ${prefix}setimgreply
│ ⿻ ${prefix}setbotname
│ ⿻ ${prefix}delsampah
│ ⿻ ${prefix}delsesi
│ ⿻ ${prefix}backup
│ ⿻ ${prefix}upsw
│ ⿻ ${prefix}getsession
│ ⿻ ${prefix}cekidch
│ ⿻ ${prefix}join
│ ⿻ ${prefix}reactch
│ ⿻ ${prefix}banchat
│ ⿻ ${prefix}listpc
│ ⿻ ${prefix}listgc
│ ⿻ ${prefix}leave
┗─────────────❐

┏─『 \`ARTIFICIAL MENU\` 』
│ ⿻ ${prefix}ai on/off
│ ⿻ ${prefix}yousearch
│ ⿻ ${prefix}cody
│ ⿻ ${prefix}flux 
┗─────────────❐

┏─『 \`GROUP MENU\` 』
│ ⿻ ${prefix}welcome on/off
│ ⿻ ${prefix}setwelcome
│ ⿻ ${prefix}setleave
│ ⿻ ${prefix}afk
│ ⿻ ${prefix}antilinkgc
│ ⿻ ${prefix}antitagsw
│ ⿻ ${prefix}linkgroup
│ ⿻ ${prefix}setppgroup
│ ⿻ ${prefix}kick
│ ⿻ ${prefix}add
│ ⿻ ${prefix}everyone
│ ⿻ ${prefix}hidetag
│ ⿻ ${prefix}tagall
│ ⿻ ${prefix}getpp
│ ⿻ ${prefix}delete
│ ⿻ ${prefix}rvo
│ ⿻ ${prefix}opentime
│ ⿻ ${prefix}closetime
│ ⿻ ${prefix}listonline
┗─────────────❐

┏─『 \`MAKER MENU\` 』
│ ⿻ ${prefix}brat text
│ ⿻ ${prefix}bratvideo text
│ ⿻ ${prefix}sticker
│ ⿻ ${prefix}stickergif
│ ⿻ ${prefix}qc
│ ⿻ ${prefix}smeme
│ ⿻ ${prefix}emojimix
│ ⿻ ${prefix}qcwhite
┗─────────────❐

┏─『 \`STICKER MENU\` 』
│ ⿻ ${prefix}kuromi
│ ⿻ ${prefix}pocoyo
│ ⿻ ${prefix}dino
│ ⿻ ${prefix}emojimix 😴+🥰
│ ⿻ ${prefix}toimg
│ ⿻ ${prefix}colong
│ ⿻ ${prefix}wm
┗─────────────❐

┏─『 \`download menu\` 』
│ ⿻ ${prefix}pinterestdl
│ ⿻ ${prefix}play
│ ⿻ ${prefix}ytmp3
│ ⿻ ${prefix}ytmp4
│ ⿻ ${prefix}tiktok
│ ⿻ ${prefix}tiksave
│ ⿻ ${prefix}igdl
│ ⿻ ${prefix}fbdl
┗─────────────❐

┏─『 \`SEARCH MENU\` 』
│ ⿻ ${prefix}pinterest
│ ⿻ ${prefix}rumaysho
│ ⿻ ${prefix}caribuku
│ ⿻ ${prefix}kajian
│ ⿻ ${prefix}gamedva
│ ⿻ ${prefix}soundcloud
┗─────────────❐

┏─『 \`BERITA MENU\` 』
│ ⿻ ${prefix}gempa
│ ⿻ ${prefix}liputan6
┗─────────────❐

┏─『 \`STALKER MENU\` 』
│ ⿻ ${prefix}tikstalk 
│ ⿻ ${prefix}githubstalk
│ ⿻ ${prefix}igstalk
│ ⿻ ${prefix}wastalk
┗─────────────❐

┏─『 \`PRIMBON MENU\` 』
│ ⿻ ${prefix}apakah [text]
│ ⿻ ${prefix}bagaimanakah [text]
│ ⿻ ${prefix}kapankah [text]
│ ⿻ ${prefix}bisakah [text]
│ ⿻ ${prefix}watakcek [text]
│ ⿻ ${prefix}cebelapaimutci [text]
│ ⿻ ${prefix}hobycek [text]
│ ⿻ ${prefix}cekkodam [nama]
│ ⿻ ${prefix}fitnah
│ ⿻ ${prefix}jadian
│ ⿻ ${prefix}jodohku
┗─────────────❐

┏─『 \`GAME MENU\` 』
│ ⿻ ${prefix}tebak kata
│ ⿻ ${prefix}tebak tebakan
│ ⿻ ${prefix}tebak bendera
│ ⿻ ${prefix}tebak kalimat
│ ⿻ ${prefix}tebak lirik
│ ⿻ ${prefix}tebak tekateki
│ ⿻ ${prefix}tebak siapakahaku
│ ⿻ ${prefix}tebak asahotak
│ ⿻ ${prefix}tebak susunkata
│ ⿻ ${prefix}tebak kimia
│ ⿻ ${prefix}tebak gambar
│ ⿻ ${prefix}tebak bendera2
│ ⿻ ${prefix}tebak jkt48
│ ⿻ ${prefix}tebak ff
│ ⿻ ${prefix}tebak ml
┗─────────────❐

┏─『 \`TOOLS MENU\` 』
│ ⿻ ${prefix}tts
│ ⿻ ${prefix}get
│ ⿻ ${prefix}spam-ngl
│ ⿻ ${prefix}spam-pairing
│ ⿻ ${prefix}hitamkan
│ ⿻ ${prefix}hd
│ ⿻ ${prefix}remini
│ ⿻ ${prefix}tourl
│ ⿻ ${prefix}tourlv2
│ ⿻ ${prefix}ssweb
│ ⿻ ${prefix}translate 
│ ⿻ ${prefix}languages
┗─────────────❐

┏─『 \`QUOTES MENU\` 』
│ ⿻ ${prefix}quotes
│ ⿻ ${prefix}quotesanime
│ ⿻ ${prefix}quotes-en
┗─────────────❐

┏─『 \`MENU SETTING\` 』
│ ⿻ ${prefix}addmenu
│ ⿻ ${prefix}dellmenu
│ ⿻ ${prefix}addperintah
│ ⿻ ${prefix}dellperintah
│ ⿻ ${prefix}addlist
│ ⿻ ${prefix}addrespon
│ ⿻ ${prefix}dellrespon
│ ⿻ ${prefix}listrespon
┗─────────────❐

┏─ *TQ TO:*
│   - ${global.ownername} (owner)
│   - xZiyy
│   - yanzdev
│   - Siputzx Api
│   - Clairity Api
│   - And All Creator
┗─────────────❐

> type this to get the script:
> *.script*
        `;
      fuzzy.sendMessage(
        m.chat, {
          text: menu,
          contextInfo: {
            externalAdReply: {
              body: `Hi ${pushname}`, // Isi deskripsi atau teks tambahan
              containsAutoReply: true, // Menunjukkan ini balasan otomatis (opsional)
              mediaType: 1, // Tipe media (1 untuk gambar, 2 untuk video, dll.)
              mediaUrl: "https://xziyy.my.id", // URL media atau link utama
              renderLargerThumbnail: true, // Membuat thumbnail lebih besar
              showAdAttribution: true, // Menampilkan label "Ad" (opsional)
              sourceUrl: "", // URL sumber yang akan diakses
              thumbnailUrl: global.menuimgUrl, // URL thumbnail
              title: botname, // Judul link preview
            },
          },
        }, {
          quoted: m
        }
      );
    } else {
let menuCategoriess = "";
if (categories.length > 0) {
    categories.forEach((cat, index) => {
        menuCategoriess += `\n🏷 *${cat.category.toUpperCase()}*\n`;

        // Tampilkan perintah dalam kategori
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                menuCategoriess += `</> ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            menuCategoriess += `</> ${prefix}${cat.items.cmd}\n`;
        }
    });
} else {
    menuCategoriess = "";
}

        menu = `
┌──[ 📌 INFO BOT ]───
│ 🌟 Nama: ${global.botname}
│ 🚀 Speed: ${latensie.toFixed(4)} detik
│ 👥 Users: ${datauser.length}
└────────────────

${menuCategoriess}

🏷 *MAIN MENU*
</> .sewabot
</> .script
</> .tes
</> .ping
</> .owner

🏷 *SETTING*
</> ${prefix}onlyadmin on/off
</> ${prefix}addadmin
</> ${prefix}deladmin
</> ${prefix}listadmin

🏷 *SETTING*
</> ${prefix}sewa add
</> ${prefix}sewa del
</> ${prefix}sewa list
</> ${prefix}sewa check

🏷 *OWNER MENU*
</> ${prefix}setmenu nobutton/button
</> ${prefix}mode self/public
</> ${prefix}onlygc on/off
</> ${prefix}setimgmenu
</> ${prefix}setimgreply
</> ${prefix}setbotname
</> ${prefix}delsampah
</> ${prefix}delsesi
</> ${prefix}upsw
</> ${prefix}backup
</> ${prefix}getsession
</> ${prefix}join
</> ${prefix}cekidch
</> ${prefix}reactch
</> ${prefix}banchat
</> ${prefix}listpc
</> ${prefix}listgc
</> ${prefix}leave

🏷 *ARTIFICIAL MENU*
</> ${prefix}ai on/off
</> ${prefix}yousearch
</> ${prefix}cody
</> ${prefix}flux 

🏷 *GROUP MENU*
</> ${prefix}welcome on/off
</> ${prefix}setwelcome
</> ${prefix}setleave
</> ${prefix}antilinkgc
</> ${prefix}antitagsw
</> ${prefix}linkgroup
</> ${prefix}setppgroup
</> ${prefix}kick
</> ${prefix}add
</> ${prefix}everyone
</> ${prefix}hidetag
</> ${prefix}tagall
</> ${prefix}getpp
</> ${prefix}delete
</> ${prefix}rvo
</> ${prefix}opentime
</> ${prefix}closetime

🏷 *MAKER MENU*
</> ${prefix}brat text
</> ${prefix}bratvideo text
</> ${prefix}sticker
</> ${prefix}stickergif
</> ${prefix}qc
</> ${prefix}smeme
</> ${prefix}emojimix
</> ${prefix}qcwhite

🏷 *STICKER MENU*
</> ${prefix}kuromi
</> ${prefix}pocoyo
</> ${prefix}dino
</> ${prefix}emojimix 😴+🥰
</> ${prefix}colong
</> ${prefix}toimg
</> ${prefix}wm

🏷 *DOWNLOAD MENU*
</> ${prefix}pinterestdl
</> ${prefix}play
</> ${prefix}ytmp3
</> ${prefix}ytmp4
</> ${prefix}tiktok
</> ${prefix}tiksave
</> ${prefix}igdl
</> ${prefix}fbdl

🏷 *SEARCH MENU*
</> ${prefix}pinterest
</> ${prefix}rumaysho
</> ${prefix}caribuku
</> ${prefix}kajian
</> ${prefix}gamedva
</> ${prefix}soundcloud

🏷 *BERITA MENU*
</> ${prefix}gempa
</> ${prefix}liputan6

🏷 *STALK MENU*
</> ${prefix}tikstalk 
</> ${prefix}githubstalk
</> ${prefix}igstalk
</> ${prefix}wastalk

🏷 *PRIMBON MENU*
</> ${prefix}apakah [text]
</> ${prefix}bagaimanakah [text]
</> ${prefix}kapankah [text]
</> ${prefix}bisakah [text]
</> ${prefix}watakcek [text]
</> ${prefix}cebelapaimutci [text]
</> ${prefix}hobycek [text]
</> ${prefix}cekkodam [nama]
</> ${prefix}fitnah 
</> ${prefix}jadian
</> ${prefix}jodohku

🏷 *GAME MENU*
</> ${prefix}tebak kata
</> ${prefix}tebak tebakan
</> ${prefix}tebak bendera
</> ${prefix}tebak kalimat
</> ${prefix}tebak lirik
</> ${prefix}tebak tekateki
</> ${prefix}tebak siapakahaku
</> ${prefix}tebak asahotak
</> ${prefix}tebak susunkata
</> ${prefix}tebak kimia
</> ${prefix}tebak gambar
</> ${prefix}tebak bendera2
</> ${prefix}tebak jkt48
</> ${prefix}tebak ff
</> ${prefix}tebak ml

🏷 *QUOTED MENU*
</> ${prefix}quotes-en
</> ${prefix}quotes
</> ${prefix}quotesanime

🏷 *TOOLS MENU*
</> ${prefix}tts
</> ${prefix}get
</> ${prefix}spam-ngl
</> ${prefix}spam-pairing
</> ${prefix}hitamkan
</> ${prefix}hd
</> ${prefix}remini
</> ${prefix}tourl
</> ${prefix}tourlv2
</> ${prefix}ssweb
</> ${prefix}translate 
</> ${prefix}languages

🏷 *MENU SETTING*
</> ${prefix}addmenu
</> ${prefix}dellmenu
</> ${prefix}addperintah
</> ${prefix}dellperintah
</> ${prefix}addlist
</> ${prefix}addrespon
</> ${prefix}dellrespon
</> ${prefix}listrespon

┏─ *TQ TO:*
│   - ${global.ownername} (owner)
│   - xZiyy
│   - yanzdev
│   - Siputzx Api
│   - Clairity Api
│   - And All Creator
┗─────────────❐
> click the button to get script
        `;
await fuzzy.sendMessage(m.chat, {
  footer: `© ${global.botname} - 2025`,
  buttons: [
    {
      buttonId: `.owner`,
      buttonText: { displayText: 'O W N E R' },
      type: 1
    },
    {
      buttonId: `.script`,
      buttonText: { displayText: 'S C R I P T' },
      type: 1
    },
    {
      buttonId: `.sewabot`,
      buttonText: { displayText: 'S E W A B O T' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${ownername} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  fileLength: 0,
  caption: menu,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idch,
   newsletterName: global.namech
   }, 
    externalAdReply: {
      title: `Hai haii ${ucapanWaktu} 👋`,
      thumbnailUrl: global.imgUrl,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
    }


}
break;
      case 'toimage':
      case 'toimg': {
        if (!/webp/.test(mime)) return reply(`Reply sticker dengan caption *${prefix + command}*`)
        let media = await fuzzy.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) return err
          let buffer = fs.readFileSync(ran)
          fuzzy.sendMessage(m.chat, {
            image: buffer
          }, {
            quoted: m
          })
          fs.unlinkSync(ran)
        })

      }
      break
case "addadmin": {
  if (!isCreator) return reply(mess.owner);

  let target;
  if (m.quoted) {
    target = m.quoted.sender;
  } else {
    if (!text) return reply("Tag orang atau masukkan nomornya.");
    target = text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
  }

  const number = target.split("@")[0];
  if (admin.includes(number)) return reply("Sudah jadi admin.");

  admin.push(number);
  fs.writeFileSync("./media/database/admin.json", JSON.stringify(admin, null, 2));
  reply(`Sukses menambahkan ${number} sebagai admin.`);
}
break;
case "deladmin":{
  if (!isCreator) return reply(mess.owner);
  if (!args[0]) return reply("Masukkan nomor admin yang ingin dihapus.");

  const number = args[0].replace(/[^0-9]/g, "");
  if (!admin.includes(number)) return reply("Nomor tersebut bukan admin.");

  const index = admin.indexOf(number);
  admin.splice(index, 1);
  fs.writeFileSync("./media/database/admin.json", JSON.stringify(admin, null, 2));
  reply(`Berhasil menghapus ${number} dari admin.`);
}
break
case "listadmin": {
  if (!isCreator) return reply(mess.owner);
  if (admin.length === 0) return reply("Belum ada admin.");
  const list = admin.map((a, i) => `${i + 1}. wa.me/${a}`).join("\n");
  reply(`Daftar admin:\n\n${list}`);
}
break
//======[ AI ]======\\
case 'yousearch': {
  let input = `Ex : ${prefix + command} Siapakah Presiden Indonesia Sekarang`

  if (!text) return m.reply(input)
  const website = axios.create({
    baseURL: "https://app.yoursearch.ai",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const yousearch = async (searchTerm) => {
    const requestData = {
      searchTerm: searchTerm,
      promptTemplate: `Search term: "${searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

Sources:
(1) <URL of the first reference>
(2) <URL of the second reference>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}`,
      searchParameters: "{}",
      searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`,
    };

    try {
      const response = await website.post("/api", requestData);
      return response.data.response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  let hanjing = await yousearch(text)
  reply(`${hanjing}`)
}
break
case 'flux': {
  if (!text) return reply('prompt nya mana?')
  const imgData = await getBuffer(`https://api.siputzx.my.id/api/ai/flux?prompt=${text}`);
  await fuzzy.sendMessage(from, {
    image: imgData,
    caption: "nihh"
  }, {
    quoted: m
  });
}
break;
case 'cody': {
  try {
    if (!text) return reply("Masukkan teks untuk mendapatkan respons.");

    const apiUrl = `${apiUrlw}/api/cody?text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const {
      success,
      answer
    } = response.data;

    if (!success) {
      return reply("Gagal mendapatkan respons dari API.");
    }

    reply(answer);
  } catch (error) {
    console.error("Error fetching Cody response:", error);
    reply("Maaf, terjadi kesalahan saat mengambil respons.");
  }
  break;
}
case 'cody': {
  try {
    if (!text) return reply("Masukkan teks untuk mendapatkan respons.");
    reply('_Tunggu sebentar, sedang membuat gambar..._');

    const apiUrl = `${apiUrlw}/api/cody?text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const {
      success,
      answer
    } = response.data;

    if (!success) {
      return reply("Gagal mendapatkan respons dari API.");
    }

    reply(answer);
  } catch (error) {
    console.error("Error fetching Cody response:", error);
    reply("Maaf, terjadi kesalahan saat mengambil respons.");
  }
  break;
}
//======[ GROUP ]======\\

      case 'everyone': {
        if (!isAdmins && !isCreator) return
        let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
        fuzzy.sendMessage(m.chat, {
          text: `@${m.chat} ${text}`,
          contextInfo: {
            mentionedJid: mem,
            groupMentions: [{
              groupSubject: `everyone`,
              groupJid: m.chat,
            }, ],
          },
        });
      }
      break
case "cekidch": case "idch": {
if (!text) return m.reply("linknya mana?")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await fuzzy.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
case "joingc": case "join": {
if (!isCreator) return reply("cuman owner yg bisa gunain ini")
if (!text) return m.reply("linkgcnya mana?")
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await fuzzy.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

case "addlist":
case "addrespon": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("cmd|respon [|url_gambar]")

    let result = text.split("|")
    if (result.length < 2) return m.reply("Gunakan format: !addlist cmd|respon\n!addlist cmd|respon|urlImg\n\nurlimg opsional kosongkan jga gpp")

    const [ cmd, respon, image ] = result
    let res = list.find(e => e.cmd == cmd.toLowerCase())
    if (res) return m.reply("Cmd respon sudah ada")

    let obj = {
        cmd: cmd.toLowerCase(),
        respon: respon
    }

    if (image) {
        obj.image = image // jika ada gambar, tambahkan properti image
    }

    list.push(obj)
    fs.writeFileSync("./media/database/list.json", JSON.stringify(list, null, 2))
    m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database`)
}
break
case "dellist":
case "delrespon": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Masukkan cmd yang ingin dihapus")

    let index = list.findIndex(e => e.cmd === text.toLowerCase())
    if (index === -1) return m.reply("Cmd tidak ditemukan dalam database")

    list.splice(index, 1)
    fs.writeFileSync("./media/database/list.json", JSON.stringify(list, null, 2))
    m.reply(`Berhasil menghapus cmd respon *${text.toLowerCase()}* dari database`)
}
break
case 'rvo':
case 'readviewonce': {
    if (!isAdmins && !isCreator) return reply('hanya admin dan owner')
    if (!m.quoted) return reply(`Balas pesan viewonce dengan caption ${prefix + command}`);
    
    try {
        const quoted = m.quoted;
        const media = await quoted.download();
        const type = quoted.mtype;

        if (type === 'videoMessage') {
            await fuzzy.sendMessage(m.chat, {
                video: media,
                caption: `_Berhasil membuka pesan viewonce_`,
                mimetype: 'video/mp4'
            }, { quoted: m });

        } else if (type === 'imageMessage') {
            await fuzzy.sendMessage(m.chat, {
                image: media,
                caption: `_Berhasil membuka pesan viewonce_`
            }, { quoted: m });

        } else {
            reply('Jenis pesan viewonce tidak dikenali.');
        }

    } catch (err) {
        console.error('Error buka viewonce:', err.message);
        reply('Gagal membuka pesan viewonce. Mungkin format tidak didukung.');
    }
    break;
}
case 'rch':
case 'reactch': {
    if (!isCreator) return reply('owner only');
    if (!text) return m.reply("Contoh: .reactch https://whatsapp.com/channel/abc123/456|Teks huruf|style (1/2/3)");

    let result = text.split("|");
    if (result.length < 2) return m.reply("Format salah! Gunakan: link ch|teks huruf|1");

    const [ch, rawText, style] = result;
    const match = ch.match(/https:\/\/whatsapp\.com\/channel\/(\w+)(?:\/(\d+))?/);
    if (!match) return reply("URL tidak valid. Silakan periksa kembali.");

    const channelId = match[1];
    const chatId = match[2];
    if (!chatId) return reply("ID chat tidak ditemukan dalam link yang diberikan.");

    function hurufEmojiKotak1(text) {
        const emojiMap = {
            A: '🅰️', B: '🅱️', C: '🅲', D: '🅳', E: '🅴', F: '🅵', G: '🅶', H: '🅷', I: '🅸',
            J: '🅹', K: '🅺', L: '🅻', M: '🅼', N: '🅽', O: '🅾️', P: '🅿️', Q: '🆀',
            R: '🆁', S: '🆂', T: '🆃', U: '🆄', V: '🆅', W: '🆆', X: '🆇', Y: '🆈', Z: '🆉',
            ' ': '⬜'
        };
        return text.toUpperCase().split('').map(c => emojiMap[c] || c).join('');
    }

    function hurufEmojiKotak2(text) {
        const emojiMap = {
            A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵', G: '🄶', H: '🄷', I: '🄸',
            J: '🄹', K: '🄺', L: '🄻', M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀',
            R: '🅁', S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈', Z: '🅉',
            ' ': '🔸'
        };
        return text.toUpperCase().split('').map(c => emojiMap[c] || c).join('');
    }

function hurufEmojiKotak3(text) {
  const emojiMap = {
    A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ', H: 'Ⓗ', I: 'Ⓘ',
    J: 'Ⓙ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ', O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ',
    R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ', V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ',
    ' ': '⬜' // simbol spasi
  };

  return text.toUpperCase().split('').map(c => emojiMap[c] || c).join('');
}

    let emojiTeks;
    switch (style) {
        case '1':
            emojiTeks = hurufEmojiKotak1(rawText);
            break;
        case '2':
            emojiTeks = hurufEmojiKotak2(rawText);
            break;
        case '3':
            emojiTeks = hurufEmojiKotak3(rawText);
            break;
        default:
            emojiTeks = rawText;
    }

    fuzzy.newsletterMetadata("invite", channelId).then(data => {
        if (!data) return reply("Newsletter tidak ditemukan atau terjadi kesalahan.");
        fuzzy.newsletterReactMessage(data.id, chatId, emojiTeks)
            .then(() => m.reply(`Sukses react dengan style ${style || 'default'}, tunggu sebentar ya~`))
            .catch(err => m.reply("Gagal mengirim react: " + err.message));
    });
}
break;
case "dellrespon":
case "delrespon": {
if (!isCreator) return reply(mess.owner)
if (!text) return m.reply("cmd\n\n ketik *.listrespon* untuk melihat semua cmd")
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./media/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

case "listrespon": {
if (!isCreator) return reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n${e.respon}`)
m.reply(`${teks}`)
}
break
case "addmenu": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Masukkan nama Menu! Contoh: .addmenu pulsa")
    
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify([], null, 2));
    }
    
    const categoryName = text.toLowerCase();
    
    let existingCategory = categories.find(cat => cat.category === categoryName);
    if (existingCategory) return m.reply(`menu *${categoryName}* sudah ada!`);
    
    categories.push({
        category: categoryName,
        items: []
    });
    
   fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));
    
    m.reply(`Berhasil menambahkan menu *${categoryName}* ke database!`);
}
break;

case "dellmenu":
case "delmenu": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Masukkan nama menu yang ingin dihapus!")
    
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }
    
    
    const categoryName = text.toLowerCase();
    
    let categoryIndex = categories.findIndex(cat => cat.category === categoryName);
    if (categoryIndex === -1) return m.reply(`menu *${categoryName}* tidak ditemukan!`);
    
    categories.splice(categoryIndex, 1);
    
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));
    
    m.reply(`Berhasil menghapus menu *${categoryName}*!`);
}
break;

case "addrespon":
case "additems":
case "addperintah": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Format: .addperintah kategori|perintah|respon[|url_gambar]")
    
    const parts = text.split("|");
    if (parts.length < 3) return m.reply("Format tidak valid! Gunakan: kategori|perintah|respon[|url_gambar]");
    
    const categoryName = parts[0].toLowerCase().trim();
    const cmdName = parts[1].toLowerCase().trim();
    const respon = parts[2].trim();
    const image = parts[3] ? parts[3].trim() : null;

    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }

    let category = categories.find(cat => cat.category === categoryName);
    if (!category) return m.reply(`Kategori *${categoryName}* tidak ditemukan! Buat dulu dengan .addcategory`);

    let existingItem = category.items.find(item => item.cmd === cmdName);
    if (existingItem) return m.reply(`Perintah *${cmdName}* sudah ada dalam kategori *${categoryName}*!`);

    const newItem = {
        cmd: cmdName,
        respon: respon
    };
    if (image) newItem.image = image;

    category.items.push(newItem);

    // Simpan perubahan
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));

    m.reply(`Berhasil menambahkan perintah *${cmdName}* ke kategori *${categoryName}*!`);
}
break;

case "dellperintah": {
    if (!isCreator) return reply(mess.owner)
    if (!text) return m.reply("Format: .dellperintah menu|perintah")

    const parts = text.split("|").map(part => part.trim());
    if (parts.length < 2) return m.reply("Format tidak valid! Gunakan: .dellperintah menu|perintah");

    const [categoryName, cmdName] = parts;

    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database menu kosong atau tidak ditemukan!");
    }

    let category = categories.find(cat => cat.category === categoryName.toLowerCase());
    if (!category || !Array.isArray(category.items)) {
        return m.reply(`Menu *${categoryName}* tidak ditemukan atau datanya rusak!`);
    }

    let itemIndex = category.items.findIndex(item => item.cmd === cmdName.toLowerCase());
    if (itemIndex === -1) return m.reply(`Perintah *${cmdName}* tidak ditemukan dalam menu *${categoryName}*!`);

    category.items.splice(itemIndex, 1);

    // Simpan perubahan
    fs.writeFileSync("./media/database/listmenurespon.json", JSON.stringify(categories, null, 2));

    m.reply(`Berhasil menghapus perintah *${cmdName}* dari menu *${categoryName}*!`);
}
break;
case "menus": {
    let categories = [];
    try {
        categories = JSON.parse(fs.readFileSync("./media/database/listmenurespon.json"));
    } catch (err) {
        return m.reply("Database kategori kosong atau tidak ditemukan!");
    }
    
    if (categories.length === 0) return m.reply("Belum ada menu yang tersedia.");
    
    let text = "*DAFTAR KATEGORI MENU*\n\n";
    categories.forEach((cat, index) => {
        text += `${index + 1}. ${cat.category}\n`;
        
        if (Array.isArray(cat.items)) {
            cat.items.forEach(item => {
                text += `   ${prefix}${item.cmd}\n`;
            });
        } else if (cat.items && cat.items.cmd) {
            text += `   ${prefix}${cat.items.cmd}\n`;
        }
        
        text += "\n";
    });
    
    text += "Gunakan command dengan nama kategori untuk melihat daftar menu dalam kategory tersebut.";
    m.reply(text);
}
break;
case 'welcome':
case 'notifikasigc':
case "notificationgc": {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isCreator) return reply("admin doang");
if (!text) return m.reply("on/off")
if (text == "on") {
if (global.db.data.chats[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.data.chats[m.chat].welcome = true
return m.reply("Berhasil menyalakan *notifikasi* di grup ini")
} else if (text == "off") {
if (global.db.data.chats[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.data.chats[m.chat].welcome = false
return m.reply("Berhasil mematikan *notifikasi* di grup ini")
} else return m.reply("on/off")
}
break
      case 'getpp': {
        try {
          ppuser = await fuzzy.profilePictureUrl(m.quoted.sender, 'image')
        }
        catch (err) {
          ppuser = 'https://files.catbox.moe/0arg0u.jpg'
        }
        ppnyauser = await getBuffer(ppuser)
            await fuzzy.sendMessage(m.chat, {
                image: ppnyauser,
                caption: `_nihh_`
            }, { quoted: m });
            
      }
      break
      case 'tagall': {
        if (!isAdmins) return reply("only admin group")
        if (!m.isGroup) return;
        let teks = `*👥 Tag All*
*Pesan : ${q ? q : "kosong"}*\n\n`;
        for (let mem of participants) {
          teks += `ルジ @${mem.id.split("@")[0]}\n`;
        }
        fuzzy.sendMessage(
          m.chat, {
            text: teks,
            mentions: participants.map((a) => a.id)
          }, {
            quoted: m
          },
        );
      }
      break;
      case "hidetag":
      case "z":
      case "h":
        {
          if (!m.isGroup) return reply("gc doang");
          if (!isAdmins && !isCreator) return reply("admin doang");
          if (!m.quoted && !text) return reply("teksnya/replyteks");
          var teks = m.quoted ? m.quoted.text : text;
          var member = await groupMetadata.participants.map((e) => e.id);
          fuzzy.sendMessage(m.chat, { text: teks, mentions: [...member] });
        }
        break;
      case 'antitagsw':
      case 'antitaggc': {
        if (!isAdmins && !isCreator) return
        if (!m.isGroup) return
        if (args[0] === "on") {
          if (antiGroupTag) return reply('Sukses Mengaktifikan Tuan✅')
          antitaggclist.push(from)
          fs.writeFileSync('./media/database/antitaggc.json', JSON.stringify(antitaggclist))
          reply('Success in turning on antiGroupTag in this group')
          var groupe = await fuzzy.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          fuzzy.sendMessage(from, {
            text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nanti tag status`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          })
        }
        else if (args[0] === "off") {
          if (!antiGroupTag) return reply('Sukses Menonaktifkan Tuan✅')
          let off = antitaggclist.indexOf(from)
          antitaggclist.splice(off, 1)
          fs.writeFileSync('./media/database/antitaggc.json', JSON.stringify(antitaggclist))
          reply('Success in turning off antiGroupTag in this group')
        }
        else {
          await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
        }
      }
      break
      case 'antilinkgc': {
          if (!isAdmins && !isCreator) return reply("admin doang");
         if (!m.isGroup) return reply('This command can only be used in groups!');

        if (args[0] === "on") {
          if (antisalurgc) return reply('Antilinkgc is already active in this group.');
          antilinkgcList.push(from);
          fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          reply('Antilinkgc has been enabled in this group.');
          var groupe = await fuzzy.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });

           reply(`⚠️ Warning ⚠️\n\nPlease be aware of group links being shared in this group.`)
            
        }
        else if (args[0] === "off") {
          if (!antisalurgc) return reply('Antilinkgc is not active in this group.');
          let off = antilinkgcList.indexOf(from);
          antilinkgcList.splice(off, 1);
          fs.writeFileSync('./media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          reply('Antilinkgc has been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;
case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins && !isCreator) return reply('only admin')
  let media = await fuzzy.downloadAndSaveMediaMessage(quoted)
  await fuzzy.updateProfilePicture(m.chat, {
    url: media
  }).catch((err) => fs.unlinkSync(media))
  m.reply('done')
}
break
case 'linkgroup':
case 'linkgc': {
  if (!isAdmins && !isCreator) return reply("admin doang");
  if (!isBotAdmins) return reply(mess.Badmin)
  let response = await fuzzy.groupInviteCode(from)
  fuzzy.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
    detectLink: true
  })
}
break
case 'd':
case 'del':
case 'delete':
case 'hapus': {
  if (!isAdmins && !isCreator) return reply('only admin')
  if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
  fuzzy.sendMessage(from, {
    delete: {
      remoteJid: from,
      id: m.quoted.id,
      fromMe: m.quoted.fromMe,
      participant: m.quoted.sender
    }
  })
}
break
case 'totag': {
  if (!isAdmins && !isCreator) return reply('only admin')
  if (!m.quoted)
    return reply(`Reply pesan dengan caption ${prefix + command}`);
  fuzzy.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map((a) => a.id),
  });
}
break;
case 'closetime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (!isAdmins && !isCreator) return reply('only admin')
if (args[1] == "detik") {
  var timer = args[0] * `1000`
} else if (args[1] == "menit") {
  var timer = args[0] * `60000`
} else if (args[1] == "jam") {
  var timer = args[0] * `3600000`
} else if (args[1] == "hari") {
  var timer = args[0] * `86400000`
} else {
  return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
  const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
  fuzzy.groupSettingUpdate(from, 'announcement')
  reply(close)
}, timer)
break

case 'opentime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
  if (!isAdmins && !isCreator) return reply('only admin')
if (args[1] == "detik") {
  var timer = args[0] * `1000`
} else if (args[1] == "menit") {
  var timer = args[0] * `60000`
} else if (args[1] == "jam") {
  var timer = args[0] * `3600000`
} else if (args[1] == "hari") {
  var timer = args[0] * `86400000`
} else {
  return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
}
reply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
  const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
  fuzzy.groupSettingUpdate(from, 'not_announcement')
  reply(open)
}, timer)
break
      case 'afk': {
        try {
          var ppimg = await fuzzy.profilePictureUrl(m.sender, 'image');
        }
        catch (err) {
          console.log(err);
          var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';
        }

        let user = global.db.data.users[m.sender]
        user.afkTime = +new Date
        user.afkReason = text
        let afkteks = `${pushname} sekarang Kamu Lagi Afk dengan Alasan? ${text ? ': ' + text : 'tidak ada alasan'}`
        m.reply(afkteks)
      }
      break
case 'add': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.Badmin)
  if (!isAdmins && !isCreator) return reply('only admin')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await fuzzy.groupParticipantsUpdate(from, [users], 'add')
  reply('succss')
}
break
case 'kick': {
  if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins && !isCreator) return reply('only admin')
  let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await fuzzy.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
  m.reply('bye bye kasian deh')
}
break
//======[ DOWNLOAD ]======\\
case 'ccdwn':
case 'capcut':{
  if (!text) return m.reply('Silahkan masukkan URL CapCut yang ingin diunduh!')
  
  m.reply('Sedang memproses, mohon tunggu...')
  
  try {
    const apiUrl = `https://jazxcode.biz.id/downloader/capcutdl?url=${text}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    if (data.status) {
      const videoUrl = data.result.videoUrl
      
      await fuzzy.sendMessage(m.chat, {
        video: {
          url: videoUrl,
        },
        caption: `🎥 Video CapCut berhasil diunduh`,
        fileName: `capcut.mp4`,
        mimetype: 'video/mp4'
      });
    } else {
      m.reply('Gagal mengunduh video, periksa URL dan coba lagi.')
    }
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat mengunduh video.')
  }
}
break
case 'fbdl': {

  async function fetchFbVideo(url) {
    const res = await axios.get(`https://api.vreden.my.id/api/fbdl?url=${url}`);
    return res.data.data;
  }

  const fburl = args[0]; // Link Facebook diberikan sebagai argumen

  if (!fburl) {
    return m.reply('Masukkan URL Facebook yang ingin diunduh.');
  }

  reply('Tunggu sebentar, sedang mengunduh video dari Facebook...');
  

  try {
    const result = await fetchFbVideo(fburl);

    if (!result || !result.status) {
      return m.reply('Gagal mengunduh video. Pastikan URL benar.');
    }

    // Menggunakan link HD jika tersedia, jika tidak gunakan SD
    const videoUrl = result.hd_url || result.sd_url;
    const caption = `Judul: ${result.title || 'Video Facebook'}`;

    m.reply('Video berhasil ditemukan! Mengirim video...');
    await fuzzy.sendMessage(m.chat, {
      video: {
        url: videoUrl,
      },
      caption: caption,
      fileName: `fb.mp4`,
      mimetype: 'video/mp4'
    }, {
      quoted: m
    });
    
  } catch (error) {
    console.error('Error fetching Facebook video:', error);
    m.reply('Maaf, terjadi kesalahan saat mengunduh video.');
  }
}
break;
      case 'igdl':
      case 'instagram':
      case 'instadl': {
        if (!text) return m.reply('Berikan link Instagram yang ingin di-download');

        const instaDl = {
          dl: async (link) => {
            try {
              const {
                data
              } = await axios.post('https://yt1s.io/api/ajaxSearch',
                new URLSearchParams({
                  p: 'instagram',
                  q: link,
                  lang: 'en'
                }), {
                  headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                  },
                }
              );

              if (data.status !== 'ok') throw new Error('Tidak ada respons dari API');

              const $ = cheerio.load(data.data);
              const results = $('a.abutton.is-success.is-fullwidth')
                .map((_, el) => ({
                  title: $(el).text().includes('Video') ? 'Download Video' : 'Download Image',
                  url: $(el).attr('href'),
                  sourceUrl: link
                }))
                .get();

              return results;
            }
            catch (error) {
              console.error('Error fetching Instagram download links:', error);
              throw error;
            }
          }
        };

        try {
          const results = await instaDl.dl(text);

          if (results.length === 0) {
            return m.reply('Tidak ada hasil yang ditemukan.');
          }

          const images = results.filter(item => item.title.includes('Image'));
          const videos = results.filter(item => item.title.includes('Video'));

          // Kirim video menggunakan sendMessage jika ada video
          if (videos.length > 0) {
            for (const video of videos) {
              await fuzzy.sendMessage(from, {
                video: {
                  url: video.url
                },
                caption: `Download Video\n\nSumber: ${video.sourceUrl}`,
              });
            }
          }
          else if (images.length > 0) {
            // Kirim gambar hanya jika tidak ada video
            const formattedImages = images.map(item => ({
              url: item.url,
              sourceUrl: item.sourceUrl,
              title: item.title,
            }));

            async function generateCarouselMessage(imageData, from, headerText = "Berikut adalah hasil download Instagram:") {
              const cardsPromises = imageData.map(async data => {
                const preparedMedia = await prepareWAMessageMedia({
                  image: {
                    url: data.url
                  },
                }, {
                  upload: fuzzy.waUploadToServer
                });

                return {
                  header: {
                    hasMediaAttachment: true,
                    ...preparedMedia
                  },
                  body: {
                    text: data.title
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: JSON.stringify({
                        display_text: "Sumber",
                        url: data.sourceUrl,
                      }),
                    }],
                  },
                };
              });

              const cards = await Promise.all(cardsPromises);

              const carouselMessage = {
                cards,
                messageVersion: 1,
              };

              const msg = generateWAMessageFromContent(
                from, {
                  viewOnceMessage: {
                    message: {
                      interactiveMessage: {
                        body: {
                          text: headerText
                        },
                        carouselMessage,
                      },
                    },
                  },
                }, {}
              );

              await fuzzy.relayMessage(from, msg.message, {
                messageId: msg.key.id
              });
            }

            await generateCarouselMessage(formattedImages, from);
          }
         
        }
        catch (error) {
          console.error('Error in Instagram download process:', error);
          return m.reply('Terjadi kesalahan saat mencoba mendownload. Pastikan link valid.');
        }
      }
      break;
      case 'tt':
      case 'tiktok':
      case 'tiksave':
      case 'ttmp4':
      case 'ttsv': {

        const qs = require('qs');
        const tiksave = {
          getData: async (url) => {
            const apiUrl = 'https://tiksave.io/api/ajaxSearch';
            const data = qs.stringify({
              q: url,
              lang: 'id'
            });
            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': '*/*',
                'User-Agent': 'MyApp/1.0',
                'Referer': 'https://tiksave.io/en',
                'X-Requested-With': 'XMLHttpRequest'
              }
            };

            try {
              const response = await axios.post(apiUrl, data, config);
              const html = response.data.data;
              const $ = cheerio.load(html);
              const thumbnail = $('.thumbnail img').attr('src');
              const title = $('.tik-left h3').text().trim();
              const downloadLinks = [];

              $('.dl-action a').each((index, element) => {
                const link = $(element).attr('href');
                const label = $(element).text().trim();
                downloadLinks.push({
                  label,
                  link
                });
              });

              return {
                thumbnail,
                title,
                downloadLinks
              };
            }
            catch (error) {
              console.error('Error:', error);
              throw error;
            }
          },

          download: async (url) => {
            try {
              const videoData = await tiksave.getData(url);
              if (videoData && videoData.downloadLinks.length) {
                const audioUrl = videoData.downloadLinks.find(link => link.label === 'Download MP3')?.link;

                return {
                  videoData,
                  audioUrl
                };
              }
              else {
                throw new Error('Link unduhan tidak tersedia.');
              }
            }
            catch (error) {
              console.error('Error:', error);
              throw error;
            }
          }
        };


        try {
          // Memeriksa apakah teks yang dimasukkan adalah URL valid
          if (!text.startsWith('http')) return reply("Masukkan URL yang valid.");

          // Mendapatkan data unduhan TikTok
          let {
            videoData,
            audioUrl
          } = await tiksave.download(text);

          if (videoData.downloadLinks.length) {
            await fuzzy.sendMessage(m.chat, {
              video: {
                url: videoData.downloadLinks[0].link,
              },
              caption: `🎥 ${videoData.title}`,
              fileName: `tiktok.mp4`,
              mimetype: 'video/mp4'
            });
          }
          else {
            reply("Video tidak tersedia.");
          }

          // audio
          let res = await tiktok(`${args[0]}`)
          fuzzy.sendMessage(m.chat, {
            audio: {
              url: res.audio
            },
            fileName: `tiktok.mp3`,
            mimetype: 'audio/mp4'
          })


        }
        catch (error) {
          console.error("Error fetching TikTok data:", error);
          reply("Maaf, terjadi kesalahan saat mengambil data TikTok.");
        }

      }
      break;
      

case 'ttmp3':{
          if (!text.startsWith('http')) return reply("Masukkan URL yang valid.");
        try {
          let res = await tiktok(`${args[0]}`)
          fuzzy.sendMessage(m.chat, {
            audio: {
              url: res.audio
            },
            fileName: `tiktok.mp3`,
            mimetype: 'audio/mp4'
          })
       } catch (error) {
          console.error("Maaf server limit, coba lagi lain waktu", error);
          reply("Maaf server limit, coba lagi lain waktu.");
        }
}
break

            case 'upstatus':
			case 'upsw': {
				if (!isCreator) return m.reply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				try {
					if (quoted.isMedia) {
						if (/image|video/.test(quoted.mime)) {
							await fuzzy.sendMessage('status@broadcast', {
								[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
								caption: text || m.quoted?.body || ''
							}, { statusJidList, broadcast: true })
						} else if (/audio/.test(quoted.mime)) {
							await fuzzy.sendMessage('status@broadcast', {
								audio: await quoted.download(),
								mimetype: 'audio/mp4',
								ptt: true
							}, { backgroundColor, statusJidList, broadcast: true })
						} else m.reply('Only Support video/audio/image/text')
					} else if (quoted.text) {
						await fuzzy.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
							textArgb: 0xffffffff,
							font: Math.floor(Math.random() * 9),
							backgroundColor, statusJidList,
							broadcast: true
						})
					} else m.reply('Only Support video/audio/image/text')
				} catch (e) {
					m.reply('Gagal Mengupload Status Whatsapp!')
				}
			}
			break
 case 'ytmp3': {
       
  if (!text) return reply(`Gunakan dengan format ${command} link\n\nContoh:\n\n${command} link`);
  
  try {
    reply(`⏳ Sedang mengunduh audio...\n\n${result.title}`);
    
    
    // Gunakan scraper baru (Ytdl function)
    const result = await yetedln(text, "audio", "320");
    
    // Siapkan dokumen audio
    let doc = {
      audio: {
        url: result.download
      },
      mimetype: 'audio/mpeg',
      fileName: `${result.title}.mp3`,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: result.title,
          body: `Duration: ${result.duration || "Unknown"}`,
          thumbnailUrl: result.thumbnail,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    };

    // Kirim pesan sedang diproses
    // Kirim audio
    await fuzzy.sendMessage(from, doc, {
      quoted: m
    });


  } catch (error) {
    console.error("Error fetching song:", error);
    reply("Maaf, terjadi kesalahan saat mencari data lagu. Coba lagi nanti.");
  }
}
break;
      case 'pinterestdl':
      case 'pindl': {
        const {
          JSDOM
        } = require("jsdom");

        class Pinterest {
          async getURL(url) {
            try {
              const response = await axios.get(url);
              const dom = new JSDOM(response.data);
              const document = dom.window.document;
              let contentUrl = '';
              const video = document.querySelector('video');
              if (video) {
                const videoUrl = video.getAttribute('src');
                contentUrl = videoUrl.replace('hls', '720p').replace('.m3u8', '.mp4');
              }
              else {
                const img = document.querySelector('meta[property="og:image"]');
                if (img) {
                  contentUrl = img.getAttribute('content');
                }
              }
              return contentUrl;
            }
            catch (error) {
              console.error('Error:', error.message);
              return '';
            }
          }

          async getBuffer(rawUrl) {
            try {
              const url = await this.getURL(rawUrl);
              const response = await axios.get(url, {
                responseType: 'arraybuffer'
              });
              return response.data;
            }
            catch (error) {
              console.error('Error:', error.message);
              return null;
            }
          }
        }

        if (!args[0]) {
          return reply(m.chat, `Harap masukkan URL Pinterest.\nContoh: ${usedPrefix}${command} <url>`, m);
        }

        const url = args[0];
        const pinterest = new Pinterest();

        await fuzzy.sendMessage(m.chat, {
          react: {
            text: '🕒',
            key: m.key
          }
        });

        const buffer = await pinterest.getBuffer(url);

        if (buffer) {
          const contentUrl = await pinterest.getURL(url);
          const isImage = contentUrl.endsWith('.jpg') || contentUrl.endsWith('.png') || contentUrl.endsWith('.jpeg');
          if (isImage) {
            await fuzzy.sendMessage(m.chat, {
              image: buffer,
              caption: "Berhasil mengunduh gambar dari Pinterest!"
            }, {
              quoted: m
            });
          }
          else {
            await fuzzy.sendMessage(m.chat, {
              video: buffer,
              caption: "Berhasil mengunduh video dari Pinterest!"
            }, {
              quoted: m
            });
          }
        }
        else {
          reply("Gagal mengambil konten dari URL yang diberikan. Pastikan URL benar atau coba lagi nanti.");
        }
      }
      break
      case 'spam-pairing': {
        if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
        let [peenis, pepekk = "200"] = text.split("|")

        let target = peenis.replace(/[^0-9]/g, '').trim()
        let {
          default: makeWaSocket,
          useMultiFileAuthState,
          fetchLatestBaileysVersion
        } = require('@whiskeysockets/baileys')
        let {
          state
        } = await useMultiFileAuthState('./media/tmp/pepek')
        let {
          version
        } = await fetchLatestBaileysVersion()
        let pino = require("pino")
        let sucked = await makeWaSocket({
          auth: state,
          version,
          logger: pino({
            level: 'fatal'
          })
        })
        reply('succss')
        for (let i = 0; i < pepekk; i++) {
          await sleep(1500)
          let prc = await sucked.requestPairingCode(target)
          await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
        }
        await sleep(15000)
      }
      break
      case 'tts': {
        if (!text) return reply(`[ ! ] ${prefix}${command} halo world`)
        const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", {
          text: text,
          voice: "id_001"
        }, {
          headers: {
            Referer: "https://gesserit.co/tiktok",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
            responseType: "arraybuffer"
          }
        })).data
        const b = Buffer.from(a.audioUrl)
        fuzzy.sendMessage(m?.chat, {
          audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
          mimetype: "audio/mpeg"
        })
      }
      break
      case 'get': {
        if (!text) return m.reply(`awali *URL* dengan http:// atau https://`)
        try {
          const gt = await axios.get(text, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Referer": "https://www.google.com/",
              "Referrer-Policy": "strict-origin-when-cross-origin",
              "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            responseType: 'arraybuffer'
          });
          const contentType = gt.headers['content-type'];
          console.log(`Content-Type: ${contentType}`);
          if (/json/i.test(contentType)) {
            const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
            return m.reply(JSON.stringify(jsonData, null, 2));
          }
          else if (/text/i.test(contentType)) {
            const textData = Buffer.from(gt.data, 'binary').toString('utf8');
            return m.reply(textData);
          }
          else if (text.includes('webp')) {
            return fuzzy.sendImageAsSticker(m.chat, text, m, {
              packname: packname,
              author: author
            })
          }
          else if (/image/i.test(contentType)) {
            return fuzzy.sendMessage(m.chat, {
              image: {
                url: text
              }
            }, {
              quoted: m
            });
          }
          else if (/video/i.test(contentType)) {
            return fuzzy.sendMessage(m.chat, {
              video: {
                url: text
              }
            }, {
              quoted: m
            });
          }
          else if (/audio/i.test(contentType) || text.includes(".mp3")) {
            return fuzzy.sendMessage(m.chat, {
              audio: {
                url: text
              }
            }, {
              quoted: m
            });
          }
          else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
            return fuzzy.sendFile(m.chat, text, '', text, m)
          }
          else if (/application\/pdf/i.test(contentType)) {
            return fuzzy.sendFile(m.chat, text, '', text, m)
          }
          else {
            return m.reply(`MIME : ${contentType}\n\n${gt.data}`);
          }
        }
        catch (error) {
          console.error(`Terjadi kesalahan: ${error}`);
          return m.reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
        }
      }
      break
case 'ytmp4': {
  if (!text) return reply(`Gunakan dengan format ${command} link\n\nContoh:\n\n${command} link`);
          
  try {
    reply(`⏳ Sedang mengunduh video...\n\n${result.title}\nKualitas: ${result.quality}`);
    
    // Tentukan kualitas video, default ke 720p jika tidak ditentukan
    let quality = "720";
    
    // Gunakan scraper baru
    const result = await yetedln(text, "video", quality);
    
    // Kirim pesan sedang diproses
    
    // Kirim video
    await fuzzy.sendMessage(from, {
      video: { url: result.download },
      caption: `*${result.title}*\n\n⏱️ Duration: ${result.duration || "Unknown"}\n📊 Quality: ${result.quality}\n👤 Uploader: ${result.uploader || "Unknown"}`,
      mimetype: 'video/mp4',
      fileName: `${result.title}.mp4`
    }, { quoted: m });
   

    
  } catch (error) {
    console.error("Error fetching video:", error);
    reply("Maaf, terjadi kesalahan saat mencari data video. Coba lagi nanti.");
  }
}
break;
case 'play': {
  if (!text) return m.reply(`• Example :* .play *[query]`)
  m.reply('_Mohon tunggu, sedang memproses..._')

  const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
  const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

  const ddownr = {
    download: async (url, format) => {
      if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
        throw new Error('Format nya gk support wak, coba cek lagi listnya.');
      }

      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        const response = await axios.request(config);

        if (response.data && response.data.success) {
          const {
            id,
            title,
            info
          } = response.data;
          const {
            image
          } = info;
          const downloadUrl = await ddownr.cekProgress(id);

          return {
            id: id,
            image: image,
            title: title,
            downloadUrl: downloadUrl
          };
        } else {
          throw new Error('Failed to fetch video details.');
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    cekProgress: async (id) => {
      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        while (true) {
          const response = await axios.request(config);

          if (response.data && response.data.success && response.data.progress === 1000) {
            return response.data.download_url;
          }
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
  }

  try {
    const searchResults = await yts(text)
    if (!searchResults.videos.length) {
      return m.reply('Tidak menemukan video yang cocok.')
    }

    const videoData = searchResults.videos[0]
    const videoUrl = videoData.url

    try {
      const downloadResult = await ddownr.download(videoUrl, 'mp3')

      if (!downloadResult || !downloadResult.downloadUrl) {
        return m.reply('Gagal mendapatkan audio. Pastikan query valid.')
      }

      await fuzzy.sendMessage(m.chat, {
        audio: {
          url: downloadResult.downloadUrl
        },
        mimetype: "audio/mpeg",
        fileName: `${downloadResult.title || 'Play Downloader'}.mp3`,
      }, {
        quoted: m
      })


    } catch (scraperError) {
      console.error('Scraper error:', scraperError)
      return m.reply('Terjadi kesalahan saat mengunduh audio. Silakan coba lagi.')
    }

  } catch (searchError) {
    console.error('Search error:', searchError)
    return m.reply('Terjadi kesalahan saat mencari video. Silakan coba lagi.')
  }
}
break
//======[ SEARCH ]======\\
      case 'colong':
      case 'wm': {
        if (!m?.quoted) return m.reply('reply with a sticker!')
        let stiker = false
        try {
          let [packname, ...author] = text.split('|')
          author = (author || []).join('|')
          let mime = m.quoted.mimetype || ''
          if (!/webp/.test(mime)) return m.reply('m?.reply with a sticker!')
          let img = await m.quoted.download()
          if (!img) return m.reply('Failed to download sticker!')
          stiker = await addExif(img, packname || '', author || '')
        }
        catch (e) {
          console.error(e)
          if (Buffer.isBuffer(e)) stiker = e
          else return m?.reply('An error occurred: ' + e)
        }
        finally {
          if (stiker) fuzzy.sendFile(m?.chat, stiker, 'wms.webp', '', m, false, {
            asSticker: true
          })
          else return m.reply('Conversion failed')
        }
      }
      break
      case 'smeme':
      case 'stickermeme':
      case 'stickmeme': {
        if (!/webp/.test(mime) && /image/.test(mime)) {
          if (!text) return reply(`Usage: ${prefix + command} bawah|atas\n\ncontoh !smeme hallo|dek`)
          atas = text.split('|')[0] ? text.split('|')[0] : '-'
          bawah = text.split('|')[1] ? text.split('|')[1] : '-'
          mee = await fuzzy.downloadAndSaveMediaMessage(quoted)
          mem = await UploadFileUgu(mee)
          meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
          memek = await fuzzy.sendImageAsSticker(m.chat, meme, m, {
            packname: global.packname,
            author: global.author
          })
        }
        else {
          reply(`Kirim/Balas Gambar Dengan Caption ${prefix + command} text1|text2`)
        }
      }
      break
case 'pin':
case 'pinterest': {
    if (!args[0]) return m.reply("Masukkan kata kunci pencarian! Contoh: *!pinterest cat*");

    let query = args.join(" ");
    let url = `https://api.siputzx.my.id/api/s/pinterest?query=${encodeURIComponent(query)}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (!data.status || !Array.isArray(data.data) || data.data.length === 0) {
            return m.reply("Gagal mengambil gambar. Coba kata kunci lain!");
        }

        let images = data.data.slice(0, 3); // Ambil 3 gambar pertama

        let mediaArray = images.map(item => ({
            image: { url: item.images_url },
            caption: `📌 *Pin:* ${item.pin}\n📆 *Tanggal:* ${item.created_at}\n🖼️ *Judul:* ${item.grid_title || "Tidak ada"}`
        }));

        for (let media of mediaArray) {
            await fuzzy.sendMessage(from, media, { quoted: m });
        }

    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil data.");
    }
}
break;
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replynano(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replynano(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await fuzzy.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
case 'kuromi': {
  try {
    let query = 'kuromi';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'dino': {
  try {
    let query = 'dino kuning';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'pucoyo': case 'pocoyo': {
  try {
    let query = 'pocoyo';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'caribuku': {
  if (!text) return reply(`Gunakan dengan cara ${command} *judul*\n\n_Contoh_\n\n${command} Nayla`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "📚",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API cari buku
    let {
      data
    } = await axios.get(`${apiUrlw}/api/caribuku?query=${text}`);

    // Cek apakah respons memiliki data buku
    if (!data || !data.length) {
      return reply("Tidak ada buku yang ditemukan. Silakan coba dengan judul yang berbeda.");
    }

    // Menyusun hasil buku dalam format pesan
    let bukuList = `Hasil Pencarian Buku untuk *"${text}"*:\n\n`;
    data.slice(0, 5).forEach((buku, index) => {
      bukuList += `*${index + 1}. ${buku.title}*\n`;
      bukuList += `📖 Rating: ${buku.rating}\n`;
      bukuList += `🔗 [Goodreads Link](${buku.link})\n\n`;
    });

    reply(bukuList); // Menampilkan hasil buku

  } catch (error) {
    console.error("Error fetching book data:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data buku. Silakan coba lagi nanti.");
  }
}
break;
			case 'wastalk': case 'whatsappstalk': {
				if (!text) return m.reply(`Example: ${prefix + command} @tag / 628xxx`)
				try {
					let num = m.quoted?.sender || m.mentionedJid?.[0] || text
					if (!num) return m.reply(`Example : ${prefix + command} @tag / 628xxx`)
					num = num.replace(/\D/g, '') + '@s.whatsapp.net'
					if (!(await fuzzy.onWhatsApp(num))[0]?.exists) return m.reply('Nomer tidak terdaftar di WhatsApp!')
					let img = await fuzzy.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
					let bio = await fuzzy.fetchStatus(num).catch(_ => { })
					let name = await fuzzy.getName(num)
					let business = await fuzzy.getBusinessProfile(num)
					let format = PhoneNum(`+${num.split('@')[0]}`)
					let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
					let country = regionNames.of(format.getRegionCode('international'));
					let wea = `WhatsApp Stalk\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Description* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
					img ? await fuzzy.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
				} catch (e) {
					m.reply('Nomer Tidak ditemukan!')
				}
			}
			break
case 'autoupdate': {
    if (!isCreator) return reply(mess.owner)    
      const config = {
        owner: 'xziyyy',
        repo: 'clairity',
        branch: 'master',
        directories: [
            'connect',
            'library',
            'media/plugins'
        ]
    }
    
    m.reply(`🔄 Memulai proses update otomatis dari ${config.owner}/${config.repo}...`)
    
    async function getDirectoryContents(directory) {
        try {
            const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${directory}?ref=${config.branch}`
            const { data } = await axios.get(url)
            return data
        } catch (error) {
            console.error(`Error fetching directory ${directory}:`, error.message)
            return []
        }
    }
    
    async function updateFile(item) {
        try {
            if (item.type !== 'file' || !item.download_url) {
                return { success: false, path: item.path, error: 'Bukan file atau tidak ada download URL' }
            }
            

            const rootDir = path.resolve(__dirname, '..')
            const targetPath = path.join(rootDir, item.path)
            
            fs.mkdirSync(path.dirname(targetPath), { recursive: true })
            
            const { data } = await axios.get(item.download_url)
            fs.writeFileSync(targetPath, data, 'utf-8')
            
            return { success: true, path: item.path }
        } catch (error) {
            console.error(`Error updating ${item.path}:`, error.message)
            return { success: false, path: item.path, error: error.message }
        }
    }
    
    async function processUpdate() {
        let totalFiles = 0
        let updatedFiles = 0
        let failedFiles = 0
        let needsRestart = false
        const results = []
        
        try {
            for (const directory of config.directories) {
                const contents = await getDirectoryContents(directory)

                for (const item of contents) {
                    totalFiles++
                    
                    if (item.type === 'dir') {
                        continue
                    }
                    
                    // Update file
                    const result = await updateFile(item)
                    results.push(result)
                    
                    if (result.success) {
                        updatedFiles++
                        // cek kebutuhan restart
                        if (item.path.startsWith('library/') || item.path.startsWith('media/plugins/')) {
                            needsRestart = true
                        }
                    } else {
                        failedFiles++
                    }
                }
            }
            
            let report = `✅ *Update Selesai*\n\n`
            report += `📊 *Statistik*:\n`
            report += `- Total file: ${totalFiles}\n`
            report += `- Berhasil diupdate: ${updatedFiles}\n`
            report += `- Gagal diupdate: ${failedFiles}\n\n`
            
            if (updatedFiles > 0) {
                report += `📄 *Files Updated*:\n`
                let fileList = results
                    .filter(r => r.success)
                    .map(r => `- ${r.path}`)
                    .join('\n')
                
                if (fileList.length > 1000) {
                    const files = fileList.split('\n').slice(0, 15)
                    fileList = files.join('\n') + '\n- ... dan file lainnya'
                }
                
                report += fileList + '\n\n'
            }
            
            if (failedFiles > 0) {
                report += `❌ *Files Failed*:\n`
                const failedList = results
                    .filter(r => !r.success)
                    .map(r => `- ${r.path}: ${r.error}`)
                    .join('\n')
                report += failedList + '\n\n'
            }
            
            if (needsRestart) {
                report += `⚠️ *PENTING*: File di direktori library atau plugins telah diupdate. Silakan restart bot untuk menerapkan perubahan.`
            } else {
                report += `ℹ️ Tidak ada file yang memerlukan restart, perubahan sudah aktif.`
            }
            
            return report
            
        } catch (error) {
            console.error('Error in processUpdate:', error)
            return `❌ Terjadi kesalahan saat update: ${error.message}`
        }
    }
    
    processUpdate()
        .then(report => {
            m.reply(report)
        })
        .catch(error => {
            m.reply(`❌ Terjadi kesalahan: ${error.message}`)
        })
}
break
/*
case 'autoupdate': {
    if (!isCreator) return reply(mess.owner)
    
    const axios = require('axios')
    const fs = require('fs')
    const path = require('path')
    
    // Configurasi repository
    const config = {
        owner: 'xziyyy',
        repo: 'clairity',
        branch: 'master',
        directories: [
            'connect',
            'library',
            'media/plugins'
        ]
    }
    
    m.reply(`🔄 Memulai proses update otomatis dari ${config.owner}/${config.repo}...`)
    
    async function getDirectoryContents(directory) {
        try {
            const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${directory}?ref=${config.branch}`
            const { data } = await axios.get(url)
            return data
        } catch (error) {
            console.error(`Error fetching directory ${directory}:`, error.message)
            return []
        }
    }
    
    async function updateFile(item) {
        try {
            if (item.type !== 'file' || !item.download_url) {
                return { success: false, path: item.path, error: 'Bukan file atau tidak ada download URL' }
            }
            
            const rootDir = path.resolve(__dirname, '..')
            const targetPath = path.join(rootDir, item.path)
            
            fs.mkdirSync(path.dirname(targetPath), { recursive: true })
            
            const { data } = await axios.get(item.download_url)
            fs.writeFileSync(targetPath, data, 'utf-8')
            
            return { success: true, path: item.path }
        } catch (error) {
            console.error(`Error updating ${item.path}:`, error.message)
            return { success: false, path: item.path, error: error.message }
        }
    }
    
    async function processUpdate() {
        let totalFiles = 0
        let updatedFiles = 0
        let failedFiles = 0
        let needsRestart = false
        const results = []
        
        try {
            for (const directory of config.directories) {
                const contents = await getDirectoryContents(directory)
                
                for (const item of contents) {
                    totalFiles++
                    
                    if (item.type === 'dir') {
                        continue
                    }
                    const result = await updateFile(item)
                    results.push(result)
                    
                    if (result.success) {
                        updatedFiles++
                       if (item.path.endsWith('xZiyy.js')) {
                            needsRestart = true
                        }
                    } else {
                        failedFiles++
                    }
                }
            }
            

            let report = `✅ *Update Selesai*\n\n`
            report += `📊 *Statistik*:\n`
            report += `- Total file: ${totalFiles}\n`
            report += `- Berhasil diupdate: ${updatedFiles}\n`
            report += `- Gagal diupdate: ${failedFiles}\n\n`
            
            if (updatedFiles > 0) {
                report += `📄 *Files Updated*:\n`
                let fileList = results
                    .filter(r => r.success)
                    .map(r => `- ${r.path}`)
                    .join('\n')
                
                if (fileList.length > 1000) {
                    const files = fileList.split('\n').slice(0, 15)
                    fileList = files.join('\n') + '\n- ... dan file lainnya'
                }
                
                report += fileList + '\n\n'
            }
            
            if (failedFiles > 0) {
                report += `❌ *Files Failed*:\n`
                const failedList = results
                    .filter(r => !r.success)
                    .map(r => `- ${r.path}: ${r.error}`)
                    .join('\n')
                report += failedList + '\n\n'
            }
            
            if (needsRestart) {
                report += `⚠️ *PENTING*: File utama (xZiyy.js) telah diupdate. Silakan restart bot untuk menerapkan perubahan.`
            } else {
                report += `ℹ️ Tidak ada file utama yang diupdate, perubahan sudah aktif.`
            }
            
            return report
            
        } catch (error) {
            console.error('Error in processUpdate:', error)
            return `❌ Terjadi kesalahan saat update: ${error.message}`
        }
    }

    processUpdate()
        .then(report => {
            m.reply(report)
        })
        .catch(error => {
            m.reply(`❌ Terjadi kesalahan: ${error.message}`)
        })
}
break
*/
case 'update': {
    if (!isCreator) return reply(mess.owner)
	if (!text) return m.reply('Masukkan URL raw GitHub yang ingin diupdate!')

	const axios = require('axios')
	const fs = require('fs')
	const path = require('path')

	try {
		const url = text.trim()
		if (!url.startsWith('https://raw.githubusercontent.com')) {
			return m.reply('Gunakan URL dari raw.githubusercontent.com')
		}

		const relativePath = url.split('/master/')[1]
		if (!relativePath) return m.reply('URL tidak valid.')

		const rootDir = path.resolve(__dirname, '..')
		const targetPath = path.join(rootDir, relativePath)

		fs.mkdirSync(path.dirname(targetPath), { recursive: true })

		const { data } = await axios.get(url)
		fs.writeFileSync(targetPath, data, 'utf-8')

		m.reply(`✅ Berhasil update *${relativePath}*\nLokasi: ${targetPath}\n\n${relativePath.endsWith('xZiyy.js') ? 'Silakan restart bot untuk menerapkan update ini.' : 'Perubahan langsung aktif (jika require baru dipanggil).'} `)
	} catch (e) {
		console.error(e)
		m.reply('❌ Gagal update. Cek URL atau struktur folder.')
	}
}
break
case 'tesupdate':{
reply('Already Up To date: 8, Mei, 2025')
}
break

case 'rumaysho': {
  if (!text) return reply(`Gunakan dengan cara ${command} *topik*\n\n_Contoh_\n\n${command} Jum'at`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "⏱️",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API Rumaysho
    let {
      data
    } = await axios.get(`${apiUrlw}/api/rumaysho?query=${encodeURIComponent(text)}`);

    // Cek apakah data yang diterima bukan array kosong
    if (!data || data.length === 0) {
      reply("Maaf, artikel tidak ditemukan untuk pencarian ini.");
      return;
    }

    // Membuat teks hasil pencarian artikel
    let hasil = '*Hasil Pencarian Artikel*:\n\n';
    data.forEach((item, index) => {
      hasil += `*${index + 1}. ${item.title}*\n`;
      hasil += `🔗 ${item.link}\n\n`;
    });

    reply(hasil);
  } catch (error) {
    console.error("Error fetching articles:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.");
  }
}
break;
case 'kajian': {
  if (!text) return reply(`Gunakan dengan cara ${command} *topik*\n\n_Contoh_\n\n${command} Kajian Rutin Kamis Sore`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "⏱️",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API YPIA
    let {
      data
    } = await axios.get(`${apiUrlw}/api/ypia?query=${encodeURIComponent(text)}`);

    // Cek apakah data yang diterima bukan array kosong
    if (!data || data.length === 0) {
      reply("Maaf, tidak ditemukan kajian untuk topik yang dicari.");
      return;
    }

    // Membuat teks hasil pencarian kajian
    let hasil = '*Hasil Pencarian Kajian*:\n\n';
    data.forEach((item, index) => {
      hasil += `*${index + 1}. ${item.title}*\n`;
      hasil += `🔗 ${item.link}\n\n`;
    });

    reply(hasil);
  } catch (error) {
    console.error("Error fetching kajian:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.");
  }
}
break;
case 'soundc':
case 'soundcloud': {
  // Mengecek apakah pengguna memberikan query pencarian
  if (!text) return reply(`Gunakan dengan format ${command} *judul lagu*\n\nContoh:\n\n${command} helena`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "🔍",
      key: m.key
    }
  });

  try {
    // Mengirim request ke API dengan query
    let response = await axios.get(`${apiUrlw}/api/soundcloud?query=${encodeURIComponent(text)}`);

    // Mengambil data dari hasil API
    let results = response.data;

    // Mengecek apakah ada hasil
    if (results.length > 0) {
      let message = `Hasil pencarian SoundCloud untuk *"${text}"*:\n\n`;

      // Looping hasil dan format menjadi string
      results.forEach((item, index) => {
        message += `${index + 1}. *${item.title}*\n`;
        if (item.creator) message += `   🎙️ Creator: ${item.creator}\n`;
        if (item.views) message += `   👀 Views: ${item.views}\n`;
        if (item.duration) message += `   ⏱️ Duration: ${item.duration}\n`;
        if (item.uploadDate) message += `   📅 Uploaded: ${item.uploadDate}\n`;
        message += `   🔗 [Link](${item.url})\n\n`;
      });

      reply(message);
    } else {
      reply("Maaf, tidak ada hasil yang ditemukan untuk pencarian tersebut.");
    }
  } catch (error) {
    console.error("Error fetching SoundCloud results:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data dari SoundCloud.");
  }
}
break;

case 'gamedva': {
  try {
    if (!text) return reply("Masukkan query untuk pencarian.");

    const apiUrl = `${apiUrlw}/api/gamedva?query=${encodeURIComponent(text)}&url=&type=searchApp`;

    const response = await axios.get(apiUrl);
    res = response.data

    if (res.length === 0) {
      return reply("Tidak ditemukan hasil pencarian.");
    }

    const message = res.map(res => {
      const {
        title,
        developer,
        link,
        image,
        version
      } = res
      return `🎮 **${title}**\n🔗 link: ${link}\nimage: ${image}\nversion: ${version}`;
    }).join("\n");

    reply(message);
  } catch (error) {
    console.error("Error fetching GameDVA data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data.");
  }
}
break;
//======[ BERITA ]======\\
case 'gempa': {
  try {
    const apiUrl = `${apiUrlw}/api/gempa`;

    const response = await axios.get(apiUrl);
    const {
      status,
      data
    } = response.data;

    if (status !== "success") {
      return reply("Gagal mendapatkan data gempa.");
    }

    const {
      gempa
    } = data.Infogempa;
    const {
      Tanggal,
      Jam,
      Coordinates,
      Lintang,
      Bujur,
      Magnitude,
      Kedalaman,
      Wilayah,
      Potensi,
      Dirasakan,
      Shakemap
    } = gempa;

    // Menyusun pesan detail gempa
    const message = `
      🌀 **Info Gempa** 🌀
      📅 Tanggal: ${Tanggal}
      🕒 Jam: ${Jam}
      📍 Koordinat: ${Coordinates} (${Lintang}, ${Bujur})
      🌍 Wilayah: ${Wilayah}
      ⚖️ Magnitude: ${Magnitude}
      🌊 Kedalaman: ${Kedalaman}
      💨 Potensi: ${Potensi}
      🌍 Dirasakan: ${Dirasakan}
    `;

    reply(message);
  } catch (error) {
    console.error("Error fetching Gempa data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data gempa.");
  }
}
break;
case 'liputan6': {
  reply('Tunggu sebentar, sedang mengambil data...');

  // Fungsi untuk mengambil data dari API
  async function fetchNews() {
    const res = await axios.get(`${apiUrlw}/api/liputan6`);
    return res.data.data;
  }

  try {
    const newsData = await fetchNews();

    if (!newsData || newsData.length === 0) {
      return m.reply('Tidak ada berita ditemukan.');
    }

    // Gabungkan semua berita ke dalam satu pesan
    let allNews = `*Berita Terbaru dari Liputan6*\n\n`;

    newsData.forEach((item, index) => {
      const {
        title,
        link,
        tag,
        image,
        source
      } = item;

      allNews += `*Berita ${index + 1}*\n` +
        `▢ *Judul* : ${title}\n` +
        `▢ *Tag* : ${tag || 'Tidak ada tag'}\n` +
        `▢ *Sumber* : ${source}\n` +
        `▢ *Link* : [Baca Selengkapnya](${link})\n\n`;
    });

    // Kirim semua berita dalam satu pesan
    m.reply(allNews);
  } catch (error) {
    console.error('Error fetching news:', error);
    m.reply('Maaf, terjadi kesalahan saat mengambil berita.');
  }
}
break;
//======[ QUOTES ]======\\
      case 'quotes-en': {
        async function quotePopular() {
          try {
            // Mengambil halaman Goodreads
            const response = await axios.get('https://www.goodreads.com/quotes');
            const $ = cheerio.load(response.data);
            const quotes = [];

            // Scraping data quotes
            $('.quote').each((i, element) => {
              const quoteText = $(element).find('.quoteText').text().trim();
              const author = $(element).find('.authorOrTitle').text().trim();

              quotes.push({
                quote: quoteText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim(),
                author: author || "Unknown"
              });
            });

            // Kembalikan hasil berupa array
            return quotes;
          }
          catch (error) {
            // Tangani error jika ada
            throw error;
          }
        }

        // Memanggil fungsi dan menangani hasil
        quotePopular().then(hasil => {
          if (hasil.length === 0) {
            m.reply('Tidak ada hasil yang ditemukan.');
            return;
          }

          // Pilih salah satu secara acak
          const randomResult = hasil[Math.floor(Math.random() * hasil.length)];
          const replyText = `_${randomResult.quote}_\n\n` +
            `~${randomResult.author}`;

          // Kirim balasan
          m.reply(replyText);
        }).catch(error => {
          // Tangani error
          m.reply('Terjadi kesalahan saat mengambil Quote Popular.');
          m.reply(error.message);
        });
      }
      break;
      case 'quotes': {
        //wm senn
        async function quotes(input) {
          return new Promise((resolve, reject) => {
            fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
              .then(res => res.text())
              .then(res => {
                const $ = cheerio.load(res)
                data = []
                $('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
                  x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
                  y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
                  z = $(element).find('q[class="fbquote"]').text().trim()
                  //wm senn
                  data.push({
                    author: x,
                    bio: y,
                    quote: z
                  })
                })
                data.splice(2, 1)
                //wm senn
                if (data.length == 0) return resolve({
                  creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb',
                  status: false
                })
                resolve({
                  creator: '@neoxr - Wildan Izzudin & @ariffb.id - Ariffb',
                  status: true,
                  data
                })
              }).catch(reject)
          })
        }
        //wm senn
        if (!text) return m.reply("Masukan Tipe Quotes\n\nContoh: .quotes senja")
        //wm senn
        let ayam = await quotes(text)
        //wm senn
        let jawir = ayam.data
        let ngawi = pickRandom(jawir)
        //wm senn
        let cap = `  
_${ngawi.quote}_

~ ${ngawi.author}
`.trim()
        //wm senn
        reply(cap)
      }
      break
      case 'quotesanime': {
        async function quotesAnime() {
          try {
            const page = Math.floor(Math.random() * 184);
            const {
              data
            } = await axios.get('https://otakotaku.com/quote/feed/' + page);
            const $ = cheerio.load(data);
            const hasil = [];
            $('div.kotodama-list').each((l, h) => {
              hasil.push({
                link: $(h).find('a').attr('href'),
                gambar: $(h).find('img').attr('data-src'),
                karakter: $(h).find('div.char-name').text().trim(),
                anime: $(h).find('div.anime-title').text().trim(),
                episode: $(h).find('div.meta').text(),
                up_at: $(h).find('small.meta').text(),
                quotes: $(h).find('div.quote').text().trim()
              });
            });
            return hasil;
          }
          catch (error) {
            throw error;
          }
        }

        quotesAnime().then(hasil => {
          if (hasil.length === 0) {
            m.reply('Tidak ada hasil yang ditemukan.');
            return;
          }

          // Ambil 1 data saja
          const randomResult = hasil[Math.floor(Math.random() * hasil.length)];
          const replyTextt = `[ *QUOTESANIME* ]\n\nQuotes: ${randomResult.quotes}\nAnime: ${randomResult.anime}\nEpisode: ${randomResult.episode}\nUp: ${randomResult.up_at}\nKarakter: ${randomResult.karakter}\nLink: ${randomResult.link}`;

          reply(replyTextt);
        }).catch(error => {
          m.reply('Terjadi kesalahan saat merandom di QuotesAnime.');
          m.reply(error.message);
        });
      }
      break;
case 'jodohku': {
	if (!m.isGroup) return m.reply(mess.group)
	const metadata = await fuzzy.groupMetadata(m.chat)
	const member = metadata.participants.map(a => a.id).filter(id => id !== m.sender)
	if (member.length < 1) return m.reply('Tidak cukup member untuk mencari jodoh.')
	const jodoh = pickRandom(member)
	await fuzzy.sendMessage(m.chat, {
		text: `👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`,
		mentions: [m.sender, jodoh]
	}, { quoted: m })
}
break

case 'jadian': {
	if (!m.isGroup) return m.reply(mess.group)
	const metadata = await fuzzy.groupMetadata(m.chat)
	const member = metadata.participants.map(a => a.id)
	if (member.length < 2) return m.reply('Tidak cukup member untuk dijodohkan.')
	let j1, j2
	do {
		j1 = pickRandom(member)
		j2 = pickRandom(member)
	} while (j1 === j2)
	await fuzzy.sendMessage(m.chat, {
		text: `Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${j1.split('@')[0]} ❤ @${j2.split('@')[0]}`,
		mentions: [j1, j2]
	}, { quoted: m })
}
break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				fuzzy.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
      case 'cekkodam': {
        if (!text) return m.reply("ketik nama mu")

        const khodam = pickRandom([
          "Kaleng Cat Avian",
          "Pipa Rucika",
          "King Hitam",
          "Lemari dua Pintu",
          "Kacang Hijau",
          "Kulkas mini",
          "Burung beo",
          "Air",
          "Api",
          "Batu",
          "Magnet",
          "Sempak",
          "Botol Tupperware",
          "Badut Mixue",
          "Sabun GIV",
          "Sandal Swallow",
          "Jarjit",
          "Ijat",
          "Fizi",
          "Mail",
          "Ehsan",
          "Upin",
          "Ipin",
          "sungut lele",
          "Tok Dalang",
          "Opah",
          "Opet",
          "Alul",
          "Pak Vinsen",
          "Maman Resing",
          "Pak RT",
          "Admin ETI",
          "Bung Towel",
          "Lumpia Basah",
          "Bjorka",
          "Hacker",
          "Martabak Manis",
          "Baso Tahu",
          "Tahu Gejrot",
          "Dimsum",
          "Seblak",
          "Aromanis",
          "Gelembung sabun",
          "Kuda",
          "Seblak Ceker",
          "Telor Gulung",
          "Tahu Aci",
          "Tempe Mendoan",
          "Nasi Kucing",
          "Kue Cubit",
          "Tahu Sumedang",
          "Nasi Uduk",
          "Wedang Ronde",
          "Kerupuk Udang",
          "Cilok",
          "Cilung",
          "Kue Sus",
          "Jasuke",
          "Seblak Makaroni",
          "Sate Padang",
          "Sayur Asem",
          "Kromboloni",
          "Marmut Pink",
          "Belalang Mullet",
          "Kucing Oren",
          "Lintah Terbang",
          "Singa Paddle Pop",
          "Macan Cisewu",
          "Vario Mber",
          "Beat Mber",
          "Supra Geter",
          "Oli Samping",
          "Knalpot Racing",
          "Jus Stroberi",
          "Jus Alpukat",
          "Alpukat Kocok",
          "Es Kopyor",
          "Cappucino Cincau",
          "Jasjus Melon",
          "Teajus Apel",
          "Pop ice Mangga",
          "Teajus Gulabatu",
          "Air Selokan",
          "Air Kobokan",
          "TV Tabung",
          "Keran Air",
          "Tutup Panci",
          "Kotak Amal",
          "Tutup Termos",
          "Tutup Botol",
          "Kresek Item",
          "Kepala Casan",
          "Ban Serep",
          "Kursi Lipat",
          "Kursi Goyang",
          "Kulit Pisang",
          "Warung Madura",
          "Gorong-gorong",
        ])

        const a = await (await axios.post("https://gesserit.co/api/tiktok-tts", {
          text: `${text}, khodamnya: ${khodam}. jangan lupa di tap tap`,
          voice: "id_001"
        }, {
          headers: {
            Referer: "https://gesserit.co/tiktok",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
            responseType: "arraybuffer"
          }
        })).data
        const b = Buffer.from(a.audioUrl)
        fuzzy.sendMessage(from, {
          audio: Buffer.from(a.audioUrl.split("base64,")[1], "base64"),
          mimetype: 'audio/mpeg', // pastikan MIME type sesuai dengan format audio
          ptt: true // Ini adalah parameter untuk mengirimkan sebagai voice note (Push To Talk)
        });
      }
      break
//======[ TOOLS ]======\\
case 'ssweb': {
  if (!text) return reply(`Gunakan dengan cara ${command} *link*\n\n_Contoh_\n\n${command} https://xZiyy.com`);

  if (!text.startsWith('https://')) {
    return reply('Link harus menggunakan https://');
  }

  let ss = await (await fetch(`https://image.thum.io/get/fullpage/${text}`)).buffer();
  fuzzy.sendFile(m?.chat, ss, "", "Done", m);
}
break;
			case 'tourlv2': {
				try {
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UploadFileUgu(media)
						m.reply('Url : ' + anu.url)
					} else m.reply('Send Media yg ingin di Upload!')
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
			break
    case 'tourl': {
        if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
        try {
          let media = await fuzzy.downloadAndSaveMediaMessage(quoted, makeid(5))
          let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
            console.log(stdout)
            return reply(stdout)
          })
        }
        catch (error) {
          console.log(error)
          return reply("Error...")
        }
      }
      break
case 'translate': {

  async function fetchTranslation(text, target) {
    const res = await axios.get(`${apiUrlw}/api/translate?text=${encodeURIComponent(text)}&target=${target}`);
    return res.data;
  }

  const swn = args.join(" ")
  const text = swn.split(",")[0];
  const target = swn.split(",")[1];

  if (!text) {
    return m.reply('Masukkan teks yang ingin diterjemahkan.\ncontoh:\n!translate hello world, en\n!translate hello world, id\n\nketik !languages untuk melihat bahasa');
  }

  if (!target) {
    return m.reply('Masukkan teks yang ingin diterjemahkan.\ncontoh:\n!translate hello world, en\n!translate hello world, id\n\nketik !languages untuk melihat bahasa');
  }

  try {
    const result = await fetchTranslation(text, target);

    if (!result.success) {
      return m.reply('Gagal menerjemahkan teks.');
    }

    const {
      translatedText
    } = result;
    m.reply(`Hasil terjemahan:\n\n${translatedText}`);
  } catch (error) {
    console.error('Error fetching translation:', error);
    m.reply('Maaf, terjadi kesalahan saat menerjemahkan teks.');
  }
}
break;
case 'languages': {
  reply('Tunggu sebentar, sedang mengambil daftar bahasa...');

  async function fetchLanguages() {
    const res = await axios.get(`${apiUrlw}/api/languages`);
    return res.data;
  }

  try {
    const result = await fetchLanguages();

    if (!result.success) {
      return m.reply('Gagal mengambil daftar bahasa.');
    }

    const {
      languages
    } = result;
    let languageList = '*Daftar Bahasa yang Tersedia*\n\n';

    for (const [code, name] of Object.entries(languages)) {
      languageList += `▢ ${name} (${code})\n`;
    }

    m.reply(languageList);
  } catch (error) {
    console.error('Error fetching languages:', error);
    m.reply('Maaf, terjadi kesalahan saat mengambil daftar bahasa.');
  }

}
break;
//======[ OWNER ]======\\
      case 'delsesi':
      case 'clear':
      case 'ds':
      case 'clearsession': {
        if (!isCreator) return reply(mess.owner)
        fs.readdir("./media/database/session", async function (err, files) {
          if (err) {
            console.log('Unable to scan directory: ' + err);
            return reply('Unable to scan directory: ' + err);
          }
          let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
          )
          console.log(filteredArray.length);
          /*let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return reply(teks)
          filteredArray.map(function(e, i) {
          teks += (i + 1) + `. ${e}\n`
          })
          reply(teks)
          await sleep(2000)*/
          reply("Menghapus file sampah...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./media/database/session/${file}`)
          });
          await sleep(2000)
          reply("Berhasil menghapus semua sampah di folder session")
        });
      }
      break
      case 'delsampah': {
        if (!isCreator) return reply(mess.owner)
        let directoryPath = path.join('./media/tmp') //&& './media') //path.join();
        fs.readdir(directoryPath, async function (err, files) {
          if (err) {
            return reply('Tidak dapat memindai direktori: ' + err);
          }
          let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm") || item.endsWith("bin"))
          var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return reply(teks)
          filteredArray.map(function (e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          reply(teks)
          await sleep(2000)
          m.reply("Menghapus file sampah...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./media/tmp/${file}`) //&& `./media/${file}`) 
          });
          await sleep(2000)
          reply("Berhasil menghapus semua sampah")
        });
      }
      break
      case 'backup': {
        if (!isCreator) return reply(mess.owner)
        await reply('akan dikirim me nomor owner..');
        const {
          execSync
        } = require("child_process");
        const ls = (await execSync("ls"))
          .toString()
          .split("\n")
          .filter(
            (pe) =>
            pe != "node_modules" &&
            pe != "package-lock.json" &&
            pe != "yarn.lock" &&
            pe != ""
          );
        const dyn = moment.tz('Asia/Jakarta').format('dddd-DD-MMMM-YYYY')
        const exec = await execSync(`zip -r clairity-${dyn}.zip ${ls.join(" ")}`);
        await fuzzy.sendMessage(`${global.owner}@s.whatsapp.net`, {
          document: await fs.readFileSync(`./clairity-${dyn}.zip`),
          mimetype: "application/zip",
          fileName: `clairity-${dyn}.zip`,
        }, {
          quoted: m
        });
        await execSync(`rm -rf clairity-${dyn}.zip`);
      }
      break

case 'setwelcome':{
   if (!isAdmins && !isCreator) return reply('only admin & creator')
   if (!m.isGroup) return reply('only gc')
   if (!text) return reply('Masukkan teks welcome-nya!\nContoh: .setwelcome Selamat datang @user di grup @group\n\n\n@user // untuk menyebut user yg masuk\n@group untuk menyebut nama group\n@desc untuk menampilkan deskripsi group');
   global.db.data.chats[m.chat].welcomeText = text; // Simpan teks welcome per grup
   reply('Teks welcome berhasil disimpan!');
}
break
case 'setleave':{
   if (!isAdmins && !isCreator) return reply('only admin & creator')
   if (!m.isGroup) return reply('only gc')
   if (!text) return reply('Masukkan teks leave-nya!\nContoh: .setleave Selamat tinggal @user di grup @group\n\n\n@user // untuk menyebut user yg masuk\n@group untuk menyebut nama group\n@desc untuk menampilkan deskripsi group');
   global.db.data.chats[m.chat].leaveText = text; // Simpan teks welcome per grup
   reply('Teks welcome berhasil disimpan!');
}
break
case 'creator':
case 'owner': {
  const Kontol = await m.reply("ini dia ownerku yang baik hati dan tidak sombong, jangan di spam yaa kalo gak di bales!!")
  const options = {
    contextInfo: {
      forwardingScore: 10,
      isForwarded: true
    }
  }; // Opsional
  fuzzy.sendContact(from, global.owner, Kontol, options)
}
break
case 'setimgmenu': {
	if (!isCreator) return reply(mess.owner)
	if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
	try {
		let media = await quoted.download()
		          let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
        global.menuimgUrl = stdout
		reply(`Success: Image menu berhasil disimpan!\n\n${stdout}`)
     })
	} catch (error) {
		console.log(error)
		return reply("Gagal upload ke server!")
	}
}
break

case 'setimgreply': {
	if (!isCreator) return reply(mess.owner)
	if (!quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)
	try {
		let media = await quoted.download()
        let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
		global.imgUrl = stdout
		reply('Success: Image reply berhasil disimpan!')
    })
	} catch (error) {
		console.log(error)
		return reply("Gagal upload ke server!")
	}
}
break
case 'setbotname': {
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.botname = text
}
break
case 'setownername': {
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.ownername = text
}
break
case 'setownernumber': {
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.owner = text
}
break
case 'tes': {
  reply('aktif kak')
}
break
case 'onlygroup':
case 'onlygc':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
  db.data.settings[botNumber].onlygrub = true
  db.data.settings[botNumber].onlypc = true
  reply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
  db.data.settings[botNumber].onlygrub = false
  db.data.settings[botNumber].onlypc = false
  reply(`Successfully Changed Onlygroup To ${q}`)
}
break
case 'banchat': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "on") {
    db.data.chats[m?.chat].isBannedChat = true
    reply("berhasil banchat")
  } else if (args[0] == "off") {
    db.data.chats[m?.chat].isBannedChat = false
    reply("berhasil unbanchat")
  } else {
    reply('contoh:\n!banchat on')
  }
}
break

case 'onlyadmin': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "off") {
    if (db.data.settings[botNumber].public == true) return reply("Sudah off")
    db.data.settings[botNumber].public = true
    reply("Mode admin Telah pff")
  } else if (args[0] == "on") {
    if (db.data.settings[botNumber].public == false) return reply("Sudah on")
    db.data.settings[botNumber].public = false
    reply("Mode admin Telah Active")
  }
}
break
case 'mode': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "public") {
    if (db.data.settings[botNumber].public == true) return reply("Sudah Active")
    db.data.settings[botNumber].public = true
    reply("Mode Public Telah Active")
  } else if (args[0] == "self") {
    if (db.data.settings[botNumber].public == false) return reply("Sudah on")
    db.data.settings[botNumber].public = false
    reply("Mode Self Telah Active")
  }
}
break

case 'ai': {
  if (!args[0]) {
    return m.reply("Gunakan perintah:\n- .ai on (untuk mengaktifkan AI)\n- .ai off (untuk menonaktifkan AI)");
  }

  if (args[0].toLowerCase() === "on") {
    if (!global.db.data.chats[m?.chat]) global.db.data.chats[m?.chat] = {};
    global.db.data.chats[m?.chat].autoai = true;
    return m.reply("Fitur AI telah diaktifkan untuk chat ini.");
  } else if (args[0].toLowerCase() === "off") {
    if (!global.db.data.chats[m?.chat]) global.db.data.chats[m?.chat] = {};
    global.db.data.chats[m?.chat].autoai = false;
    return m.reply("Fitur AI telah dinonaktifkan untuk chat ini.");
  } else {
    return m.reply("Pilihan tidak valid! Gunakan:\n- .ai on (untuk mengaktifkan AI)\n- .ai off (untuk menonaktifkan AI)");
  }
}
break




case 'cekcuaca': case 'cuaca': {
 if (!q) return reply('Masukkan nama lokasi!\nContoh: cekcuaca Jakarta');
 let lokasi = encodeURIComponent(q);
 let url = `https://fastrestapis.fasturl.cloud/search/bmkgweather?location=${lokasi}`;

 try {
 let res = await fetch(url);
 let json = await res.json();
 if (json.status !== 200 || json.content !== 'Success') {
 return m.reply('Gagal mengambil data cuaca!');
 }
 let cuaca = json.result.presentWeather.data.cuaca;
 let lokasiInfo = json.result.presentWeather.data.lokasi;
 let hasil = `*Cuaca Saat Ini - ${lokasiInfo.kotkab}, ${lokasiInfo.provinsi}*\n\n` +
 `• Lokasi: ${lokasiInfo.desa}, ${lokasiInfo.kecamatan}\n` +
 `• Cuaca: ${cuaca.weather_desc}\n` +
 `• Suhu: ${cuaca.t}°C\n` +
 `• Kelembapan: ${cuaca.hu}%\n` +
 `• Arah Angin: ${cuaca.wd} → ${cuaca.wd_to} (${cuaca.ws} km/jam)\n` +
 `• Jarak Pandang: ${cuaca.vs_text}\n` +
 `• Terakhir diperbarui: ${cuaca.local_datetime}\n`;

 await fuzzy.sendMessage(m.chat, {
 image: { url: cuaca.image },
 caption: hasil
 }, { quoted: m });
 } catch (e) {
 console.log(e);
 reply('Terjadi kesalahan saat mengambil data cuaca.');
 }
 }
 break



//++++++++[ STICKER ]++++++++++
      case 'bratvidio': 
      case 'bratvideo': {
        const ongoingCommands = new Set(); // Set untuk melacak proses berjalan

        // Cek apakah pengguna sudah menjalankan perintah
        if (ongoingCommands.has(m.sender)) {
          return m.reply('Maaf, masih ada perintah yang sedang berjalan. Tunggu sampai selesai.');
        }

        // Tandai pengguna sebagai sedang menjalankan perintah
        ongoingCommands.add(m.sender);

        try {
          if (!text) return reply(`Contoh: ${prefix + command} hai`);
          if (text.length > 250) return reply(`Karakter terbatas, max 250!`);

          const {
            execSync
          } = require('child_process');
          const words = text.split(" ");
          const tempDir = path.resolve('./media/tmp');
          if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
          const framePaths = [];

          for (let i = 0; i < words.length; i++) {
            const currentText = words.slice(0, i + 1).join(" ");

            const res = await axios.get(
              `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(currentText)}`, {
                responseType: "arraybuffer"
              }
            ).catch((e) => e.response);

            const framePath = path.join(tempDir, `frame${i}.mp4`);
            fs.writeFileSync(framePath, res.data);
            framePaths.push(framePath);
          }

          const fileListPath = path.join(tempDir, "filelist.txt");
          let fileListContent = "";

          for (let i = 0; i < framePaths.length; i++) {
            fileListContent += `file '${framePaths[i]}'\n`;
            fileListContent += `duration 0.7\n`;
          }

          fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
          fileListContent += `duration 2\n`;

          fs.writeFileSync(fileListPath, fileListContent);
          const outputVideoPath = path.join(tempDir, "output.mp4");
          execSync(
            `ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf "fps=30" -c:v libx264 -preset ultrafast -pix_fmt yuv420p ${outputVideoPath}`
          );

          await fuzzy.sendImageAsSticker(m.chat, outputVideoPath, m, {
            packname: `${m.pushName}\n\n\n\n\n\n\n\n${global.packname}`,
            author: global.author,
          });
 
          framePaths.forEach((frame) => {
            if (fs.existsSync(frame)) fs.unlinkSync(frame);
          });
          if (fs.existsSync(fileListPath)) fs.unlinkSync(fileListPath);
          if (fs.existsSync(outputVideoPath)) fs.unlinkSync(outputVideoPath);
        }
        catch (e) {
          console.error(e);
          reply('Terjadi kesalahan');
        }
        finally {
          ongoingCommands.delete(m.sender); // Hapus pengguna dari daftar proses berjalan
        }
        break;
      }
case 'igstalk': {
/*
Jangan Hapus Wm Bang 

*Instagram Stalker  Case*

Stalking Account Instagram Via Username 

*[Sumber]*
https://whatsapp.com/channel/0029Vb3u2awADTOCXVsvia28

*[Sumber Scrape]*

Jazxcode 
*/

  if (!args[0]) return m.reply('Masukkan Username Yamg Ingin Di Stalk\n\n*Example : .igstalk jokowi*');
  
  try {
    const query = args[0];
    const endpoint = 'https://privatephotoviewer.com/wp-json/instagram-viewer/v1/fetch-profile';
    const payload = { find: query };
    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'X-Requested-With': 'XMLHttpRequest',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
      'Referer': 'https://privatephotoviewer.com/'
    };

    const { data } = await axios.post(endpoint, payload, { headers });
    const html = data.html;
    const $ = cheerio.load(html);
    let profilePic = $('#profile-insta').find('.col-md-4 img').attr('src');
    if (profilePic && profilePic.startsWith('//')) {
      profilePic = 'https:' + profilePic;
    }
    const name = $('#profile-insta').find('.col-md-8 h4.text-muted').text().trim();
    const username = $('#profile-insta').find('.col-md-8 h5.text-muted').text().trim();
    const stats = {};
    $('#profile-insta')
      .find('.col-md-8 .d-flex.justify-content-between.my-3 > div')
      .each((i, el) => {
        const statValue = $(el).find('strong').text().trim();
        const statLabel = $(el).find('span.text-muted').text().trim().toLowerCase();
        if (statLabel.includes('posts')) {
          stats.posts = statValue;
        } else if (statLabel.includes('followers')) {
          stats.followers = statValue;
        } else if (statLabel.includes('following')) {
          stats.following = statValue;
        }
      });
    const bio = $('#profile-insta').find('.col-md-8 p').text().trim();

    let caption = `- *Name :* ${name}\n`
    caption += `- *Username :* ${username}\n`
    caption += `- *Posts :* ${stats.posts}\n`
    caption += `- *Followers :* ${stats.followers}\n`
    caption += `- *Following :* ${stats.following}\n`
    caption += `- *Bio :* ${bio}`;
    
    if (profilePic) {
      await fuzzy.sendMessage(m.chat, { 
        image: { url: profilePic },
        caption: caption
      }, { quoted: m });
    } else {
      await m.reply(caption);
    }
  } catch (error) {
    m.reply('Tidak Ada Akun Tersebut Atau Error');
  }
}
break;
    case 'tiktokstalk':
  case 'tikstalk': {
        if (!text) return m.reply('Masukkan username TikTok');

        try {
          // Validasi input username
          if (!text.trim()) return m.reply('Username tidak boleh kosong');

          // Ambil data dari API
          const response = await axios.get(`https://api.siputzx.my.id/api/stalk/tiktok?username=${text}`);
          const userData = response.data.data;

          // Susun pesan dengan SELURUH informasi yang didapatkan
          let pesan = `*📋 INFORMASI AKUN TIKTOK LENGKAP* 

👤 *PROFIL DASAR*
• Nama Panggilan: ${userData.user.nickname}
• ID Pengguna: ${userData.user.id}
• ID Unik: ${userData.user.uniqueId}
• Short ID: ${userData.user.shortId || 'Tidak tersedia'}
• Sec UID: ${userData.user.secUid}
• Bio: ${userData.user.signature}
• Wilayah: ${userData.user.region}
• Bahasa: ${userData.user.language}

🔍 *STATUS AKUN*
• Terverifikasi: ${userData.user.verified ? 'Ya' : 'Tidak'}
• Akun Pribadi: ${userData.user.privateAccount ? 'Ya' : 'Tidak'}
• Akun Rahasia: ${userData.user.secret ? 'Ya' : 'Tidak'}
• Organisasi: ${userData.user.isOrganization ? 'Ya' : 'Tidak'}

📊 *STATISTIK*
• Pengikut: ${userData.stats.followerCount.toLocaleString()}
• Mengikuti: ${userData.stats.followingCount.toLocaleString()}
• Total Like: ${userData.stats.heartCount.toLocaleString()}
• Jumlah Video: ${userData.stats.videoCount.toLocaleString()}
• Jumlah Disukai: ${userData.stats.diggCount.toLocaleString()}
• Jumlah Teman: ${userData.stats.friendCount.toLocaleString()}

🖼️ *AVATAR*
• Avatar Besar: ${userData.user.avatarLarger}
• Avatar Sedang: ${userData.user.avatarMedium}
• Avatar Kecil: ${userData.user.avatarThumb}

⚙️ *PENGATURAN*
• Pengaturan Komentar: ${userData.user.commentSetting}
• Pengaturan Duet: ${userData.user.duetSetting}
• Pengaturan Stitch: ${userData.user.stitchSetting}
• Pengaturan Download: ${userData.user.downloadSetting}

🌐 *TAUTAN & KONEKSI*
• Tautan Bio: ${userData.user.bioLink?.link || 'Tidak tersedia'}
• Risiko Tautan: ${userData.user.bioLink?.risk || 'Tidak diketahui'}

📅 *INFORMASI WAKTU*
• Waktu Pembuatan Akun: ${new Date(userData.user.createTime * 1000).toLocaleString()}
• Waktu Modifikasi Nama: ${new Date(userData.user.nickNameModifyTime * 1000).toLocaleString()}

🎵 *TAB PROFIL*
• Tab Musik: ${userData.user.profileTab.showMusicTab ? 'Aktif' : 'Tidak Aktif'}
• Tab Pertanyaan: ${userData.user.profileTab.showQuestionTab ? 'Aktif' : 'Tidak Aktif'}
• Tab Playlist: ${userData.user.profileTab.showPlayListTab ? 'Aktif' : 'Tidak Aktif'}

🏷️ *INFORMASI TAMBAHAN*
• Pengguna Komersial: ${userData.user.commerceUserInfo?.commerceUser ? 'Ya' : 'Tidak'}
• Jual di TikTok: ${userData.user.ttSeller ? 'Ya' : 'Tidak'}
• Visibilitas Mengikuti: ${userData.user.followingVisibility}
• Room ID: ${userData.user.roomId || 'Tidak tersedia'}`;

          // Kirim pesan
          m.reply(pesan);

        }
        catch (error) {
          console.error('Error:', error);

          // Tangani berbagai jenis kesalahan
          if (error.response) {
            // Kesalahan respons dari server
            if (error.response.status === 404) {
              m.reply('Username TikTok tidak ditemukan');
            }
            else {
              m.reply(`Gagal mengambil data. Status: ${error.response.status}`);
            }
          }
          else if (error.request) {
            // Permintaan terkirim tapi tidak ada respons
            m.reply('Tidak ada respons dari server');
          }
          else {
            // Kesalahan lainnya
            m.reply('Terjadi kesalahan saat mengambil data');
          }
        }
      }
      break;
      case 'githubstalk': {
        if (!text) return m.reply('Masukkan username GitHub');

        try {
          // Validasi input username
          if (!text.trim()) return m.reply('Username tidak boleh kosong');

          // Ambil data dari API
          const response = await axios.get(`https://api.siputzx.my.id/api/stalk/github?user=${text}`);
          const userData = response.data.data;

          // Konversi tanggal
          const createdAt = new Date(userData.created_at).toLocaleString('id-ID', {
            dateStyle: 'full',
            timeStyle: 'long'
          });
          const updatedAt = new Date(userData.updated_at).toLocaleString('id-ID', {
            dateStyle: 'full',
            timeStyle: 'long'
          });

          // Susun pesan dengan informasi yang didapatkan
          let pesan = `*📋 INFORMASI PROFIL GITHUB* 

👤 *IDENTITAS*
• Username: ${userData.username}
• Nama Lengkap: ${userData.nickname}
• ID Pengguna: ${userData.id}
• Node ID: ${userData.nodeId}
• Tipe Akun: ${userData.type}

📝 *INFORMASI PROFIL*
• Bio: ${userData.bio || 'Tidak ada bio'}
• Perusahaan: ${userData.company || 'Tidak disebutkan'}
• Blog/Website: ${userData.blog || 'Tidak ada'}
• Lokasi: ${userData.location || 'Tidak disebutkan'}
• Email: ${userData.email || 'Tidak publik'}

🔢 *STATISTIK*
• Repository Publik: ${userData.public_repo}
• Gist Publik: ${userData.public_gists}
• Pengikut: ${userData.followers}
• Mengikuti: ${userData.following}

🖼️ *AVATAR*
• Foto Profil: ${userData.profile_pic}

🔗 *TAUTAN*
• Profil GitHub: ${userData.url}

📅 *INFORMASI WAKTU*
• Akun Dibuat: ${createdAt}
• Terakhir Diperbarui: ${updatedAt}

⚙️ *STATUS TAMBAHAN*
• Admin: ${userData.admin ? 'Ya' : 'Tidak'}`;

          // Kirim pesan
          m.reply(pesan);

        }
        catch (error) {
          console.error('Error:', error);

          // Tangani berbagai jenis kesalahan
          if (error.response) {
            // Kesalahan respons dari server
            if (error.response.status === 404) {
              m.reply('Username GitHub tidak ditemukan');
            }
            else {
              m.reply(`Gagal mengambil data. Status: ${error.response.status}`);
            }
          }
          else if (error.request) {
            // Permintaan terkirim tapi tidak ada respons
            m.reply('Tidak ada respons dari server');
          }
          else {
            // Kesalahan lainnya
            m.reply('Terjadi kesalahan saat mengambil data');
          }
        }
      }
      break;
      case 'bisakah': {
        if (!m.isGroup) return reply(mess.group)
        const bisakah = body.slice(0)
        const bisa = ['BISA', 'Tidak Bisa', 'Oh tentu saja bisa dong', 'Udah dari lahir dia bisa kaya gitu kak 😂˜„', 'Oh tentu saja tidak bisa', 'Wuih bisa bisa', 'Ga mao jawab ah lu wibu', 'Tentu saja bisa eh tapi boong awokawok ', 'Engga engga dia ga bisa', 'Enggaklah', 'Aku ga mao jawbab 😆™‚', 'Rahasia dong', 'Ulangi Tod gua ga paham', 'Mana gua tau anjir']
        const keh = bisa[Math.floor(Math.random() * bisa.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + bisakah + '*\n\n*Jawaban :* ' + keh
        }, {
          quoted: m
        })
      }
      break
case "listgc": {
  try {
    let groupResult = await fuzzy.groupFetchAllParticipating();
    let gcall = Object.values(groupResult || {});
    
    let listgc = '\n';
    gcall.forEach((u, i) => {
      listgc += `${i+1}. ${u.subject}\nID: ${u.id}\n\n`;
    });
    
    await fuzzy.sendMessage(m.chat, { text: listgc }, { quoted: m });
    
  } catch (error) {
    console.error("Error:", error);
    await fuzzy.sendMessage(m.chat, { text: `Error: ${error.message}` }, { quoted: m });
  }
}
break
case 'leave':
case "leavegc": {
  try {
    const groupId = args[0];
    
    if (!groupId) {
      return fuzzy.sendMessage(m.chat, {
        text: "Silahkan masukkan ID grup yang ingin ditinggalkan.\n\nContoh: .leavegc 1203634192724892480@g.us"
      }, { quoted: m });
    }
      if (!groupId.endsWith("@g.us")) {
      return fuzzy.sendMessage(m.chat, {
        text: "Format ID grup tidak valid. ID grup harus diakhiri dengan @g.us"
      }, { quoted: m });
    }
    console.log(`Mencoba keluar dari grup dengan ID: ${groupId}`);
    await fuzzy.groupLeave(groupId);
    
    fuzzy.sendMessage(m.chat, {
      text: `✅ Berhasil keluar dari grup dengan ID: ${groupId}`
    }, { quoted: m });
    
  } catch (error) {
    console.error("Error dalam leavegc:", error);
    fuzzy.sendMessage(m.chat, {
      text: `❌ Gagal keluar dari grup: ${error.message}`
    }, { quoted: m });
  }
}
break
case "listpc": {
  try {
    const chats = Object.values(fuzzy.chatCache || {});
    
    if (chats.length === 0) {
      return fuzzy.sendMessage(m.chat, {
        text: "Tidak ada chat pribadi yang tersimpan dalam cache."
      }, { quoted: m });
    }
    
    let listpc = '📋 *DAFTAR CHAT PRIBADI*\n\n';
    chats.forEach((chat, i) => {
      listpc += `*${i+1}.* ${chat.name}\n`;
      listpc += `• *ID :* ${chat.id}\n`;
      listpc += `• *Last Seen :* ${new Date(chat.timestamp).toLocaleString()}\n\n`;
    });
    
    fuzzy.sendMessage(m.chat, {
      text: listpc
    }, { quoted: m });
    
  } catch (error) {
    fuzzy.sendMessage(m.chat, {
      text: `❌ Error: ${error.message}`
    }, { quoted: m });
  }
}
break
case 'spam-ngl':
case 'nglspam': {
if (!isCreator) return reply(mess.owner)
    if (!text.split("|")[0] || !text.split("|")[1] || !text.split("|")[2]) {
        return reply("Masukan username, pesan, dan jumlah spam!\nContoh: .nglspam username|haloo|5");
    }
async function sendSpamMessage(username, message, spamCount) {
    let counter = 0;
    while (counter < spamCount) {
        try {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const formattedDate = `${hours}:${minutes}`;
            const deviceId = crypto.randomBytes(21).toString('hex');
            const url = 'https://ngl.link/api/submit';
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
                'Accept': '*/*',
                'Accept-Language': 'en-US,en;q=0.5',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'Referer': `https://ngl.link/${username}`,
                'Origin': 'https://ngl.link'
            };
            const body = `username=${username}&question=${message}&deviceId=${deviceId}&gameSlug=&referrer=`;

            const response = await fetch(url, {
                method: 'POST',
                headers,
                body,
                mode: 'cors',
                credentials: 'include'
            });

            if (response.status !== 200) {
                console.log(`[${formattedDate}] [Err] Ratelimited`);
                await new Promise(resolve => setTimeout(resolve, 25000));
            } else {
                counter++;
                console.log(`[${formattedDate}] [Msg] Sent: ${counter}`);
            }
        } catch (error) {
            console.error(`[${formattedDate}] [Err] ${error}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
};
    const [username, message, count] = text.split("|");
    const spamCount = parseInt(count, 10);

    if (isNaN(spamCount) || spamCount <= 0) {
        return reply("Jumlah spam harus berupa angka positif!");
    }

    try {
        await sendSpamMessage(username, message, spamCount);
        reply(`Sukses mengirim ${spamCount} pesan NGL ke ${username}`);
    } catch (e) {
        console.error(e); // Menambahkan logging error untuk debug
        return reply("Fitur error, coba lagi nanti.");
    }
}
break
      case 'apakah': {
        if (!m.isGroup) return m.reply('Kusus group')
        const apakah = body.slice(0)
        const apa = ['iya dong jelas itu', 'Tidak lah', 'Oh tentu saja tidak', 'Yo ndak tau kok tanya saya', 'Rahasia dong', 'Au ah mending mandi', 'Bentar aku lagi berak', 'Haha mna mungkin 👻']
        const kah = apa[Math.floor(Math.random() * apa.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `wa.me/6281316643491`,
            }
          },
          text: '*Pertanyaan : ' + apakah + '*\n\n*Jawaban :* ' + kah
        }, {
          quoted: m
        })
      }
      break
      case 'kapankah': {
        if (!m.isGroup) return m.reply('Kusus group')
        const kapankah = body.slice(0)
        const kapan = ['Besok', 'Lusa', '1 Hari Lagi', '2 Hari Lagi', '3 Hari Lagi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '7 Bulan Lagi', '8 Bulan Lagi', '9 Bulan Lagi', '10 Bulan Lagi', '11 Bulan Lagi', '1 Tahun lagi', '2 Tahun lagi', '3 Tahun lag0i', '4 Tahun lagi', '5 Tahun lagi', '6 Tahun lagi', '7 Tahun lagi', '8 Tahun lagi', '9 Tahun lagi', '10 Tahun lagi']
        const koh = kapan[Math.floor(Math.random() * kapan.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + kapankah + '*\n\n*Jawaban :* ' + koh
        }, {
          quoted: m
        })
      }
      break
      case 'watakcek':
        const watak = body.slice(0)
        const wa = ['Penyayang', 'Pemurah', 'Pemarah', 'Pemaaf', 'Penurut', 'Baik', 'Baperan', 'Baik Hati', 'penyabar', 'UwU', 'top deh, pokoknya', 'Suka Membantu']
        const tak = wa[Math.floor(Math.random() * wa.length)]
        fuzzy.sendMessage(from, {
          text: 'Pertanyaan : *' + watak + '*\n\nJawaban : ' + tak
        }, {
          quoted: m
        })
        break
      case 'hobycek':
        const hobby = body.slice(0)
        const hob = ['Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
        const by = hob[Math.floor(Math.random() * hob.length)]
        fuzzy.sendMessage(from, {
          text: 'Pertanyaan : *' + hobby + '*\n\nJawaban : ' + by
        }, {
          quoted: m
        })
        break
      case 'cebelapaimutci': {
        if (!m.isGroup) return m.reply('Kusus group')
        const edgar = body.slice(0)
        const nanya = ['*79%*\n\nImut Banget Loh Kawai><', '*15%*\n\nKamu imut kata mamakmu:v🗿', '*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿', '*28%*\n\nIya deh Cipaling Imut;)', '*100%*\n\nPap imutnya dulu dong:v😘']
        const pret = nanya[Math.floor(Math.random() * nanya.length)]
        fuzzy.sendMessage(from, {
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: `primbon`,
              body: `${ucapanWaktu}`,
              previewType: "PHOTO",
              thumbnailUrl: global.imgUrl,
              sourceUrl: `${global.linkig}`,
            }
          },
          text: '*Pertanyaan : ' + edgar + '*\n\n*Jawaban :* ' + pret
        }, {
          quoted: m
        })
      }
      break
      case 'tebak': {
        if (!m.isGroup) return reply('cmd only group')

        function isGameActive() {
          return tebakgambar[from] || tebakkata[from] || tebakkalimat[from] || tebaklirik[from] ||
            tebaktebakan[from] || tebakbendera[from] || tebakbendera2[from] || tebakkabupaten[from] ||
            tebakkimia[from] || tebakasahotak[from] || tebaksiapakahaku[from] || tebaksusunkata[from] ||
            tebaktekateki[from] || tebakjkt48[from] || tebakff[from] || tebakml[from];
        }
        if (isGameActive()) {
          return reply("Masih Ada Sesi Permainan Yang Belum Diselesaikan!");
        }

        if (args[0] === 'gambar') {

          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakgambar[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakgambar.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakgambar[from]}`, m)
            delete tebakgambar[from]
          }
        }
        else if (args[0] === 'kata') {

          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkata[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakkata.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkata[from]}`, m)
            delete tebakkata[from]
          }
        }
        else if (args[0] === 'kalimat') {
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkalimat[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakkalimat.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkalimat[from]}`, m)
            delete tebakkalimat[from]
          }
        }
        else if (args[0] === 'lirik') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaklirik[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaklirik.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaklirik[from]}`, m)
            delete tebaklirik[from]
          }
        }
        else if (args[0] === 'tebakan') {
         let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaktebakan[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaktebakan.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktebakan[from]}`, m)
            delete tebaktebakan[from]
          }
        }
        else if (args[0] === 'bendera') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.name)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakbendera[from] = result.name.toLowerCase()
          })
          await sleep(60000)
          if (tebakbendera.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera[from]}`, m)
            delete tebakbendera[from]
          }
        }
        else if (args[0] === 'bendera2') {
       let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.name)
          fuzzy.sendMessage(m.chat, {
            image: {
              url: result.img
            },
            caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`
          }, {
            quoted: m
          }).then(() => {
            tebakbendera2[from] = result.name.toLowerCase()
          })
          await sleep(60000)
          if (tebakbendera2.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakbendera2[from]}`, m)
            delete tebakbendera2[from]
          }
        }
        else if (args[0] === 'kabupaten') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.title)
          fuzzy.sendImage(m.chat, result.url, `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkabupaten[from] = result.title.toLowerCase()
          })
          await sleep(60000)
          if (tebakkabupaten.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkabupaten[from]}`, m)
            delete tebakkabupaten[from]
          }
        }
        else if (args[0] === 'kimia') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.lambang)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakkimia[from] = result.lambang.toLowerCase()
          })
          await sleep(60000)
          if (tebakkimia.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakkimia[from]}`, m)
            delete tebakkimia[from]
          }
        }
        else if (args[0] === 'asahotak') {
        
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebakasahotak[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebakasahotak.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebakasahotak[from]}`, m)
            delete tebakasahotak[from]
          }
        }
        else if (args[0] === 'siapakahaku') {
          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaksiapakahaku[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaksiapakahaku.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksiapakahaku[from]}`, m)
            delete tebaksiapakahaku[from]
          }
        }
        else if (args[0] === 'susunkata') {

          
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaksusunkata[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaksusunkata.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaksusunkata[from]}`, m)
            delete tebaksusunkata[from]
          }
        }
        else if (args[0] === 'tekateki') {
          let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
          let result = anu[Math.floor(Math.random() * anu.length)]
          console.log("Jawaban: " + result.jawaban)
          fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
            tebaktekateki[from] = result.jawaban.toLowerCase()
          })
          await sleep(60000)
          if (tebaktekateki.hasOwnProperty(from)) {
            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[from]}`, m)
            delete tebaktekateki[from]
          }
        }
        else if (args[0] === 'jkt48') {
          
          let response = await fetchJson('https://api.siputzx.my.id/api/games/tebakjkt');
          if (response.status) {
            let result = response.data;
            console.log("Jawaban: " + result.jawaban);

            fuzzy.sendImage(from, result.gambar, `siapakah ini? sebutkan beserta nama panjang dia\nWaktu : 70s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
              tebakjkt48[from] = result.jawaban.toLowerCase();
            });

            await sleep(70000); // 70 detik
            if (tebakjkt48.hasOwnProperty(from)) {
              fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${result.jawaban}`, m);
              delete tebakjkt48[from];
            }
          }
          else {
            reply("Gagal mengambil data dari API.");
          }
        } else if (args[0] === 'ff') {
          
          let response = await fetchJson('https://api.siputzx.my.id/api/games/karakter-freefire');
          if (response.status) {
            let result = response.data;
            console.log("Jawaban: " + result.name);

            fuzzy.sendImage(from, result.gambar, `siapakah ini?\nWaktu : 70s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab`, m).then(() => {
              tebakff[from] = result.name.toLowerCase();
            });

            await sleep(70000); // 70 detik
            if (tebakff.hasOwnProperty(from)) {
              fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${result.name}`, m);
              delete tebakff[from];
            }
          }
          } else if (args[0] === 'ml') {


  try {
    let response = await fetchJson('https://api.siputzx.my.id/api/games/tebakheroml');
    if (response.status) {
      let result = response.data;
      console.log("Jawaban: " + result.name);

const res = await fetch(result.audio);
const buffer = await res.buffer();

// Konversi buffer ke WhatsApp-compatible PTT (Opus)
const pttAudio = await toPTT(buffer, 'ogg');

// Kirim ke WhatsApp
fuzzy.sendMessage(from, {
  audio: pttAudio,
  mimetype: 'audio/ogg; codecs=opus',
  ptt: true
}, { quoted: m }).then(() => {
  // Lakukan aksi setelah audio berhasil terkirim
  console.log('Audio berhasil dikirim');
  tebakml[from] = result.name.toLowerCase();
});

      await sleep(70000);
      if (tebakml.hasOwnProperty(from)) {
        fuzzy.sendText(m.chat, `Waktu habis!\nJawaban yang benar: *${result.name}*`, m);
        delete tebakml[from];
      }
    }
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
} else reply(`- GAME TEBAK -\n\n.tebak kata\n.tebak tebakan\n.tebak bendera\n.tebak kalimat\n.tebak lirik\n.tebak tekateki\n.tebak siapakahaku\n.tebak asahotak\n.tebak susunkata\n.tebak kimia\n.tebak gambar\n.tebak bendera2\n.tebak jkt48\n.tebak ff\n.tebak ml`)
      }
      
      break
case 'savekontak': case 'svkontak':{
if (!isCreator) return reply(`Khusus Owner Ajah`)
if (!m.isGroup) return reply(`Fitur Ini Khusus Group`)
let cmiggc = await fuzzy.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
fuzzy.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)
}
break
case 'pushkontak': {
    if (!isCreator && !isAdmin) return reply("owner dan admin bot doang")
    if (!m.isGroup) return reply(`The feature works only in grup`)
    if (!text) return reply(`text?`)

    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    reply(`Success in pushing the message to contacts`)

    for (let pler of mem) {
        await sleep(60000) // Delay 1 menit
        await fuzzy.sendMessage(pler, { text: text })
    }

    reply(`sukses pushkontak delay 1 menit`)
}
break

default:
  function resetSession(user) {
    if (global.db.data.users[user]?.aiSession) {
      delete global.db.data.users[user].aiSession;
      return true;
    }
    return false;
  }

if (body.startsWith(prefix + "resetsesi")) {
  const success = resetSession(m.sender);
  if (success) {
    return m.reply("Sesi AI berhasil direset!");
  } else {
    return m.reply("Tidak ada sesi AI yang ditemukan.");
  }
}

if (!m.isBaileys && !isBot && !isCmd && body != "") {

  const chatData = global.db.data.chats[m?.chat];
  if (!chatData || !chatData.autoai) return; // AI hanya aktif jika autoai = true

  const isMentioned = m.isGroup ? body.includes(`@${pureNumber}`) : true;
  const isRepliedToBot = m.isGroup ? m.quoted && m.quoted.sender === `${pureNumber}@s.whatsapp.net` : false;
  if (m.isGroup && !isMentioned && !isRepliedToBot) return; // Untuk grup, hanya merespon mention/reply

  function readSession(user) {
    try {
      return global.db.data.users[user]?.aiSession || "";
    } catch (error) {
      return "";
    }
  }

  function writeSession(user, session) {
    if (!global.db.data.users[user]) global.db.data.users[user] = {};
    global.db.data.users[user].aiSession = session;
  }
  
  
  if (body.startsWith(prefix)) return;

  let userSession = readSession(m.chat);

  try {
    const prompt = `
${global.prompt}

## anggap kamu sedang di sesi percakapan dan kamu memiliki sesi percakapan
## Berikut adalah sesi percakapan sebelumnya (jika ada):
${userSession || "(Tidak ada sesi sebelumnya)"}

`;

    // Gunakan axios.get dengan query langsung di URL
    let { data } = await axios.get(
    `https://api.siputzx.my.id/api/ai/deepseek-r1?content=${body}`
    );

    if (data.status) {
      // Update session
      writeSession(m.chat, `${userSession}\nUser: ${body}\nAI: ${data.data}`);
      return m.reply(data.data);
    } else {
      return m.reply("Gagal mendapatkan respons dari API.");
    }
  } catch (e) {
    console.log(e);
    return m.reply("Sesi sudah mencapai batas!\nketik .resetsesi dan coba lagi.");
  }
}



if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}


if ((m?.mtype === 'groupInviteMessage' || text.startsWith('Undangan untuk bergabung') || text.startsWith('Invitation to join') || text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
await fuzzy.sendMessage(m.chat, {react: {text: `❌`,key: m.key,}})
let teks = 'acces denied harus minta izin dulu ke owner'
m.reply(teks)
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
