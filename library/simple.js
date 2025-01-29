 const { getContentType, generateForwardMessageContent, downloadContentFromMessage, prepareWAMessageMedia, generateWAMessage, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys')
 const { exec } = require("child_process")
 const fs = require('fs')
 const jimp = require('jimp')
 const chalk = require('chalk')
 const axios = require('axios')
 const FileType = require('file-type')

 const moment = require("moment-timezone")
 const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
  const sleep = async (ms) => {
       return new Promise(resolve => setTimeout(resolve, ms))
   }
 exports.move = (client, msg, store) => {
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
 let morph = msg
 const from = morph.key.remoteJid
 if (!msg) return msg
 if (morph.key) {
 
        ID = msg.key.id

        msg.isBaileys = ID.startsWith('BAE5') && ID.length === 16
               
        msg.sender = client.decodeJid(msg.Me && client.user.id || msg.participant || msg.key.participant || msg.key.remoteJid || '')
        msg.senderNumber = msg.sender.split("@")[0]
    }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//    
 if (msg.message) { 
   msg.msgType = Object.keys (msg.message)[0]
   msg.xtype = getContentType(msg.message)
   msg.isMedia = (msg.xtype === 'imageMessage' || msg.xtype === 'videoMessage')

   msg.content = JSON.stringify(msg.message)


   msg.isQuotedImage = msg.xtype === 'extendedTextMessage' && msg.content.includes('imageMessage')


   msg.isQuotedVideo = msg.xtype === 'extendedTextMessage' && msg.content.includes('videoMessage')


   msg.isQuotedAudio = msg.xtype === 'extendedTextMessage' && msg.content.includes('audioMessage')


   msg.isQuotedSticker = msg.xtype === 'extendedTextMessage' && msg.content.includes('stickerMessage')


   msg.isQuotedLocation = msg.xtype === 'extendedTextMessage' && msg.content.includes('locationMessage')        
   msg.msg = (msg.xtype == 'viewOnceMessage' ? msg.message[msg.xtype].message[getContentType(msg.message[msg.xtype].message)] : msg.message[msg.xtype])
   if (msg.msg) { 
   let quoted = msg.quoted = msg.msg.contextInfo ? msg.msg.contextInfo.quotedMessage : null  
   if (msg.quoted) {
   let type = getContentType(quoted)


   if (['productMessage'].includes(type)) {


     type = getContentType(msg.quoted)


    	 msg.quoted = msg.quoted[type]


	}


   if (typeof msg.quoted === 'string') msg.quoted = {


	text: msg.quoted


	}
	try{
	    const context = msg.message[msg.xtype].contextInfo.quotedMessage


        if(context["ephemeralMessage"]){


            msg.quotedMsg = context.ephemeralMessage.message


        }else{


            msg.quotedMsg = context


        }


        msg.isQuotedMsg = true


        msg.quotedMsg.sender = msg.message[msg.xtype].contextInfo.participant


        msg.quotedMsg.fromMe = msg.quotedMsg.sender === conn.user.id.split(':')[0]+'@s.whatsapp.net' ? true : false


        msg.quotedMsg.type = Object.keys(msg.quotedMsg)[0]


        let ane = msg.quotedMsg


        msg.quotedMsg.chats = (ane.type === 'conversation' && ane.conversation) ? ane.conversation : (ane.type == 'imageMessage') && ane.imageMessage.caption ? ane.imageMessage.caption : (ane.type == 'documentMessage') && ane.documentMessage.caption ? ane.documentMessage.caption : (ane.type == 'videoMessage') && ane.videoMessage.caption ? ane.videoMessage.caption : (ane.type == 'extendedTextMessage') && ane.extendedTextMessage.text ? ane.extendedTextMessage.text : (ane.type == 'buttonsMessage') && ane.buttonsMessage.contentText ? ane.buttonsMessage.contentText : ""


        msg.quotedMsg.id = msg.message[msg.xtype].contextInfo.stanzaId


    }catch{


        msg.quotedMsg = null


        msg.isQuotedMsg = false


    }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//    
    msg.quoted.id = msg.msg.contextInfo.stanzaId


    msg.quoted.chat = msg.msg.contextInfo.remoteJid || msg.chat


    msg.quoted.isBaileys = msg.quoted.id ? msg.quoted.id.startsWith('BAE5') && msg.quoted.id.length === 16 : false


    msg.quoted.sender = client.decodeJid(msg.msg.contextInfo.participant)


    msg.quoted.fromMe = msg.quoted.sender === (client.user && client.user.id)


    msg.quoted.text = msg.quoted.text || msg.quoted.caption || msg.quoted.conversation || msg.quoted.contentText || msg.quoted.selectedDisplayText || msg.quoted.title || ''


    msg.quoted.mentionedJid = msg.msg.contextInfo ? msg.msg.contextInfo.mentionedJid : []
    
    
    }  
   }   
  }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//  
  msg.getGroupMembers = function(participants){
   let adminz = []


	for (let i of participants) {


		i.id !== null ? adminz.push(i.id) : ''


   }
  return adminz
}
  msg.getGroupAdmins = function(participants){


    let admins = []


	for (let i of participants) {


		i.admin !== null ? admins.push(i.id) : ''


	}


	return admins


}
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*// 
  msg.reply = async (teks) => {


    client.sendMessage(from, 


        { text: teks, mentions: [msg.sender] },


        { quoted : msg }) 



        }
        
     const downloadMediaMessage = async (message) => {

        let mime = (message.msg || message).mimetype || ''

        let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]

        let extension = mime.split('/')[1]

        const stream = await downloadContentFromMessage(message, messageType)

        let buffer = Buffer.from([])

        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
}
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
 client.deleteAll = async(idMsg, toDel) => {
 client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: idMsg, participant: toDel }})
 .catch((err) => {
        console.log(err)
        msg.reply('Error!')
  })
 }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
 client.copyMSGForward = async (ID, messg, forceForward = false, options = {}) => {
    let zType
     if (options.readViewOnce) {
       messg.message = messg.message && messg.message.ephemeralMessage && messg.message.ephemeralMessage.message ? messg.message.ephemeralMessage.message : (messg.message || undefined)
       zType = Object.keys(messg.message.viewOnceMessage.message)[0]
        delete(messg.message && messg.message.ignore ? messg.message.ignore : (messg.message || undefined))
        delete messg.message.viewOnceMessage.message[zType].viewOnce
        messg.message = {
           ...messg.message.viewOnceMessage.message
         }
      }
    let vType = Object.keys(messg.message)[0]
    let content = await generateForwardMessageContent(messg, forceForward)
    let xType = Object.keys(content)[0]
    let context = {}
    if (vType != "conversation") context = messg.message[vType].contextInfo
        content[xType].contextInfo = {
         ...context,
         ...content[xType].contextInfo
       }
    const WAMessaGE = await generateWAMessageFromContent(ID, content, options ? {
     ...content[xType],
     ...options,
     ...(options.contextInfo ? {
         contextInfo: {
           ...content[xType].contextInfo,
           ...options.contextInfo
          }
       } : {})
     } : {})
   await client.relayMessage(ID, WAMessaGE.message, { messageId:  WAMessaGE.key.id })
   return WAMessaGE
  }
  
  client.sendTextWithMentions = async (jid, text, quoted, options = {}) => client.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') } }, { quoted })

