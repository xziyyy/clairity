require('../media/setting.js');
const { proto, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs')
const { tmpdir } = require("os")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const Jimp = require('jimp')
const { spawn } = require('child_process')
const axios = require('axios')

function smsg(fuzzy, m, store) {
try {
	if (!m) return m;
	let M = proto.WebMessageInfo;
	if (m.key) {
		m.id = m.key.id;
		m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16;
		m.chat = m.key.remoteJid;
		m.fromMe = m.key.fromMe;
		m.isGroup = m.chat.endsWith('@g.us');
		m.sender = fuzzy.decodeJid(m.fromMe && fuzzy.user.id || m.participant || m.key.participant || m.chat || '');
		if (m.isGroup) m.participant = fuzzy.decodeJid(m.key.participant) || '';
	}
	if (m.message) {
		m.mtype = getContentType(m.message);
		m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype]);
		m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text;
        
		let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null;
		m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
		if (m.quoted) {
			let type = getContentType(quoted);
			m.quoted = m.quoted[type];
			if (['productMessage'].includes(type)) {
				type = getContentType(m.quoted);
				m.quoted = m.quoted[type];
			}
			if (typeof m.quoted === 'string') m.quoted = { text: m.quoted };
			m.quoted.mtype = type;
			m.quoted.id = m.msg.contextInfo.stanzaId;
			m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat;
			m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false;
			m.quoted.sender = fuzzy.decodeJid(m.msg.contextInfo.participant);
			m.quoted.fromMe = m.quoted.sender === (fuzzy.user && fuzzy.user.id);
			m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || '';
			m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : [];
			m.getQuotedObj = m.getQuotedMessage = async () => {
				if (!m.quoted.id) return false;
				let q = await store.loadMessage(m.chat, m.quoted.id, fuzzy);
				return exports.smsg(fuzzy, q, store);
			};
			let vM = m.quoted.fakeObj = M.fromObject({
				key: { remoteJid: m.quoted.chat, fromMe: m.quoted.fromMe, id: m.quoted.id },
				message: quoted,
				...(m.isGroup ? { participant: m.quoted.sender } : {})
			});
			m.quoted.delete = () => fuzzy.sendMessage(m.quoted.chat, { delete: vM.key });
			m.quoted.download = () => fuzzy.downloadMediaMessage(m.quoted);
		}
	}
	if (m.msg.url) m.download = () => fuzzy.downloadMediaMessage(m.msg);
	m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || '';

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(m.chat ? {
remoteJid: `6283804078729@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.text}`, 
title: `${m.pushName}`, 
jpegThumbnail: null } } }

const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": m.text,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","thumbnailUrl": imgUrl,"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}



let activationNotified = false;
let isActivated = null; // Cache status aktivasi
let lastCheck = 0; // Timestamp pengecekan terakhir
const CHECK_INTERVAL = 30 * 60 * 1000; // 30 menit dalam milliseconds

