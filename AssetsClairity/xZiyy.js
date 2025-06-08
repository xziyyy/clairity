/*
STATUS BETA TO V1.3.0
RULES:
- DILARANG MEMPERJUAL BELIKAN SCRIPT!!
- SCRIPT INI GRATIS 100% JANGAN DI JUAL!!!
- DILARANG REUPLOAD ATAU MENYEBARKANNYA KE CH DLL!!

KAYANYA YANG DISINI GADA YG PERLU DI UBAH UBAH TERUNTUK USER SCRIPT
JIKA KAMU SUDAH PAHAM TENTANG BOT TIDAK MASALAH SIH
ERROR TANGGUNG SENDIRI

 SCRIPT INI DIKELOLA 100% OLEH XZIYY

 JOIN SALURAN TREPLEX CODERVERSE:
 https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v
  
 BELAJAR TENTANG SCRIPT INI?:
 https://chat.whatsapp.com/I3FFi9rm3zwDxnhMJDAnPd
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
require('./media/owner.js');
require("./media/setting.js")
const fs = require("fs")

const {
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    proto
} = require('@whiskeysockets/baileys');


const {
    runtime,
    getGroupAdmins,
    getRandom,
    getBuffer
} = require("./library/library");
const yts = require('yt-search');

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

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const {
	exec,
	spawn,
	execSync
} = require("child_process")

const axios = require('axios');

module.exports = async (fuzzy, m) => {
    const { type } = m
    try {
        const body = (
            (m.mtype === 'conversation' && m.message.conversation) ||
            (m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
            (m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
            (m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
            (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
            (m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
            (m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)

        ) ? (
            (m.mtype === 'conversation' && m.message.conversation) ||
            (m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
            (m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
            (m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
            (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
            (m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
            (m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
        ) : '';


        const budy = (typeof m.text === 'string') ? m.text : '';
        const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
        const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
        const isCmd = body.startsWith(prefix);
        const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const sender = m.key.fromMe ? (fuzzy.user.id.split(':')[0] + '@s.whatsapp.net' || fuzzy.user.id) : (m.key.participant || m.key.remoteJid)
        const botNumber = await fuzzy.decodeJid(fuzzy.user.id)
        const senderNumber = sender.split('@')[0]
        const pushname = m.pushName || `${senderNumber}`
        const isBot = botNumber.includes(senderNumber)
        const fatkuns = m && (m?.quoted || m);
        const crypto = require('crypto')


        const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
            (fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
                (fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
                    m?.quoted || m;
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.m || quoted)
        const isCreator = (m && m.sender && [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
        

        var cheerio = require('cheerio');
        const { sticker } = require('./library/sticker.js')
        const { smsg, color, getBuffer } = require("./library/library")
        const from = m.key.remoteJid
        const isMedia = /image|video|sticker|audio/.test(mime);
        const content = JSON.stringify(m.message)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const path = require("path")
        const { tmpdir } = require("os")
        const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./library/library')


        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
        const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
        const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')


        const groupMetadata = m.isGroup ? await fuzzy.groupMetadata(m.chat).catch(e => { }) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

        if (isCmd) console.log("~> [CMD]", command, "from", pushname, "in", m.isGroup ? "Group Chat" : "Private Chat", '[' + args.length + ']');

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



    try {
      let isNumber = x => typeof x === 'number' && !isNaN(x)
      let user = global.db.data.users[m?.sender]
      if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
      if (user) {
        if (!isNumber(user.afkTime)) user.afkTime = -1
        if (!('afkReason' in user)) user.afkReason = ''
      }
      else global.db.data.users[m?.sender] = {
        afkTime: -1,
        afkReason: '',
        
      }
      // chats
      let chats = global.db.data.chats[m?.chat]
      if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
      if (chats) {
        if (!('welcome' in chats)) chats.welcome = false
        if (!("onlyadmin" in chats)) chats.onlyadmin = false
      }
      else global.db.data.chats[m.chat] = {
        welcome: false,
        onlyadmin: false,
      }
      
      let setting = global.db.data.settings[botNumber]
      if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
      if (setting) {
      }
      else global.db.data.settings[botNumber] = {
      }
      
      
    }
    catch (err) {}


        //memberikan function
        fetchJson = async (url, options) => {
            try {
                options ? options : {};
                const res = await axios({
                    method: "GET",
                    url: url,
                    headers: {
                        "User-Agent":
                            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
                    },
                    ...options,
                });
                return res.data;
            } catch (err) {
                return err;
            }
        };

        //fungsi jarak
        async function jarak(dari, ke) {
            var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
            var $ = cheerio.load(html), obj = {}
            var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
            obj.img = /^data:.?\/.?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : ''
            obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
            return obj
          }
        //sampesini
        async function getRandom (ext) {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
          }
        //function pinterest

        async function generateCarouselMessage(imageUrls, from, headerText = "Pilih gambar yang kamu suka:") {
            const cardsPromises = imageUrls.map(async (imageUrl, index) => {
                const preparedMedia = await prepareWAMessageMedia({
                    image: {
                        url: imageUrl
                    }
                }, {
                    upload: fuzzy.waUploadToServer
                });
                return {
                    header: {
                        hasMediaAttachment: true,
                        ...preparedMedia
                    },
                    body: {
                        text: `Gambar ${index + 1}`
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            name: "cta_url",
                            buttonParamsJson: JSON.stringify({
                                display_text: "Source",
                                url: imageUrl,
                                merchant_url: imageUrl
                            })
                        }]
                    }
                };
            });

            const cards = await Promise.all(cardsPromises);
            const carouselMessage = {
                cards: cards,
                messageVersion: 1
            };

            const msg = generateWAMessageFromContent(
                from, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: headerText
                            },
                            carouselMessage: carouselMessage
                        }
                    }
                }
            }, {}
            );

            await fuzzy.relayMessage(from, msg.message, {
                messageId: msg.key.id
            });
        }

        const reply = async (teks) => {
          m.reply(teks)
          };


                  //GAME
        if (tebakgambar.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakgambar[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakgambar[from]
            } else if (budy.toLowerCase() == jawaban) {
            
                    reply(`🎮 Tebak Gambar 🎮\n\nCongratulation  you won 1 limit 🎉`)

                delete tebakgambar[from]
            } else m.reply('Jawaban Salah!')
        }
        if (kuismath.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = kuismath[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete kuismath[from]
            } else if (budy.toLowerCase() == jawaban) {

                await reply(`🎮 Kuis Matematika  🎮\n\nCongratulation  you won 1 limit 🎉\n\nwanna play again? type ${prefix}tebak math`)
             
                
                delete kuismath[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakasahotak.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakasahotak[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakasahotak[from]
            } else if (budy.toLowerCase() == jawaban) {

                reply(`🎮 Asah Otak 🎮\n\nCongratulation  you won 1 limit 🎉`)
          
                
                delete tebakasahotak[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaksiapakahaku.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaksiapakahaku[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaksiapakahaku[from]
            } else if (budy.toLowerCase() == jawaban) {

                reply(`🎮 Siapakah Aku 🎮\n\nCongratulation  you won 1 limit 🎉`)
             
                
                delete tebaksiapakahaku[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaksusunkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaksusunkata[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaksusunkata[from]
            } else if (budy.toLowerCase() == jawaban) {

                reply(`🎮 Susun Kata 🎮\n\nCongratulation  you won 1 limit 🎉`)

                
                delete tebaksusunkata[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakbendera.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakbendera[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakbendera[from]
            } else if (budy.toLowerCase() == jawaban) {

               reply(`🎮 Tebak Gambar 🎮\n\nCongratulation  you won 1 limit 🎉`)
                
                delete tebakbendera[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakbendera2.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakbendera2[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakbendera2[from]
            } else if (budy.toLowerCase() == jawaban) {

               reply(`m.chat, 🎮 Tebak Bendera 🎮\n\nCongratulation  you won 1 limit 🎉`)
                
                delete tebakbendera2[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakkabupaten.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakkabupaten[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakkabupaten[from]
            } else if (budy.toLowerCase() == jawaban) {

               reply(`🎮 Tebak Kabupaten 🎮\n\nCongratulation  you won 1 limit 🎉`)
              
                
                delete tebakkabupaten[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakkimia.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakkimia[from]
            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakkimia[from]
            } else if (budy.toLowerCase() == jawaban) {

               reply(`🎮 Tebak Kimia 🎮\n\nCongratulation  you won 1 limit 🎉`)
               
                
                delete tebakkimia[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaktekateki.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaktekateki[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaktekateki[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Teka Teki 🎮\n\nCongratulation  you won 1 limit 🎉`)
             
                
                delete tebaktekateki[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaklagu.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaklagu[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaklagu[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Tebak Lagu 🎮\n\nCongratulation  you won 1 limit 🎉`)
               
                
                delete tebaklagu[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakkata.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakkata[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakkata[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Tebak Kata 🎮\n\nCongratulation  you won 1 limit 🎉`)
                
                delete tebakkata[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebakkalimat.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebakkalimat[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebakkalimat[from]
            } else if (budy.toLowerCase() == jawaban) {
                reply(`🎮 Tebak Kalimat 🎮\n\nCongratulation  you won 1 limit 🎉`)

                
                delete tebakkalimat[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaklirik.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaklirik[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaklirik[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Tebak Lirik 🎮\n\nCongratulation  you won 1 limit 🎉`)
    
                
                delete tebaklirik[from]
            } else m.reply('Jawaban Salah!')
        }
        if (tebaktebakan.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
            kuis = true
            jawaban = tebaktebakan[from]

            if (budy.toLowerCase() == "nyerah") {
                await reply('Anda Telah menyerah')
                delete tebaktebakan[from]
            } else if (budy.toLowerCase() == jawaban) {
               reply(`🎮 Tebak Tebakan 🎮\n\nCongratulation  you won 1 limit 🎉`)
          
                
                delete tebaktebakan[from]
            } else m.reply('Jawaban Salah!')
        }
if (tebakjkt48.hasOwnProperty(from) && !isCmd && !m.key.fromMe && m.quoted) {
    kuis = true;
    jawaban = tebakjkt48[from];

    if (budy.toLowerCase() == "nyerah") {
        await reply('Anda Telah menyerah');
        delete tebakjkt48[from];
    } else if (budy.toLowerCase() == jawaban) {
        reply(`🎮 Tebak Tebakan 🎮\n\nCongratulation  you won 1 limit 🎉`);

        delete tebakjkt48[from];
    } else {
        m.reply('Jawaban Salah!');
    }
}


    const antibott = JSON.parse(fs.readFileSync("./AssetsClairity/media/database/antibot.json"))
    const antibot = m.isGroup ? antibott.includes(from) : false
    const antitaggclist = JSON.parse(fs.readFileSync("./AssetsClairity/media/database/antitaggc.json"));
    const antiGroupTag = m.isGroup ? antitaggclist.includes(from) : false;
    const antilinkgcList = JSON.parse(fs.readFileSync("./AssetsClairity/media/database/antilinkgc.json"));
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
          quoted: m
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
          quoted: m
        })

      }
    }

if (antibot) {

  const isShortIdBot = /^[A-Z]{2,5}[A-Z0-9]{5,20}$/.test(m.id) && m.id.length < 25;

  if (isShortIdBot && !isCreator && !m.key.fromMe && !isAdmins) {
    reply("*Bot Lain Terdeteksi*\n\nMaaf Kak Harus Saya Keluarkan, Karna Admin Mengaktifkan Anti Bot :)");

      await fuzzy.groupParticipantsUpdate(m.chat, [m.sender], "remove");

  }
}

    if (global.public == false) {
      if (!isCreator) return
    }
    
if (global.onlygc && isCmd && !m.isGroup) {
  return reply(`Hello Buddy!

This bot can only be used in *group chat* 🛡️
Please join our group to use the bot:
${global.linkgroup}`)
}

        //batas untuk case
        switch (command) {
            case 'tes':
                m.reply(global.mess.tes)
                break;

            case 'runtime': {
                m.reply(`Aktif Selama *${runtime(process.uptime())}*`)
            }
                break
case 'public':{
          if (!isCreator) return reply(global.mess.owner)
          if (global.public == true) return reply("Sudah Active")
          global.public = true
          reply("Mode Public Telah Active")
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
case 'self':{
          if (!isCreator) return reply(global.mess.owner)
          if (global.public == false) return reply("Sudah Off")
          global.public = false
          reply("Mode Self Telah Active")
        }
        break
case 'onlygc': {
  if (!isCreator) return reply(global.mess.owner)

  global.onlygc = !global.onlygc

  reply(`Mode *Only Group* sekarang telah *${global.onlygc ? 'AKTIF' : 'NONAKTIF'}*`)
}
break
case 'leavegcbyid':
case 'leavebyid':
case "leaveid": {
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
          
  try {
    const groupId = args[0];
  if (!isCreator) return
  
          
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
        case 'leavegc':
case "leave": {
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
  
  try {
    
    await fuzzy.groupLeave(from);
    
    fuzzy.sendMessage(m.chat, {
      text: `✅ Berhasil keluar`
    }, { quoted: m });
    
  } catch (error) {
    console.error("Error dalam leavegc:", error);
    fuzzy.sendMessage(m.chat, {
      text: `❌ Gagal keluar dari grup: ${error.message}`
    }, { quoted: m });
  }
}
break
case 'owner':{
// jangan di hapus no gw
Reply(`this is my owner:

wa.me//${global.ownernumber[0]}

If you want to ask about this script, please contact:
wa.me//6283159451487`)
}
break
            case 'ping':{
const speed = require('performance-now');
const timestampe = speed(); 
const latensie = speed() - timestampe;
            m.reply(`
▪️ **Latency**: ${latensie.toFixed(4)}ms
▪️ **Uptime**: ${runtime(process.uptime())}
`)
            }
            break
case "clairity": case 'menu':{
const speed = require('performance-now');
const timestampe = speed(); 
const latensie = speed() - timestampe;
                  
  menu =`
*⟨ INFO BOT ⟩*
▪️ *System*: ${global.botname}
▪️ *Build*: C1.3.0
▪️ *Latency*: ${latensie.toFixed(4)}ms
▪️ *Uptime*: ${runtime(process.uptime())}

List Menu
▫️ *groupmenu* - Group features
▫️ *toolsmenu* - Utility tools
▫️ *aimenu* - Artificial feature
▫️ *gamemenu* - Entertainment
▫️ *downmenu* - Download tools
▫️ *ownermenu* - Owner panel
  `
send(menu)
  }
  break
  
  
case 'allmenu':{
const speed = require('performance-now');
const timestampe = speed(); 
const latensie = speed() - timestampe;
                  
  menu =`
*⟨ INFO BOT ⟩*
▪️ *System*: ${global.botname}
▪️ *Build*: C1.3.0
▪️ *Latency*: ${latensie.toFixed(4)}ms
▪️ *Uptime*: ${runtime(process.uptime())}

List Group
▫️ ${prefix}leavegc
▫️ ${prefix}leavegcbyid
▫️ ${prefix}open
▫️ ${prefix}close
▫️ ${prefix}opentime
▫️ ${prefix}closetime
▫️ ${prefix}hidetag
▫️ ${prefix}ht
▫️ ${prefix}everyone
▫️ ${prefix}welcome
▫️ ${prefix}setwelcome
▫️ ${prefix}setleave
▫️ ${prefix}antilinkgc
▫️ ${prefix}antitaggc
▫️ ${prefix}antibot

List Download
▫️ ${prefix}ai

List Download
▫️ ${prefix}spotify
▫️ ${prefix}igdl
▫️ ${prefix}tt
▫️ ${prefix}play
▫️ ${prefix}ytmp3
▫️ ${prefix}ytmp4

List Maker
▫️ ${prefix}animbrat
▫️ ${prefix}ktp-maker
▫️ ${prefix}brat
▫️ ${prefix}bratvid
▫️ ${prefix}sticker

List Game
▫️ ${prefix}tebak lagu 
▫️ ${prefix}kuis math 
▫️ ${prefix}tebak gambar
▫️ ${prefix}tebak kata
▫️ ${prefix}tebak kalimat 
▫️ ${prefix}tebak lirik 
▫️ ${prefix}tebak tebakan 
▫️ ${prefix}tebak bendera 
▫️ ${prefix}tebak bendera2 
▫️ ${prefix}tebak kabupaten 
▫️ ${prefix}tebak kimia 
▫️ ${prefix}tebak asahotak 
▫️ ${prefix}tebak siapakahaku 
▫️ ${prefix}tebak susunkata 
▫️ ${prefix}tebak tekateki 
▫️ ${prefix}tebak jkt48

List Owner
▫️ ${prefix}leavegc
▫️ ${prefix}setexif
▫️ ${prefix}self
▫️ ${prefix}public
▫️ ${prefix}join

List Tools
▫️ ${prefix}translate
▫️ ${prefix}reactch
▫️ ${prefix}cekidch
▫️ ${prefix}cekidgc
▫️ ${prefix}hitamkan
▫️ ${prefix}toimg
▫️ ${prefix}reactch
▫️ ${prefix}hd
▫️ ${prefix}tourl
▫️ ${prefix}spam-pairing
▫️ ${prefix}jarak
  `
send(menu)
  }
  break

case 'groupmenu':{
template =`
｢ GROUP MENU ｣ 
▫️ ${prefix}leavegc
▫️ ${prefix}leavegcbyid
▫️ ${prefix}open
▫️ ${prefix}close
▫️ ${prefix}opentime
▫️ ${prefix}closetime
▫️ ${prefix}hidetag
▫️ ${prefix}ht
▫️ ${prefix}everyone
▫️ ${prefix}welcome
▫️ ${prefix}setwelcome
▫️ ${prefix}setleave
▫️ ${prefix}antilinkgc
▫️ ${prefix}antitaggc
▫️ ${prefix}antibot

`
Reply(template)
}
break

case 'aimenu':{
template =`
｢ GROUP ARTIFICIAL ｣ 
▫️ ${prefix}ai

`
Reply(template)
}
break

case 'ownermenu':{
template =`
｢ GROUP MENU ｣ 
▫️ ${prefix}leavegc
▫️ ${prefix}setexif
▫️ ${prefix}self
▫️ ${prefix}public
▫️ ${prefix}join

`
Reply(template)
}
break

case 'ownermenu':{
template =`
｢ GROUP MENU ｣ 
▫️ ${prefix}leavegc
▫️ ${prefix}setexif
▫️ ${prefix}self
▫️ ${prefix}public
▫️ ${prefix}join

`
Reply(template)
}
break

case 'toolsmenu':{
template =`
｢ TOOLS MENU ｣ 
▫️ ${prefix}translate
▫️ ${prefix}reactch
▫️ ${prefix}cekidch
▫️ ${prefix}cekidgc
▫️ ${prefix}hitamkan
▫️ ${prefix}toimg
▫️ ${prefix}reactch
▫️ ${prefix}hd
▫️ ${prefix}tourl
▫️ ${prefix}spam-pairing
▫️ ${prefix}jarak
`
Reply(template)
}
break

case 'downmenu':
case 'downloadmenu':{
template =`
｢ GROUP MENU ｣ 
▫️ ${prefix}spotify
▫️ ${prefix}igdl
▫️ ${prefix}tt
▫️ ${prefix}play
▫️ ${prefix}ytmp3
▫️ ${prefix}ytmp4

`
m.reply(template)
}
break

case 'makermenu':{
template =`
｢ GROUP MENU ｣ 
▫️ ${prefix}animbrat
▫️ ${prefix}ktp-maker
▫️ ${prefix}brat
▫️ ${prefix}bratvid
▫️ ${prefix}sticker

`
Reply(template)
}
break

case 'gamemenu':{
template =`
｢ GAME MENU ｣ 
▫️ ${prefix}tebak lagu 
▫️ ${prefix}kuis math 
▫️ ${prefix}tebak gambar
▫️ ${prefix}tebak kata
▫️ ${prefix}tebak kalimat 
▫️ ${prefix}tebak lirik 
▫️ ${prefix}tebak tebakan 
▫️ ${prefix}tebak bendera 
▫️ ${prefix}tebak bendera2 
▫️ ${prefix}tebak kabupaten 
▫️ ${prefix}tebak kimia 
▫️ ${prefix}tebak asahotak 
▫️ ${prefix}tebak siapakahaku 
▫️ ${prefix}tebak susunkata 
▫️ ${prefix}tebak tekateki 
▫️ ${prefix}tebak jkt48

`
Reply(template)
}
break
case 'spotify': {
  const spotifyUrl = text;

  reply('Tunggu sebentar...');

  try {
    const encodedUrl = encodeURIComponent(spotifyUrl);
    const api = `https://ytdlpyton.nvlgroup.my.id/spotify/download/audio?url=${encodedUrl}&mode=url`;
    const { data } = await axios.get(api);

    if (!data || !data.download_url) {
      reply("Gagal mendapatkan data dari API.");
      return;
    }

    const { title, artist, thumbnail, download_url } = data;

    let doc = {
      audio: {
        url: download_url
      },
      mimetype: 'audio/mpeg',
      waveform: [100, 0, 100, 0, 100, 0, 100],
      fileName: `${title}.mp3`,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: `Downloading: ${title}`,
          body: `Artist: ${artist}`,
          thumbnailUrl: thumbnail,
          sourceUrl: spotifyUrl,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    };

    await fuzzy.sendMessage(from, doc, { quoted: m });

  } catch (error) {
    console.error("Error:", error);
    reply("Terjadi kesalahan saat mengakses API Spotify.");
  }
}
break;
case 'translate': {
  if (!q.includes(',')) return reply('Format salah!\nContoh: .translate en,haii');

  const axios = require('axios');
  const encode = encodeURIComponent;

  const [targetLang, ...textParts] = q.split(',');
  const text = textParts.join(',').trim();

  if (!targetLang || !text) return reply('Bahasa target dan teks harus diisi!\nContoh: .translate en,haii');

  try {
    const { data } = await axios.get(`https://api.siputzx.my.id/api/tools/translate?text=${encode(text)}&source=auto&target=${encode(targetLang)}`);

    if (!data.success) return reply('Gagal menerjemahkan teks.');

    reply(`Dari: auto\nKe: ${targetLang}\n\nHasil:\n${data.translatedText}`);
  } catch (e) {
    reply('Terjadi kesalahan saat mengakses API translate.');
  }
}
break;
      case 'igdl':
      case 'instagram':
      case 'instadl': {
      
      reply(global.mess.wait)
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
                caption: `Download Video`,
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

          }
        }
        catch (error) {
          console.error('Error in Instagram download process:', error);
          return m.reply('Terjadi kesalahan saat mencoba mendownload. Pastikan link valid link Reel dan image.');
        }
      }
      break;
case 'rch':
case 'reactch': {
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
case 'animbrat':{
        if (text.startsWith('. animbrat') || text.startsWith('. Animbrat')) {
            return reply('Jangan ada spasi antara titik dan brat!!');
        }

        const fngsi = `https://fastrestapis.fasturl.cloud/maker/animbrat?text=${encodeURIComponent(q.trim())}&position=center&mode=image`;

       reply(global.mess.wait)
        
        try {
            // Coba akses API Clairity
            const response = await axios.get(fngsi, { responseType: 'arraybuffer' });
            await fuzzy.sendImageAsSticker(m.chat, response.data, m, {
                packname: global.packname,
                author: global.author
            });
            } catch (err) {
            reply('coba lain waktu')
            }
            }
            break
case "cekidch": case "idch": {
if (!text) return m.reply("linknya mana?")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await fuzzy.newsletterMetadata("invite", result)
reply(res.id)
let teks = `
*Nama :* ${res.name}
*Total Pengikut :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
case 'cekidgc': {
  if (!text) return m.reply('Masukkan link grup WhatsApp-nya ya!\nContoh: .cekidgc https://chat.whatsapp.com/xxxxx');

  let regex = /chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i;
  let match = text.match(regex);

  if (!match) return m.reply('Link grup WhatsApp tidak valid.');

  try {
    let code = match[1];
    let groupInfo = await fuzzy.groupGetInviteInfo(code);
    let groupId = groupInfo.id;

    m.reply(`✅ *Berhasil!*\nNama Grup: ${groupInfo.subject}\nID Grup: ${groupId}`);
  } catch (e) {
    console.log(e);
    m.reply('Gagal mengambil ID grup. Mungkin link sudah tidak aktif atau bot tidak diizinkan.');
  }
}
break;
case 'ai': {
  if (!q) return m.reply('Masukkan pertanyaan ya~ ✨');

  let res = await fetch(`https://api.siputzx.my.id/api/ai/gpt3?prompt=${global.prompt}&content=${encodeURIComponent(q)}`);
  let json = await res.json();

  if (!json.status) return m.reply('Maaf, ada kesalahan saat memproses permintaan 😥');
  m.reply(json.data);
}
break;
case 'rch':
case 'reactch': {
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
    case 'remini':
    case 'hd': {
        try {
        reply(global.mess.wait)
    const filename = makeid(5)
          let media = await fuzzy.downloadAndSaveMediaMessage(quoted, filename)
          let url = await exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
            console.log(stdout)
fuzzy.sendMessage(from, {
  image: { url: `https://laurine.site/api/generator/remini?url=${stdout}` },
  caption: '*Upscale Selesai!*\n\nBerikut hasil gambar yang telah ditingkatkan kualitasnya.'
}, { quoted: m });
            fs.unlink(media, (err) => {
        if (err) console.error('Gagal menghapus file:', err);
        else console.log(`File ${media} berhasil dihapus.`);
        });
      
        })
        }
        catch (error) {
          console.log(error)
          return reply("coba lagi lain waktu")
        }
      }
      break
			case 'ktp-maker':{
			if (!q || q.split('|').length < 18) {
    return reply(`Masukan semua data yang diperlukan.\n\nContoh:\n${prefix + command} JAWA BARAT|BANDUNG|3275024509970001|BUDI SANTOSO|BANDUNG, 25-09-1997|LAKI-LAKI|A|JL. SUDIRMAN NO. 123|05/08|RAWA BOBO|PASAR MINGGU|ISLAM|BELUM MENIKAH|PEGAWAI SWASTA|WNI|SEUMUR HIDUP|25-09-2023|https://example.com/photo.jpg`);
}

        const [
            provinsi, kota, nik, nama, ttl, jenisKelamin, golonganDarah, alamat,
            rtRw, kelDesa, kecamatan, agama, status, pekerjaan, kewarganegaraan, masaBerlaku, tanggalTerbit, pasPhoto
        ] = q.split('|').map(v => v.trim());

       const url = `https://fastrestapis.fasturl.cloud/maker/ktp?provinsi=${encodeURIComponent(provinsi)}&kota=${encodeURIComponent(kota)}&nik=${encodeURIComponent(nik)}&nama=${encodeURIComponent(nama)}&ttl=${encodeURIComponent(ttl)}&jenisKelamin=${encodeURIComponent(jenisKelamin)}&golonganDarah=${encodeURIComponent(golonganDarah)}&alamat=${encodeURIComponent(alamat)}&rtRw=${encodeURIComponent(rtRw)}&kelDesa=${encodeURIComponent(kelDesa)}&kecamatan=${encodeURIComponent(kecamatan)}&agama=${encodeURIComponent(agama)}&status=${encodeURIComponent(status)}&pekerjaan=${encodeURIComponent(pekerjaan)}&kewarganegaraan=${encodeURIComponent(kewarganegaraan)}&masaBerlaku=${encodeURIComponent(masaBerlaku)}&terbuat=${tanggalTerbit}&pasPhoto=${encodeURIComponent(pasPhoto)}`;

        reply('_Tunggu sebentar, sedang membuat KTP..._');

        try {
            const response = await axios.get(url, { responseType: 'arraybuffer' });
await fuzzy.sendMessage(m.chat, {
    image: response.data,
    caption: `Berikut KTP atas nama ${nama}`
}, { quoted: m });  
			} catch (e) {}
			}
			break
			
                    case 'everyone': {
                        if (!isAdmins && !isCreator) return
                        let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
                        fuzzy.sendMessage(m.chat, {
                            text: `@${m.chat} ${text}`,
                            contextInfo: {
                        mentionedJid: mem, 
                                groupMentions: [
                                    {
                                        groupSubject: `everyone`,
                                        groupJid: m.chat,
                                    },
                                ],
                            },
                        });
                        }
                        break
                        case 'etag': {
                            if (!isAdmins && !isCreator) return
                                        let [teks1, teks2] = text.split`|`
                            let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
                            fuzzy.sendMessage(m.chat, {
                                text: `@${m.chat} ${teks1}`,
                                contextInfo: {
                            mentionedJid: mem, 
                                    groupMentions: [
                                        {
                                            groupSubject: `${teks2}`,
                                            groupJid: m.chat,
                                        },
                                    ],
                                },
                            });
                            }
                            break
      case 'd':
      case 'del':
      case 'delete':
      case 'hapus':
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
        if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
        fuzzy.sendMessage(from, {
          delete: {
            remoteJid: from,
            id: m.quoted.id,
            fromMe: m.quoted.fromMe,
            participant: m.quoted.sender
          }
        })
        break
      case 'close':{
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
      fuzzy.groupSettingUpdate(from, 'announcement')
      }
      break
      case 'open':{
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
      fuzzy.groupSettingUpdate(from, 'not_announcement')
      }
      break
      case 'closetime':
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`
        }
        else if (args[1] == "menit") {
          var timer = args[0] * `60000`
        }
        else if (args[1] == "jam") {
          var timer = args[0] * `3600000`
        }
        else if (args[1] == "hari") {
          var timer = args[0] * `86400000`
        }
        else {
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
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);

        if (args[1] == "detik") {
          var timer = args[0] * `1000`
        }
        else if (args[1] == "menit") {
          var timer = args[0] * `60000`
        }
        else if (args[1] == "jam") {
          var timer = args[0] * `3600000`
        }
        else if (args[1] == "hari") {
          var timer = args[0] * `86400000`
        }
        else {
          return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
        }
        reply(`Open time ${q} dimulai dari sekarang`)
        setTimeout(() => {
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
          fuzzy.groupSettingUpdate(from, 'not_announcement')
          reply(open)
        }, timer)
        break
                //ht
                case 'ht': case 'hidetag': {
                    if (!isAdmins && !isCreator && !isAdmins) return reply(acn.admin)
                    if (!m.isGroup) return reply(acn.group)
    fuzzy.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
    }
    break
case 'welcome':
case 'notifikasigc':
case "notificationgc": {
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
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
case 'setwelcome':{
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
   if (!text) return reply('Masukkan teks welcome-nya!\nContoh: .setwelcome Selamat datang @user di grup @group\n\n\n@user // untuk menyebut user yg masuk\n@group untuk menyebut nama group\n@desc untuk menampilkan deskripsi group');
   global.db.data.chats[m.chat].welcomeText = text; // Simpan teks welcome per grup
   reply('Teks welcome berhasil disimpan!');
}
break
case 'setleave':{
          if (!m.isGroup) return reply(global.mess.group);
          if (!isAdmins && !isCreator) return reply(global.mess.admin);
   if (!m.isGroup) return reply('only gc')
   if (!text) return reply('Masukkan teks leave-nya!\nContoh: .setleave Selamat tinggal @user di grup @group\n\n\n@user // untuk menyebut user yg masuk\n@group untuk menyebut nama group\n@desc untuk menampilkan deskripsi group');
   global.db.data.chats[m.chat].leaveText = text; // Simpan teks welcome per grup
   reply('Teks welcome berhasil disimpan!');
}
break
      case 'antitagsw':
      case 'antitaggc': {
        if (!isAdmins && !isCreator) return
        if (!m.isGroup) return
        if (!isBotAdmins) return reply(global.mess.botAdmin)
        if (args[0] === "on") {
          if (antiGroupTag) return reply('Sukses Mengaktifikan Tuan✅')
          antitaggclist.push(from)
          fs.writeFileSync('./AssetsClairity/media/database/antitaggc.json', JSON.stringify(antitaggclist))
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
          fs.writeFileSync('./AssetsClairity/media/database/antitaggc.json', JSON.stringify(antitaggclist))
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
        if (!isBotAdmins) return reply(global.mess.botAdmin)
  
        if (args[0] === "on") {
          if (antisalurgc) return reply('Antilinkgc is already active in this group.');
          antilinkgcList.push(from);
          fs.writeFileSync('./AssetsClairity/media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
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
          fs.writeFileSync('./AssetsClairity/media/database/antilinkgc.json', JSON.stringify(antilinkgcList));
          reply('Antilinkgc has been disabled in this group.');
        }
        else {
          await reply(`Please choose an option: \n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\n'on' to enable\n'off' to disable`);
        }
      }
      break;
      case 'antibot': {
        if (!isAdmins && !isCreator) return
        if (!m.isGroup) return
        if (!isBotAdmins) return reply(global.mess.botAdmin)
        if (args[0] === "on") {
          if (antibot) return reply('Sukses Mengaktifikan Tuan✅')
          antibott.push(from)
          fs.writeFileSync('./AssetsClairity/media/database/antibot.json', JSON.stringify(antibott))
          reply('Success in turning on antibot in this group')
          var groupe = await fuzzy.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          fuzzy.sendMessage(from, {
            text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTolong jika ada bot ada disini mohon di self atau mute jika ada bot maka antibot akan kena kick`,
            contextInfo: {
              mentionedJid: [m.sender]
            }
          }, {
            quoted: m
          })
        }
        else if (args[0] === "off") {
          if (!antibot) return reply('Sukses Menonaktifkan Tuan✅')
          let off = antibott.indexOf(from)
          antibott.splice(off, 1)
          fs.writeFileSync('./AssetsClairity/media/database/antibot.json', JSON.stringify(antibott))
          reply('Success in turning off antibot in this group')
        }
        else {
          await reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
        }
      }
      break
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
      case 'bratvid':
      case 'bratvideo': {
        const ongoingCommands = new Set(); 
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
          const tempDir = path.resolve('./src/temp');
          if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
          const framePaths = [];

          for (let i = 0; i < words.length; i++) {
            const currentText = words.slice(0, i + 1).join(" ");

            const res = await axios.get(
              `https://aqul-brat.hf.space/?text=${encodeURIComponent(currentText)}`, {
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
                //bratt
                case 'brat':
                case 'stickerbrat':
                    case 'sbrat': {
                        (async () => {
                            if (!text) return m.reply('Ketikkan teks setelah perintah.');
                            try {
                                const imageUrl = `https://aqul-brat.hf.space/?text=${encodeURIComponent(text.trim())}`;
                                
                                // Mengambil gambar dari URL
                                const response = await axios.get(imageUrl, {
                                    responseType: 'arraybuffer'
                                });
                                
                                fuzzy.sendImageAsSticker(m?.chat, response.data, m, {
                                    packname: global.packname,
                                    author: global.author
                                });
                            } catch (error) {
                                console.error(`Terjadi kesalahan: ${error}`);
                                return m.reply('Terjadi kesalahan, harap lapor owner.');
                            }
                        })();
                    }
                    break;
                    

                //spam pairing
                case 'spam-pairing': {
                    (async () => {
                        if (!isCreator) return reply('owner doang bego');
                        if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`);
                
                        let [peenis, pepekk] = text.includes('|') ? text.split("|") : [text, "200"];
                        let target = peenis.replace(/[^0-9]/g, '').trim();
                
                        let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
                        let { state } = await useMultiFileAuthState('./AssetsClairity/pepek');
                        let { version } = await fetchLatestBaileysVersion();
                        let pino = require("pino");
                        let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) });
                
                        for (let i = 0; i < pepekk; i++) {
                            await sleep(1500);
                            let prc = await sucked.requestPairingCode(target);
                            console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`);
                        }
                        await sleep(15000);
                    })();
                }
                break;
case 'ytmp4': {
  if (!text) return reply(`Masukkan link YouTube.\nContoh: ${prefix}ytmp4 https://youtu.be/S6bxlUq1tk4`);
function extractVideoId(url) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : '';
}
reply(global.mess.wait)
  try {
    const encodedUrl = encodeURIComponent(text);
    const apiUrl = `https://ytdlpyton.nvlgroup.my.id/download/?url=${encodedUrl}&resolution=720&mode=url`;

    const { data } = await axios.get(apiUrl);

    if (!data || !data.download_url) {
      return reply('Gagal mengambil data, pastikan link valid.');
    }


    await fuzzy.sendMessage(from, {
      video: { url: data.download_url },
      caption: `✅ Berikut hasil download dari *${data.title}*`,
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('Gagal mengambil video, pastikan link YouTube valid.');
  }
}
break;
case "uwak":
case 'ytmp3': {
  if (!text) return reply(`Masukkan link YouTube.\nContoh: ${prefix}ytmp3 https://youtu.be/S6bxlUq1tk4`);
function extractVideoId(url) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : '';
}
reply(global.mess.wait)
  try {
    const encodedUrl = encodeURIComponent(text);
    const apiUrl = `https://ytdlpyton.nvlgroup.my.id/download/?url=${encodedUrl}&resolution=720&mode=url`;

    const { data } = await axios.get(apiUrl);

    if (!data || !data.download_url) {
      return reply('Gagal mengambil data audio.');
    }

            let doc = {
              audio: {
                url: data.download_url
              },
              mimetype: 'audio/mpeg',
              fileName: `${data.title}.mp3`,
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  title: '',
                  body: `${data.title}`,
                  thumbnailUrl: 'https://i.ytimg.com/vi/' + extractVideoId(text) + '/maxresdefault.jpg',
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            };

            // Kirim audio
            await fuzzy.sendMessage(from, doc, {
              quoted: m
            });

  } catch (err) {
    console.error(err);
    reply('Terjadi kesalahan saat mengambil audio.');
  }
}
break;
      case 'play': {

        if (!text) return reply(`Gunakan dengan format ${command} query\n\nContoh:\n\n${command} helena`);

        try {
      reply(global.mess.wait)
            // getmp3
            const searchResults = await yts(`${text}`);
            if (!searchResults.videos.length) {
              return m.reply('Tidak menemukan video yang cocok.');
            }

            const videoUrl = searchResults.videos[0].url;
            class Ddownr {
              constructor(url) {
                this.url = url;
              }

              async downloadAudio() {
                try {
                  const {
                    data
                  } = await axios.get(`https://p.oceansaver.in/ajax/download.php?copyright=0&format=mp3&url=${this.url}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`);
                  let result = {};

                  while (true) {
                    const response = await axios.get(`https://p.oceansaver.in/ajax/progress.php?id=${data.id}`).catch(e => e.response);
                    if (response.data.download_url) {
                      result = {
                        download: response.data.download_url,
                        title: data.info.title, // Assume data.info.title contains the video title
                        thumbnail: data.info.thumbnail // Assume data.info.thumbnail contains the video thumbnail
                      };
                      break;
                    }
                    else {}
                  }
                  return {
                    success: true,
                    ...result
                  };
                }
                catch (e) {
                  return {
                    success: false,
                    msg: "Kode Nya Turu min Besok lagi saja",
                    err: e
                  };
                }
              }
            }
            const data = new Ddownr(videoUrl);
            const result = await data.downloadAudio();

            // Siapkan dokumen audio
            let doc = {
              audio: {
                url: result.download
              },
              mimetype: 'audio/mpeg',
              fileName: '',
              contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: {
                  title: '',
                  body: '',
                  thumbnailUrl: '',
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            };

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
            //ttdownload
            case 'tt': {
                if (args.length == 0) return m.reply(`ndi link e`)
                fuzzy.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
                const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`);
                let vidnya = data.video?.noWatermark;
                let gambarStory = data.images?.[0]?.url; // Menangani jika story berupa gambar
                let caption = `
  *Video dari* _${data.author.name ?? ''} (@${data.author.unique_id ?? ''})_
  *Likes*: _${data.stats.likeCount ?? ''}_
  *Comments*: _${data.stats.commentCount ?? ''}_
  *Shares*: _${data.stats.shareCount ?? ''}_
  *Plays*: _${data.stats.playCount ?? ''}_
  *Saves*: _${data.stats.saveCount ?? ''}_
  `;

                // Mengirim video jika ada
                if (vidnya) {
                    await fuzzy.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m });
                } else if (gambarStory) {
                    await fuzzy.sendMessage(m.chat, { caption: caption, image: { url: gambarStory } }, { quoted: m });
                } else {
                    await fuzzy.sendMessage(m.chat, { text: 'Maaf, tidak ada media yang dapat diunduh.' }, { quoted: m });
                }
            }
                break
case 'hitamkan': {
  if (/image/.test(mime) || quoted?.mimetype?.includes('image')) {
    m.reply('_Tunggu sebentar, sedang memproses..._');

    async function prosesHitamkan() {
      try {
        const media = await quoted.download();
        const data = JSON.stringify({
          imageData: Buffer.from(media).toString('base64'),
          filter: 'hitam'
        });

        const res = await axios.post('https://negro.consulting/api/process-image', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (res.data && res.data.status === 'success') {
          const hasilBuffer = Buffer.from(res.data.processedImageUrl.split(',')[1], 'base64');
          fuzzy.sendMessage(m.chat, {
            image: hasilBuffer,
            caption: 'Sudah dihitamkan'
          }, { quoted: m });
        } else {
          m.reply('Gagal memproses gambar.');
        }
      } catch (err) {
        m.reply('Terjadi kesalahan saat memproses gambar.');
        console.error(err);
      }
    }

    prosesHitamkan();
  } else {
    m.reply('Kirimkan gambar atau reply gambar dengan caption *hitamkan*');
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

            case 'swm': {
				let [teks1, teks2] = text.split`|`
				if (!teks1) return reply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
				
				if (/image/.test(mime)) {
					let media = await fuzzy.downloadMediaMessage(qmsg)
					let encmedia = await fuzzy.sendImageAsSticker(m?.chat, media, m, {
						packname: teks1,
						author: teks2
					})
					await fs.unlinkSync(encmedia)
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
					let media = await fuzzy.downloadMediaMessage(qmsg)
					let encmedia = await fuzzy.sendVideoAsSticker(m?.chat, media, m, {
						packname: teks1,
						author: teks2
					})
					await fs.unlinkSync(encmedia)
				} else {
					return reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
				}
			}
			break
case 'tourl': {
  try {
  if (!m.quoted) return reply(`Send/Reply Media With Captions ${prefix + command}`)

    const filename = makeid(5)
    const media = await fuzzy.downloadAndSaveMediaMessage(quoted, filename)

    exec(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${media}" https://catbox.moe/user/api.php`, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return reply("Gagal upload ke Catbox 😔");
      }

      reply(stdout.trim());

      fs.unlink(media, (err) => {
        if (err) console.error('Gagal menghapus file:', err);
        else console.log(`File ${media} berhasil dihapus.`);
      });
    });

  } catch (error) {
    console.log(error);
    return reply("Error...");
  }
}
break;
            case 'setexif': {
				if (!isCreator) return reply(mess.only.owner)
				if (!text) return replay(`Example : ${command} packname|author`)
				global.packname = text.split("|")[0]
				global.author = text.split("|")[1]
				reply(`Exif Has Been Successfully Changed to\n\n Packname : ${global.packname}\n Author : ${global.author}`)
			}
			break

            case "jarak": {
				var [fromo, to] = text.split`|`
				if (!(fromo && to)) return reply(`Ex: ${prefix + command} jakarta|bandung`)
				var data = await jarak(fromo, to)
				if (data.img) return fuzzy.sendMessage(m?.chat, {
					image: data.img,
					caption: data.desc
				}, {
					quoted: m
				})
				else reply(data.desc)
			}
			break
            
            case 'sticker':
            case 's': {
                if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                    fuzzy.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await fuzzy.sendImageAsSticker(m?.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await fuzzy.sendVideoAsSticker(m?.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
                break

            case 'tebak': {
                if (!m.isGroup) return reply('cmd only group')
                function isGameActive() {
                    return tebakgambar[from] || tebakkata[from] || tebakkalimat[from] || tebaklirik[from] ||
                           tebaktebakan[from] || tebakbendera[from] || tebakbendera2[from] || tebakkabupaten[from] ||
                           tebakkimia[from] || tebakasahotak[from] || tebaksiapakahaku[from] || tebaksusunkata[from] ||
                           tebaktekateki[from] || tebakjkt48[from];
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
                    } else if (args[0] === 'kata') {
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
                    } else if (args[0] === 'kalimat') {
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
                    } else if (args[0] === 'lirik') {
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
                    } else if (args[0] === 'tebakan') {
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
                    } else if (args[0] === 'bendera') {
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
                    } else if (args[0] === 'bendera2') {
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
                    } else if (args[0] === 'kabupaten') {
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
                    } else if (args[0] === 'kimia') {
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
                    } else if (args[0] === 'asahotak') {
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
                    } else if (args[0] === 'siapakahaku') {
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
                    } else if (args[0] === 'susunkata') {
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
                    } else if (args[0] === 'tekateki') {
                        let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')
                        let result = anu[Math.floor(Math.random() * anu.length)]
                        console.log("Jawaban: " + result.jawaban)
                        fuzzy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s\n\n*CARA JAWAB:* Reply pesan ini untuk menjawab` , m).then(() => {
                            tebaktekateki[from] = result.jawaban.toLowerCase()
                        })
                        await sleep(60000)
                        if (tebaktekateki.hasOwnProperty(from)) {
                            fuzzy.sendText(m.chat, `Waktu Habis\nJawaban:  ${tebaktekateki[from]}`, m)
                            delete tebaktekateki[from]
                        }
                    } else if (args[0] === 'jkt48') {
                    
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
                    } else {
                        reply("Gagal mengambil data dari API.");
                    }
                } else reply(`- GAME TEBAK -\n\n.tebak kata\n.tebak tebakan\n.tebak bendera\n.tebak kalimat\n.tebak lirik\n.tebak tekateki\n.tebak siapakahaku\n.tebak asahotak\n.tebak susunkata\n.tebak kimia\n.tebak kabupaten\n.tebak gambar\n.tebak bendera2\n.tebak jkt48`)
                }
                break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = require('util').format(sat)
                        if (sat == undefined) {
                            bang = require('util').format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(require('util').format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return
                    let kode = budy.trim().split(/ +/)[1]
                    let teks
                    try {
                        teks = /await/i.test(kode) ? eval("(async() => { " + kode + " })()") : eval(kode)
                    } catch (e) {
                        teks = e
                    } finally {
                        await m.reply(require('util').format(teks))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator && isBot) return
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }
                break;
                break;
        }
    } catch (err) {
        console.log(require('util').format(err));
    }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update ${__filename}`);
    delete require.cache[file];
    require(file);
});