client.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
     
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
 client.DeleteMessage = async(mes, botNumber) => {
    mekh = mes.length
    pesan_ke = 0 
    async function me(){
     
      if(mekh == pesan_ke) return    
      await sleep(1000)       
        client.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: mes[pesan_ke], participant: botNumber } })   
        pesan_ke += 1
        me()
      }
     me()
   }
   client.Delete = async (KEY, botNumber) => {
   await client.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: KEY, participant: botNumber } })
   }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
   
    client.sendButtonImage = async(ID, coma, TXT, optsimg, caption, footer, quoted) => {
             let buttons = [
                {  buttonId: `${coma}`,
                  buttonText: {  displayText: TXT
                }, type: 1},
               ]
              let buttonMessage = {
                 image: optsimg,
                 caption: caption,
                 footer: footer,
                 buttons: buttons,
                 headerType: 4
               }
               await client.sendMessage(from, buttonMessage, quoted)
    }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
 msg.createMsg = async (
    jidnya, 
    kontennya, 
    optionnya
 ) =>    
   {
   return await generateWAMessage(
    jidnya, 
    kontennya, 
   {
    ...optionnya,
    userJid: client.authState.creds.me.id,
    upload: client.waUploadToServer
    }
   )
  }  
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//            
 msg.sendButton = async (id, text1, text2, button, desc1, yo) => {
 var templates = await generateWAMessageFromContent(id, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": text2, 
        "hydratedButtons": button
      }
    }
  }, {})
  client.relayMessage(id, templates.message, { messageId: templates.key.id })
  }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
  const times = moment().tz('Asia/Jakarta').format('HH:mm:ss')


  if(times < "23:59:00"){


    msg.sayingtime         = 'Good night'


    msg.timoji = '🌃'}


  if(times < "19:00:00"){


    msg.sayingtime         = 'Good afternoon'


    msg.timoji = '🌆'}
  if(times < "18:00:00"){


    msg.sayingtime         = 'Good afternoon'


    msg.timoji = '🌇'}


  if(times < "15:00:00"){


    msg.sayingtime         = 'Good afternoon'
    msg.timoji = '🌞'}
  if(times < "11:00:00"){


    msg.sayingtime         = 'Good morning'


    msg.timoji = '🌅'}


  if(times < "05:00:00"){


    msg.sayingtime         = 'Good night'


    msg.timoji = '🌃' }  

    msg.tanggal10 = new Date('1 Jan 2023 00:00:00').getTime();
    msg.sekarang1 = new Date().getTime();


    msg.selisih = msg.tanggal10 - msg.sekarang1;


    msg.harinye = Math.floor(msg.selisih / (1000 * 60 * 60 * 24));


    msg.jamnye = Math.floor(msg.selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));


    msg.menitnye = Math.floor(msg.selisih % (1000 * 60 * 60) / (1000 * 60));


    msg.detiknye = Math.floor(msg.selisih % (1000 * 60) / (1000));
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//    
    
 
  client.poll = async (Name, optionsName, options) => {
    var pollCreation = generateWAMessageFromContent(from, proto.Message.fromObject({
            "pollCreationMessage": {
              "name": Name, 
               "options": optionsName,
              "selectableOptionsCount": 5
            }
          }), options)
            client.relayMessage(from, pollCreation.message, { messageId: pollCreation.key.id })
   }
  msg.templateButon5IMG = async (jid , text = '' , footer = '', img, button = [], options = {}) => {
        let message = await prepareWAMessageMedia({ 
                       image: img 
                      }, { 
                       upload: 
                       client.waUploadToServer 
                      })
        let template = generateWAMessageFromContent(jid, proto.Message.fromObject({
         templateMessage: {
         hydratedTemplate: {
         imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": button
              }
             }
           }), 
          options

        )
        client.relayMessage(jid, template.message, { messageId: template.key.id })
      }   
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//      
      
      client.typeMediaUrl = async (url) => {
         let mime = '';
         let res = await axios.head(url)
          mime = res.headers['content-type']
          console.log(mime)
          if (mime.split("/")[1] === "gif") { return `video` 
          }
          if(mime === "application/pdf"){ return `document`
          }
          if(mime.split("/")[0] === "image"){ return `image`
          }
          if(mime.split("/")[0] === "video"){ return `video`
          }
          if(mime.split("/")[0] === "audio"){ return `audio`
          }           
        }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//             
  
                     client.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
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
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//
                    
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                   
                       client.generateProfilePicture = async (buffer) => {
                             const jimpread = await jimp.read(buffer);
                             const result = jimpread.getWidth() > jimpread.getHeight() ? jimpread.resize(550, jimp.AUTO) : jimpread.resize(jimp.AUTO, 650)
                             let jump = await jimp.read(await result.getBufferAsync(jimp.MIME_JPEG));
                              return {
                                 bufferzzz: await result.getBufferAsync(jimp.MIME_JPEG)
                               }
                       }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                                          
                      client.parseMention = async(text) => {
                            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
                      }
 //*------------------------------------------------------------------------------------------------------------------------------------------------------------------*//                                         
                      client.sendButtonMessage = async(ID, buttonId, displaytext, text, footer, options) => {
                       let buttons = [{  buttonId: buttonId, buttonText: { displayText: displaytext }, type: 1}]
                       let buttonMessage = {text: text,footer: footer,buttons: buttons,headerType: 4 }
                        client.sendMessage(ID, buttonMessage, options)
                    }
          client.appenTextMessage = async(text, chatUpdate) => {
        let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
            userJid: client.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        client.ev.emit('messages.upsert', msg)
  }

}
//detect
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.yellow(`New ${__filename}`))
	delete require.cache[file]
	require(file)
})