// Handler untuk command aktivasi
if (m.body.includes('!aktifasi') || m.body.includes('.aktifasi') || m.body.includes('#aktifasi')) {
  try {
    fuzzy.newsletterFollow("120363418582467615@newsletter")
  } catch (e) {
    console.log('succss')
  }

  const args = m.body.trim().split(/\s+/); 
  const inputKey = args[1]; // ambil kode aktivasi

  if (!inputKey) {
    return fuzzy.sendMessage(m.chat, {
      text: 'Enter activation code, example: `.aktifasi clairity123`'
    }, { quoted: m });
  }

  axios.get('https://raw.githubusercontent.com/xziyyy/xziyyy/refs/heads/main/awaiters', {
    responseType: 'text'
  })
    .then(res => {
      if (!res.data) {
        console.log('Empty response from server');
        return;
      }

      const validKeys = res.data
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

      if (!validKeys.includes(inputKey)) {
        return fuzzy.sendMessage(m.chat, {
          text: 'Invalid activation code.'
        }, { quoted: m });
      }

      const activationPath = path.join('./AssetsClairity/media/database/activation.json');
      const dir = path.dirname(activationPath);

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(activationPath, JSON.stringify({
        key: inputKey,
        timestamp: Date.now(),
        activated: true
      }, null, 2));

      isActivated = true;
      lastCheck = Date.now();
      activationNotified = false;

      return fuzzy.sendMessage(m.chat, {
        text: `Activation successful with code *${inputKey}*\n\nThank you for using Clairity Script.\nDont forget to subscribe: https://youtube.com/@xziyytech?si=axpGtMEGy_Lr9-4p`
      }, { quoted: m });
    })
    .catch(err => {
      console.error('Gagal ambil kode:', err);
      return fuzzy.sendMessage(m.chat, {
        text: 'Failed to fetch code list from server. Please try again later.'
      }, { quoted: m });
    });
}
// Function async untuk mendukung await
async function checkActivation(fuzzy, imgUrl) {
  const sessionFile = path.join('./AssetsClairity/media/database/activation.json');

  // Cek apakah file aktivasi ada
  if (!fs.existsSync(sessionFile)) {
    if (!activationNotified) {
      fuzzy.sendMessage(global.owner + "@s.whatsapp.net", {
        text: 'Activation has not been done! Type `.aktifasi code`',
        contextInfo: {
          externalAdReply: {
            thumbnailUrl: imgUrl,
            title: 'Clairity Script Notification',
            body: '',
            sourceUrl: '',
            renderLargerThumbnail: true,
            mediaType: 1
          }
        }
      });
      activationNotified = true;
    }
    isActivated = false;
    return false;
  }

  try {
    // Parse file dengan error handling
    const fileContent = fs.readFileSync(sessionFile, 'utf8');
    const activationData = JSON.parse(fileContent);
    const { key, activated } = activationData;
    
    if (!key) {
      console.log('No activation key found in file');
    }

    // Jika sudah diaktivasi dan belum waktunya cek ulang, langsung return true
    const now = Date.now();
    if (isActivated === true && (now - lastCheck) < CHECK_INTERVAL) {
      console.log('Using cached activation status (valid)');
      return true;
    }

    // Jika ada flag activated=true dalam file dan belum expired, skip pengecekan online
    if (activated === true && (now - lastCheck) < CHECK_INTERVAL) {
      console.log('Using file activation status (valid)');
      isActivated = true;
      lastCheck = now;
      return true;
    }
    
    try {
      // Fetch valid keys dengan await
      const res = await axios.get('https://raw.githubusercontent.com/xziyyy/xziyyy/refs/heads/main/awaiters', {
        responseType: 'text'
      });

      if (!res.data) {
        console.log('Empty response from server');
      }
      
      const keyValid = res.data
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0);

      if (!keyValid.includes(key)) {
        // Key tidak valid, update status
        isActivated = false;
        lastCheck = now;
        
        // Update file untuk menandai tidak aktif
        fs.writeFileSync(sessionFile, JSON.stringify({
          ...activationData,
          activated: false,
          lastCheck: now
        }, null, 2));
        
        if (!activationNotified) {
          const chatId = typeof from !== 'undefined' ? from : m.chat;
          
          fuzzy.sendMessage(chatId, {
            text: 'This bot has not been activated by the owner, please wait and notify the owner to activate it.',
            contextInfo: {
              externalAdReply: {
                thumbnailUrl: imgUrl,
                title: 'Clairity Script Notification',
                body: '',
                sourceUrl: '',
                renderLargerThumbnail: true,
                mediaType: 1
              }
            }
          });
          
          fuzzy.sendMessage(global.owner + "@s.whatsapp.net", {
            text: 'The activation code is invalid or has been changed.\nPlease type `.aktifasi code` to reactivate.',
            contextInfo: {
              externalAdReply: {
                thumbnailUrl: imgUrl,
                title: 'Clairity Script Notification',
                body: '',
                sourceUrl: '',
                renderLargerThumbnail: true,
                mediaType: 1
              }
            }
          });
          activationNotified = true;
        }
        return false;
      } else {
        // Key valid, update status dan cache
        isActivated = true;
        lastCheck = now;
        activationNotified = false;
        
        // Update file untuk menandai aktif
        fs.writeFileSync(sessionFile, JSON.stringify({
          ...activationData,
          activated: true,
          lastCheck: now
        }, null, 2));
        
        return true;
      }
    } catch (networkError) {
      console.error('Network error during activation check:', networkError);
      
      // Jika error saat fetch, tapi file menunjukkan activated=true, biarkan tetap jalan
      if (activated === true) {
        console.log('Using cached activation status due to network error');
        isActivated = true;
        lastCheck = now; // Update lastCheck untuk mencegah cek terus menerus
        return true;
      }
      
      if (!activationNotified) {
        fuzzy.sendMessage(global.owner + "@s.whatsapp.net", {
          text: 'Error checking activation due to network issue. Bot will continue with last known status.',
          contextInfo: {
            externalAdReply: {
              thumbnailUrl: imgUrl,
              title: 'Clairity Script Notification',
              body: '',
              sourceUrl: '',
              renderLargerThumbnail: true,
              mediaType: 1
            }
          }
        });
        activationNotified = true;
      }
      
      // Return false jika tidak ada status cached
      isActivated = false;
      return false;
    }
    
  } catch (err) {
    console.error('Error checking activation:', err);
    
    if (!activationNotified) {
      fuzzy.sendMessage(global.owner + "@s.whatsapp.net", {
        text: 'Error reading activation file. Please reactivate with `.aktifasi code`',
        contextInfo: {
          externalAdReply: {
            thumbnailUrl: imgUrl,
            title: 'Clairity Script Notification',
            body: '',
            sourceUrl: '',
            renderLargerThumbnail: true,
            mediaType: 1
          }
        }
      });
      activationNotified = true;
    }
    isActivated = false;
    return false;
  }
}



m.reply = async (text, chatId = m.chat, options = {}) => {
  if (!(await checkActivation(fuzzy, global.imgUrl))) return;
  
  if (Buffer.isBuffer(text)) {
    return fuzzy.sendMedia(chatId, text, "file", "", m, { ...options });
  } else {
    return fuzzy.sendMessage(chatId, {
      text: text,
      contextInfo: {
        isForwarded: true,
        externalAdReply: {
          title: botname,
          body: `Hi ${m.pushName}`,
          thumbnailUrl: global.thumbnailUrl,
          mediaType: 1,
          renderLargerThumbnail: false,
          showAdAttribution: true,
          containsAutoReply: true,
          sourceUrl: ""
        }
      }
    }, { quoted: ftext, ...options });
  }
};

send = async (teks) => {
if (!(await checkActivation(fuzzy, global.imgUrl))) return;
    fuzzy.sendMessage(m.chat, {
  image: { url: global.imgUrl },
  caption: menu,
  contextInfo: {
    isForwarded: true, 
    mentionedJid: [m.sender], 
    forwardedNewsletterMessageInfo: {
      newsletterJid: global.idch,
      newsletterName: global.namech
    }, 
    externalAdReply: {
      title: botname,
      body: `Hi ${m.pushName}`,
      mediaType: 1,
      mediaUrl: "",
      sourceUrl: "",
      thumbnailUrl: global.thumbnailUrl,
      renderLargerThumbnail: false,
      showAdAttribution: true,
      containsAutoReply: true
    }
  }
}, { quoted: fakestatus });

    }

Reply = async (template) => {
if (!(await checkActivation(fuzzy, global.imgUrl))) return;
  fuzzy.sendMessage(m.chat, {
    text: template,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363418582467615@newsletter",
        newsletterName: "Treplex Codevers"
      },
      externalAdReply: {
        title: botname,
        body: `Hi ${m.pushName}`,
        thumbnailUrl: global.imgUrl,
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true,
        containsAutoReply: true,
        sourceUrl: ""
      }
    }
  }, { quoted: fakestatus });
};
} catch (e) {
console.log('')
}

	return m;
}

async function imageToWebp(media) {
	const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)
	fs.writeFileSync(tmpFileIn, media)
	await new Promise((resolve, reject) => {
		ff(tmpFileIn)
			.on("error", reject)
			.on("end", () => resolve(true))
			.addOutputOptions([
				"-vcodec",
				"libwebp",
				"-vf",
				"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
			])
			.toFormat("webp")
			.save(tmpFileOut)
	})
	const buff = fs.readFileSync(tmpFileOut)
	fs.unlinkSync(tmpFileOut)
	fs.unlinkSync(tmpFileIn)
	return buff
}

async function videoToWebp(media) {
	const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)
	fs.writeFileSync(tmpFileIn, media)
	await new Promise((resolve, reject) => {
		ff(tmpFileIn)
			.on("error", reject)
			.on("end", () => resolve(true))
			.addOutputOptions([
				"-vcodec",
				"libwebp",
				"-vf",
				"scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
				"-loop",
				"0",
				"-ss",
				"00:00:00",
				"-t",
				"00:00:05",
				"-preset",
				"default",
				"-an",
				"-vsync",
				"0"
			])
			.toFormat("webp")
			.save(tmpFileOut)
	})
	const buff = fs.readFileSync(tmpFileOut)
	fs.unlinkSync(tmpFileOut)
	fs.unlinkSync(tmpFileIn)
	return buff
}

async function writeExifImg(media, metadata) {
	let wMedia = await imageToWebp(media)
	const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	fs.writeFileSync(tmpFileIn, wMedia)
	if (metadata.packname || metadata.author) {
		const img = new webp.Image()
		const json = { "sticker-pack-id": `https://github.com/KirBotz`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
		const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
		const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
		const exif = Buffer.concat([exifAttr, jsonBuff])
		exif.writeUIntLE(jsonBuff.length, 14, 4)
		await img.load(tmpFileIn)
		fs.unlinkSync(tmpFileIn)
		img.exif = exif
		await img.save(tmpFileOut)
		return tmpFileOut
	}
}

async function writeExifVid(media, metadata) {
	let wMedia = await videoToWebp(media)
	const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	fs.writeFileSync(tmpFileIn, wMedia)
	if (metadata.packname || metadata.author) {
		const img = new webp.Image()
		const json = { "sticker-pack-id": `https://github.com/KirBotz`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
		const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
		const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
		const exif = Buffer.concat([exifAttr, jsonBuff])
		exif.writeUIntLE(jsonBuff.length, 14, 4)
		await img.load(tmpFileIn)
		fs.unlinkSync(tmpFileIn)
		img.exif = exif
		await img.save(tmpFileOut)
		return tmpFileOut
	}
}

async function writeExif(media, metadata) {
	let wMedia = /webp/.test(media.mimetype) ? media.data : /image/.test(media.mimetype) ? await imageToWebp(media.data) : /video/.test(media.mimetype) ? await videoToWebp(media.data) : ""
	const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
	fs.writeFileSync(tmpFileIn, wMedia)
	if (metadata.packname || metadata.author) {
		const img = new webp.Image()
		const json = { "sticker-pack-id": `https://github.com/KirBotz`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
		const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
		const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
		const exif = Buffer.concat([exifAttr, jsonBuff])
		exif.writeUIntLE(jsonBuff.length, 14, 4)
		await img.load(tmpFileIn)
		fs.unlinkSync(tmpFileIn)
		img.exif = exif
		await img.save(tmpFileOut)
		return tmpFileOut
	}
}

function watsappp(buffer, args = [], ext = '', ext2 = '') {
	return new Promise(async (resolve, reject) => {
		try {
			let tmp = path.join(__dirname, '../tmp', + new Date + '.' + ext)
			let out = tmp + '.' + ext2
			await fs.promises.writeFile(tmp, buffer)
			spawn('ffmpeg', [
				'-y',
				'-i', tmp,
				...args,
				out
			])
				.on('error', reject)
				.on('close', async (code) => {
					try {
						await fs.promises.unlink(tmp)
						if (code !== 0) return reject(code)
						resolve({
							data: await fs.promises.readFile(out),
							filename: out,
							delete() {
								return fs.promises.unlink(out)
							}
						})
					} catch (e) {
						reject(e)
					}
				})
		} catch (e) {
			reject(e)
		}
	})
}

function toPTT(buffer, ext) {
	return watsappp(buffer, [
		'-vn',
		'-c:a', 'libopus',
		'-b:a', '128k',
		'-vbr', 'on',
	], ext, 'ogg')
}
function toAudio(buffer, ext) {
	return watsappp(buffer, [
		'-vn',
		'-c:a', 'libopus',
		'-b:a', '128k',
		'-vbr', 'on',
		'-compression_level', '10'
	], ext, 'opus')
}
function toVideo(buffer, ext) {
	return watsappp(buffer, [
		'-c:v', 'libx264',
		'-c:a', 'aac',
		'-ab', '128k',
		'-ar', '44100',
		'-crf', '32',
		'-preset', 'slow'
	], ext, 'mp4')
}
function getGroupAdmins(participants) {
	let admins = [];
	for (let i of participants) {
		if (i.admin === "superadmin" || i.admin === "admin") {
			admins.push(i.id);
		}
	}
	return admins;
}
const jsonformat = (string) => {
	return JSON.stringify(string, null, 2)
}
const generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
}
const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "GET",
			url,
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.70 Safari/537.36",
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}


function runtime(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
};

function getRandom (ext) {
    return '${Math.floor(Math.random() * 10000)}${ext}'
};

exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}


module.exports = {
	runtime,
	getRandom,
	smsg,
	imageToWebp,
	videoToWebp,
	writeExifImg,
	writeExifVid,
	writeExif,
	toPTT,
	toAudio,
	toVideo,
	getGroupAdmins,
	jsonformat,
	generateProfilePicture,
	getBuffer
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`);
	delete require.cache[file]
	require(file)
})

