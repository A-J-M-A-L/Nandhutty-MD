require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')

const speedofbot = require("performance-now")
const fetch = require('node-fetch')


//-[thumb]\\

let alfa = fs.readFileSync('./lib/alfa.jpg')

//-[database]-\\

let antilink = JSON.parse(fs.readFileSync('./antilink.json'))





// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []












 let icon = '✩'
 let greetings = 'hey'
 let thumb = fs.readFileSync ('./lib/alfa.jpg')
 let gowner = 'ＡＬＩＥＮ ＡＬＦＡ'
 let wm = 'ＡＬＩＥＮ ＡＬＦＡ'
 let developerName = 'ᴀʟɪᴇɴ ᴀʟꜰᴀ'
 let developerNo = '9383400679'
 let gitpic = fetch('https://avatars.githubusercontent.com/u/64305844?v=4')
 let template = generateWAMessageFromContent
 let timestamp = speed()
 let latensi = speed() - timestamp
 let listicon = '✩'
                
                
                
                
                
                
                
                
                	
module.exports = hisoka = async (hisoka, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await hisoka.decodeJid(hisoka.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)

	
//-[gc]
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
//════════[runtime]═════════//
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
	
//-[target]

/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
  °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ 𝙀𝙓𝙏𝙍𝘼 𝙈𝙊𝘿𝙀𝘿 𝙊𝙍 𝘼𝘿𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°

  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 
  
  
const listmsg = (from, title, desc, list) => { let po = hisoka.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `ＡＬＩＥＮ ＡＬＦＡ`,"listType": "SINGLE_SELECT","sections": list}}, {})
	return hisoka.relayWAMessage(po, {waitForAck: true })}


const reply = (teks) => {hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `---𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼---`,"body": `ꜱᴜʙꜱᴄʀɪʙᴇ ᴛᴏ ᴍʏ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./lib/alfa.jpg`),"sourceUrl": "https://www.youtube.com/c/hisoka"}}}, { quoted: m})}
        

const replay = (teks) => {hisoka.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `---𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼---`,"body": ` ꜰᴏʟʟᴏᴡ ᴏɴ ɢɪᴛʜᴜʙ`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": `${gitpic}`,"sourceUrl": "https://www.instagram.com/_the_soul_rider_/"}}}, { quoted: m})}
        
        
const veri = {"key": { "participant": '0@s.whatsapp.net', "remoteJid": '919383400679-1614953337@g.us' }, "message": {"orderMessage": {"itemCount": 2022, "status": 999, "thumbnail": await (await fetch('https://avatars.githubusercontent.com/u/64305844?v=4')).buffer(), "surface": 999, "message": `${icon}ＡＬＩＥＮ  ＡＬＦＡ`, "orderTitle": 'Alien-Alfa', "sellerJid": '0@s.whatsapp.net'}}}


const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${greetings} ${pushname}`, orderTitle: `${greetings} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}


const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${greetings} ${pushname}`, jpegThumbnail: thumb }}}


const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${greetings} ${pushname}`, "h": `${greetings} ${pushname}`, 'duration': '99999', 'caption': `${greetings} ${pushname}`, 'jpegThumbnail': thumb }}}


const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}


const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${greetings} ${pushname}`, "h": `${greetings} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${greetings} ${pushname}`, 'jpegThumbnail': thumb }}}


const textImg = (teks) => { return hisoka.sendMessage(m.chat, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./lib/alfa.jpg')})}


const fakeitem = (teks) => { hisoka.sendMessage(m.chat, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(m.chat ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/Alfa.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${greetings} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
   
        
/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
  °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ 𝙀𝙓𝙏𝙍𝘼 𝙈𝙊𝘿𝙀𝘿 𝙊𝙍 𝘼𝘿𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°

  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 
  
  
  
  
  
          
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
                if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
                if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('wame' in chats)) chats.wame = false
             } else global.db.data.chats[m.chat] = {
                mute: false,
                wame: false,
        }
        } catch (err) {
            console.error(err)
        }
	    

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }

//[push msg to console & autoread]\\

        if (m.message) {
            hisoka.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        

	
//-[Antilink]-

	if (isAntiLink) 
if (budy.includes('https://chat.whatsapp.com/')) {
               if (!m.key.fromMe) {
               reply('*ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ*\nWow, You naughty, this group has been installed with Antilink, OK?..,\nGood Bye To You..👋🏻')
               let sianj = m.sender
               await hisoka.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
               }
	  }
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ᴀɴᴛɪ ʟɪɴᴋ 」\n\nʏᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ᴅᴇᴛᴇᴄᴛᴇᴅ ꜱᴇɴᴅɪɴɢ ᴀ ɢʀᴏᴜᴘ ʟɪɴᴋ, ꜱᴏʀʀʏ ʏᴏᴜ ᴡɪʟʟ ʙᴇ ᴋɪᴄᴋᴇᴅ!`)
        if (!isBotAdmins) return m.reply(`ᴇʜʜ ɪ ᴀᴍ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ (ᴛ_ᴛ)`)
        let gclink = (`https://wa.me/`)
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`ᴜʜ ꜱᴏʀʀʏ ɪᴛ ᴅɪᴅɴ'ᴛ ʜᴀᴘᴘᴇɴ, ʙᴇᴄᴀᴜꜱᴇ ʏᴏᴜ ꜱᴇɴᴛ ᴛʜᴇ ʟɪɴᴋ ᴛᴏ ᴛʜɪꜱ ɢʀᴏᴜᴘ`)
        if (isAdmins) return reply(`ᴇʜʜ ꜱᴏʀʀʏ ʏᴏᴜ ᴀʀᴇ ᴀɴ ᴀᴅᴍɪɴ`)
        if (isCreator) return reply(`ᴇʜʜ ꜱᴏʀʀʏ ʏᴏᴜ'ʀᴇ ᴛʜᴇ ᴏᴡɴᴇʀ ᴏꜰ ᴍʏ ʙᴏᴛ`)
        hisoka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        
        
        let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
//-[mute chat]-\\

      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//-[write database every 1min]-\\

	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

//-[reset limit every 12hrs]-\\


        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
	    
//-[respond cmd with media]-\\

        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
			        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: hisoka.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, hisoka.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        hisoka.ev.emit('messages.upsert', msg)
        }
	    





















	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            hisoka.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess the Song' }, type: 1 }], `🎮 Guess the Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, hisoka.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban Salah!*')
        }
        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, hisoka.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Guess the word' }, type: 1 }], `🎮 Guess the word 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, hisoka.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }
        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess rice cake' }, type: 1 }], `🎮 Guess rice cake 🎮\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, hisoka.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }
        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess the Sentence' }, type: 1 }], `🎮 Guess the Sentence 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, hisoka.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }
        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess the Lyrics' }, type: 1 }], `🎮 Guess the Lyrics 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, hisoka.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, hisoka.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong answer!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[ᴅᴇʙᴜɢ]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'ɢᴀᴍᴇ ʜᴀꜱ ᴇɴᴅᴇᴅ',
	    '-2': 'ɪɴᴠᴀʟɪᴅ',
	    '-1': 'ɪɴᴠᴀʟɪᴅ ᴘᴏꜱɪᴛɪᴏɴ',
	    0: 'ɪɴᴠᴀʟɪᴅ ᴘᴏꜱɪᴛɪᴏɴ',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} ᴡɪɴ!` : isTie ? `ɢᴀᴍᴇ ᴏᴠᴇʀ` : `ᴛᴜʀɴ ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
ᴜꜱᴇ *ꜱᴋɪᴘ* ᴛᴏ ꜱᴜʀʀᴇɴᴅᴇʀ ᴀɴᴅ ᴀᴅᴍɪᴛ ᴅᴇꜰᴇᴀᴛ`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
        //Suit PvP                    
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    hisoka.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} ʀᴇᴊᴇᴄᴛ ᴛʜᴇ ꜱᴜɪᴛ, ᴛʜᴇ ꜱᴜɪᴛ ɪꜱ ᴄᴀɴᴄᴇʟᴇᴅ`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    
	    
	    		    let buttons9 = [
                        {buttonId: `Rock`, buttonText: {displayText: 'Rock'}, type: 1},
                        {buttonId: `Paper`, buttonText: {displayText: 'Paper'}, type: 1},
                        {buttonId: `Scissors`, buttonText: {displayText: 'Scissors'}, type: 1}
                    ]
                    
                    
	    hisoka.sendText(m.chat, `ꜱᴜɪᴛ ʜᴀꜱ ʙᴇᴇɴ ꜱᴇɴᴛ ᴛᴏ ᴄʜᴀᴛ
@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}
ᴘʟᴇᴀꜱᴇ ᴄʜᴏᴏꜱᴇ ᴀ ꜱᴜɪᴛ ɪɴ ᴛʜᴇ ʀᴇꜱᴘᴇᴄᴛɪᴠᴇ ᴄʜᴀᴛ"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })


	    //if (!roof.pilih) hisoka.sendText(roof.p, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂️`, buttons, m)
	    
	    
	    if (!roof.pilih) hisoka.sendButtonText(roof.p, buttons9, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂`, hisoka.user.name, m)
	    
	    
	    //if (!roof.pilih2) hisoka.sendText(roof.p2, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂️`, buttons, m)
	    
	    
	    if (!roof.pilih2) hisoka.sendButtonText(roof.p2, buttons9, `ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ \n\nʀᴏᴄᴋ🗿\nᴘᴀᴘᴇʀ📄\nꜱᴄɪꜱꜱᴏʀꜱ✂`, hisoka.user.name, m)
	    
	    
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) hisoka.sendText(m.chat, `ʙᴏᴛʜ ᴘʟᴀʏᴇʀꜱ ʜᴀᴠᴇ ɴᴏ ɪɴᴛᴇɴᴛɪᴏɴ ᴏꜰ ᴘʟᴀʏɪɴɢ,\nꜱᴜɪᴛ ɪꜱ ᴄᴀɴᴄᴇʟʟᴇᴅ`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hisoka.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} ᴅᴏɴ'ᴛ ᴄʜᴏᴏꜱᴇ ꜱᴜɪᴛ, ɢᴀᴍᴇ ᴏᴠᴇʀ`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) hisoka.sendText(roof.p2, '_Your opponent has chosen_\nNow its your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) hisoka.sendText(roof.p, '_Your opponent has chosen_\nNow its your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hisoka.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERI' : ''}
@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (global.db.data.users[m.sender].afkTime > -1) {
            let user = global.global.db.data.users[m.sender]
            reply(`
You quit AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//
			
	    case 'afk': {
                let user = global.global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//
			
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply(`Partners found!
            
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}`)
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
ᴡᴀɪᴛɪɴɢ @${room.game.currentTurn.split('@')[0]}
ᴡʜᴇɴ *ꜱᴋɪᴘ* ᴛᴏ ꜱᴜʀʀᴇɴᴅᴇʀ ᴀɴᴅ ᴀᴅᴍɪᴛ ᴅᴇꜰᴇᴀᴛ`
            if (room.x !== room.o) await hisoka.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await hisoka.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('ᴡᴀɪᴛɪɴɢ ꜰᴏʀ ᴘᴀʀᴛɴᴇʀ' + (text ? ` ᴛʏᴘᴇ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʙᴇʟᴏᴡ ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            hisoka.sendText(m.chat, `ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ ᴅᴇʟᴇᴛᴇ ᴛʜᴇ ᴛɪᴄᴛᴀᴄᴛᴏᴇ ꜱᴇꜱꜱɪᴏɴ`, m)
            } else if (!this.game) {
            reply(`ꜱᴇꜱꜱɪᴏɴ ᴛɪᴄᴛᴀᴄᴛᴏᴇ🎮 ᴅᴏᴇꜱ ɴᴏᴛ ᴇxɪꜱᴛ`)
            } else throw '?'
            } catch (e) {
            reply('rusak')
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let buttons8 = [
                 {buttonId: `accept`, buttonText: {displayText: 'ᴀᴄᴄᴇᴘᴛ'}, type: 1},
                 {buttonId: `reject`, buttonText: {displayText: 'ʀᴇᴊᴇᴄᴛ'}, type: 1}
						   ]
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`ᴄᴏᴍᴘʟᴇᴛᴇ ʏᴏᴜʀ ᴘʀᴇᴠɪᴏᴜꜱ ꜱᴜɪᴛ`)
	    if (m.mentionedJid[0] === m.sender) return reply(`ᴄᴀɴ ɴᴏᴛ ᴘʟᴀʏ ᴡɪᴛʜ ʏᴏᴜʀꜱᴇʟꜰ !`)
            if (!m.mentionedJid[0]) return reply(`_ᴡʜᴏ ᴅᴏ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ʙᴇ ᴀʙᴏᴜᴛ?_\nᴛᴀɢ ᴛʜᴇ ᴘᴇʀꜱᴏɴ..\n\nᴇxᴀᴍᴘʟᴇ : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `ᴛʜᴇ ᴘᴇʀꜱᴏɴ ʏᴏᴜ ᴀʀᴇ ᴄʜᴀʟʟᴇɴɢɪɴɢ ɪꜱ ᴘʟᴀʏɪɴɢ ꜱᴜɪᴛ ᴡɪᴛʜ ꜱᴏᴍᴇᴏɴᴇ ᴇʟꜱᴇ:(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} ᴄʜᴀʟʟᴇɴɢɪɴɢ @${m.mentionedJid[0].split`@`[0]} ᴛᴏ ᴘʟᴀʏ ꜱᴜɪᴛ
ᴘʟᴇᴀꜱᴇ @${m.mentionedJid[0].split`@`[0]} ᴛᴏ ᴛʏᴘᴇ ᴀᴄᴄᴇᴘᴛ/ʀᴇᴊᴇᴄᴛ`
            this.suit[id] = {
            chat: await hisoka.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
	        chat: await hisoka.sendButtonText(m.chat, buttons8, `ᴀᴄᴄᴇᴘᴛ/ʀᴇᴊᴇᴄᴛ`, hisoka.user.name, m),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) hisoka.sendText(m.chat, `_ꜱᴜɪᴛ ᴛɪᴍᴇ ᴏᴜᴛ_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
	//    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
        //        hisoka.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/74fd634010128be37972c.jpg' }, caption: `*Hai Kak ${m.pushName}*\n\n Bot Rental Prices\n${icon} 13k Per Group via E-Walet 1 Month\n${icon} 18k via pulsa 1 Month\n\n Premium Price Bot\n${icon} 8k per User 1 bulan\n\nPayment can be via Paypal/link aja/pulsa\n\nFor more details, you can chat with the owner\nhttps://wa.me/447405935355 (Owner)\n\nDonate For Me : \n\n${icon} Paypal : https://www.paypal.me/Cakhaho\n${icon} Saweria : https://saweria.co/Alien-Alfa` }, { quoted: m })
        //    }
        //    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'sc': {
                anu = `*ᴀʟɪᴇɴ-ᴀʟꜰᴀ-ʙᴏᴛ*\n\n• 𝐘𝐨𝐮𝐓𝐮𝐛𝐞: https://youtube.com/c/hisoka\n\n• 𝐆𝐢𝐭𝐇𝐮𝐛: https://github.com/Alien-Alfa/hisokaBot_\n\n• 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: https://www.instagram.com/_the_soul_rider__ \n\n• 𝐏𝐫𝐨𝐟𝐢𝐥𝐞: https://alien-alfa.github.io_\n\n 𝙋𝙡𝙚𝙖𝙨𝙚 𝘿𝙤 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝙖𝙣𝙙 𝙁𝙤𝙡𝙡𝙤𝙬 𝙢𝙚 𝙤𝙣 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢. `
           
             const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }

            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//
			
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('ᴛʜᴇʀᴇ ᴀʀᴇ ꜱᴛɪʟʟ ᴜɴꜰɪɴɪꜱʜᴇᴅ ꜱᴇꜱꜱɪᴏɴꜱ!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*ᴀɴꜱᴡᴇʀ ᴛʜᴇ ꜰᴏʟʟᴏᴡɪɴɢ Qᴜᴇꜱᴛɪᴏɴꜱ :*\n${random.soal}\n\nᴛʜᴇʀᴇ ɪꜱ *${random.jawaban.length}* ᴀɴꜱᴡᴇʀ ${random.jawaban.find(v => v.includes(' ')) ? `(ꜱᴏᴍᴇ ᴀɴꜱᴡᴇʀꜱ ʜᴀᴠᴇ ꜱᴘᴀᴄᴇꜱ)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await hisoka.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `ꜱᴇɴᴅ/ʀᴇᴘʟʏ ᴛᴇxᴛ ᴡɪᴛʜ ᴄᴀᴘᴛɪᴏɴ ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
			
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
			
    /*        case 'guess': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await hisoka.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    hisoka.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    hisoka.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    hisoka.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Guess Lontong' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, hisoka.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
	  
            break
	    
	    
	    */
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//
			
			
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                hisoka.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//
			
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'soulmate', buttonText: { displayText: 'my soulmate' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'invented': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee Who Made💖 Don't forget the tax🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'invented', buttonText: { displayText: 'my soulmate' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif has been successfully changed to\n\n${icon} ᴘᴀᴄᴋɴᴀᴍᴇ : ${global.packname}\n${icon} ᴀᴜᴛʜᴏʀ : ${global.author}`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
          case 'pp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
           case 'setppgroup': case 'setppgrup': case 'ppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *ᴛᴀɢ ᴀʟʟ* 〙✪══
 
 ➲ *Reason : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                teks += `${icon} @${mem.id.split('@')[0]}\n`
                }
                hisoka.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
                case 'hidetag': case 'tag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            hisoka.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		case 'style': case 'styletext': case 'fancy': {
	        if (!isPremium && global.global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
		global.db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${icon} *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete vote`
            if (!text) throw `Enter the Reason for Vote, Example: *${prefix + command} This Is The Best Bot Ever*`
            reply(`Vote starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - for checking vote\n*${prefix}deletevote * - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*
*ʀᴇᴀꜱᴏɴ:* ${vote[m.chat][0]}
┌〔 ᴜᴘᴠᴏᴛᴇ 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────
┌〔 ᴅᴇᴠᴏᴛᴇ 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────
*${prefix}deletevote* - to delete vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ᴜᴘᴠᴏᴛᴇ'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'ᴅᴇᴠᴏᴛᴇ'}, type: 1}
]
            let buttonMessageVote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            hisoka.sendMessage(m.chat, buttonMessageVote)
	    }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'ʏᴏᴜ ʜᴀᴠᴇ ᴠᴏᴛᴇᴅ'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*
*ʀᴇᴀꜱᴏɴ:* ${vote[m.chat][0]}

*${prefix}deletevote* - to delete vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ᴜᴘᴠᴏᴛᴇ'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'ᴅᴇᴠᴏᴛᴇ'}, type: 1}
            ]
            let buttonMessageUpvote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            hisoka.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 ᴠᴏᴛᴇ 」*
*ʀᴇᴀꜱᴏɴ:* ${vote[m.chat][0]}

*${prefix}deletevote* - to delete vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'ᴜᴘᴠᴏᴛᴇ'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'ᴅᴇᴠᴏᴛᴇ'}, type: 1}
            ]
            let buttonMessageDevote = {
                text: teks_vote,
                footer: hisoka.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            hisoka.sendMessage(m.chat, buttonMessageDevote)
	}
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
                 
case 'cekvote': case 'ckvote': case 'voteres': case 'resvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 ᴠᴏᴛᴇ 」*
*ʀᴇᴀꜱᴏɴ:* ${vote[m.chat][0]}
┌〔 ᴜᴘᴠᴏᴛᴇ 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 ᴅᴇᴠᴏᴛᴇ 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}unvote* - to delete votes
©${hisoka.user.id}
`
hisoka.sendTextWithMentions(m.chat, teks_vote, m)
break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            reply('Successfully Delete Vote Session In In Group')
	    }
            break
						
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await hisoka.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await hisoka.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'ᴏᴘᴇɴ' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'ᴄʟᴏꜱᴇ' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Edit Info`, hisoka.user.name, m)
            }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'linkgroup': case 'linkgc': case 'invite': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the enable/disable values'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Hey I didnt Sent That!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text man an\Example : ${prefix + command} fatih-san`
                let getGroups = await hisoka.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} seck`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(i, txt, hisoka.user.name, global.thumb, btn)
                    }
                replay(`Successfully Sending Broadcast To ${anu.length} Group`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text man an\Example : ${prefix + command} hi all`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Sending Broadcast To ${anu.length} Chat\nDone Time ${anu.length * 1.5} seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      hisoka.send5ButImg(yoi, txt, hisoka.user.name, global.thumb, btn)
		}
		reply('ʙʀᴏᴀᴅᴄᴀꜱᴛ ꜱᴜᴄᴄᴇꜱꜱ')
            }
            break
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
            case 'bcalll': {
                if (!isCreator) throw mess.owner
				if (!m.quoted) return m.reply("*ＡＬＩＥＮ ＡＬＦＡ*\n\n*Reply to a Message*")

					let buff1 = fs.readFileSync('./lib/alfa.jpg')
					let buff2 = fs.readFileSync('./lib/alfa.jpg')
					let options = {}
					let media = await hisoka.downloadAndSaveMediaMessage(quoted)
					let anu = await store.chats.all().map(v => v.id)
					reply(`Sending Broadcast To ${anu.length} Chat\nDone Time ${anu.length * 1.5} seconds`)
				for (let yoi of anu) {
					
					
					
					
					
					
					
					
 /*       let linkPreview = {
               head: "𝕮𝖞𝖇𝖊𝖗 𝕽𝖎𝖈𝖍𝖚",
               body: "★彡[𝓑𝓡𝓞𝓐𝓓𝓒𝓐𝓢𝓣]彡★",
               mediaType: 2, //3 for video
               thumbnail: buff2.buffer,
               sourceUrl: "https://bit.ly/3D4Y812",
                }
                
         
        let quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
            message: {
                "imageMessage": {
                    "jpegThumbnail": buff1.buffer,
                    "caption": "ＡＬＩＥＮ ＡＬＦＡ"
                }
            }
        } */
        
hisoka.sendMessage(yoi, { audio: media, contextInfo:{"linkPreview": {"title": `---𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼---`,"body": `ꜱᴜʙꜱᴄʀɪʙᴇ ᴛᴏ ᴍʏ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ`, "mediaType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./lib/alfa.jpg`),"sourceUrl": "https://www.youtube.com/c/hisoka"}}}, { quoted: m})

//hisoka.sendMessage(yoi, { audio: media, mimetype: 'audio/mpeg' }, { quoted : m })



			            } }
            break
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'infochat': {
                if (!m.quoted) reply('Reply Message')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `${icon} @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━${icon} *ᴛɪᴍᴇ :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${icon} *ꜱᴛᴀᴛᴜꜱ :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                hisoka.sendTextWithMentions(m.chat, teks, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('ʀᴇᴘʟʏ ᴍᴇꜱꜱᴀɢᴇ!!')
		let wokwol = await hisoka.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('ᴛʜᴇ ᴍᴇꜱꜱᴀɢᴇ ʏᴏᴜ ʀᴇᴘʟɪᴇᴅ ᴅᴏᴇꜱ ɴᴏᴛ ᴄᴏɴᴛᴀɪɴ ᴀ ʀᴇᴘʟʏ')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *ɴᴀᴍᴇ :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *ʟɪꜱᴛ ɢʀᴏᴜᴘ ᴄʜᴀᴛ*\n\nᴛᴏᴛᴀʟ ɢʀᴏᴜᴘ : ${anu.length} ɢʀᴏᴜᴘ\n\n`
                 for (let i of anu) {
                     let metadata = await hisoka.groupMetadata(i)
                     teks += `⬡ *ɴᴀᴍᴇ :* ${metadata.subject}\n⬡ *ᴏᴡɴᴇʀ :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 hisoka.sendTextWithMentions(m.chat, teks, m)
             }
             break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
             case 'listonline': case 'liston': case 'online': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    hisoka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('10 seconds max!')
                let media = await quoted.download()
                let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
            case 'binary': {
            if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'emojimix': case 'emix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'toimage': case 'toimg': case 'photo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'tomp4': case 'tovideo': case 'mp4': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'toaud': case 'toaudio': case 'mp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'tomp3': case 'doc': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want To Answer MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Answer MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want To Answer MP3 With Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            hisoka.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Doc By ${gowner}}.mp3`}, { quoted : m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'tovn': case 'toptt': case 'unvoice': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio You Want to Do VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio You Want to Do VN With Caption ${prefix + command}`
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            hisoka.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'togif': case 'gif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'tourl': case 'url': {
                reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'imagenobg': case 'removebg': case 'remove-bg': case 'rmbg': {
	    if (!quoted) throw `Kirireply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirireply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirireply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await hisoka.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    hisoka.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `𒆜 ɴᴏ : ${no++}\n𒆜 ᴛʏᴘᴇ : ${i.type}\n𒆜 ᴠɪᴅᴇᴏ ɪᴅ : ${i.videoId}\n𒆜 ᴛɪᴛʟᴇ : ${i.title}\n𒆜 ᴠɪᴇᴡꜱ : ${i.views}\n𒆜 Duration : ${i.timestamp}\n𒆜 ᴜᴘʟᴏᴀᴅ ᴀᴛ : ${i.ago}\n𒆜 ᴀᴜᴛʜᴏʀ : ${i.author.name}\n𒆜 ᴜʀʟ : ${i.url}\n\n─────────────────\n\n`
                }
                hisoka.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `${icon} *ᴛɪᴛʟᴇ* : ${g.title}\n`
                teks += `${icon} *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ* : ${g.snippet}\n`
                teks += `${icon} *ʟɪɴᴋ* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'gimage': case 'image': case 'img': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'ɴᴇxᴛ ɪᴍᴀɢᴇ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 ɢɪᴍᴀɢᴇ ꜱᴇᴀʀᴄʜ 」-------*
 *Qᴜᴇʀʏ* : ${text}
 *ᴍᴇᴅɪᴀ ᴜʀʟ* : ${images}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► ᴠɪᴅᴇᴏ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴇxᴛ : Search
${icon} ɪᴅ : ${anu.videoId}
${icon} ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
${icon} ᴠɪᴇᴡᴇʀꜱ : ${anu.views}
${icon} ᴜᴘʟᴏᴀᴅ At : ${anu.ago}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}
${icon} ᴄʜᴀɴɴᴇʟ : ${anu.author.url}
${icon} ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${anu.description}
${icon} ᴜʀʟ : ${anu.url}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	    	    case 'song':  {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'ʜᴇᴀʀ ᴛʜɪꜱ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴇxᴛ : Search
${icon} ɪᴅ : ${anu.videoId}
${icon} ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
${icon} ᴠɪᴇᴡᴇʀꜱ : ${anu.views}
${icon} ᴜᴘʟᴏᴀᴅ At : ${anu.ago}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}
${icon} ᴄʜᴀɴɴᴇʟ : ${anu.author.url}
${icon} ᴜʀʟ : ${anu.url}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

		
		/*case 'song': {
		    
		let yts = require("yt-search")
		if (!text) throw `Example : ${prefix + command} story wa anime`
		let search = await yts(text)
		let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		
let buttons = [
                    {buttonId: `ytmp3 ${isUrl(text)}`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ'}, type: 1},
                    {buttonId: `ytmp4 ${isUrl(text)}`, buttonText: {displayText: '► ᴠɪᴅᴇᴏ'}, type: 1}
                ]
		
		let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(anu.url, quality)
		
		
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `${icon} ᴛɪᴛʟᴇ : ${media.title}\n${icon} ꜰɪʟᴇ ꜱɪᴢᴇ : ${media.filesizeF}\n${icon} ᴜʀʟ : ${isUrl(text)}\n${icon} ᴇxᴛ : ᴍᴘ3\n${icon} ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${args[1] || '128kbps'}`, m)
		hisoka.sendMessage(m.chat, {document: {audio: { url: media.dl_link }}, mimetype: 'audio/mpeg', fileName: `${media.title} By ${gowner}}.mp3`}, { quoted : m })
	//hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted : m })
		          }
            break. */
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//
			
		case 'ytmp3': case 'ytaudio': case 'yta': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `${icon} ᴛɪᴛʟᴇ : ${media.title}\n${icon} ꜰɪʟᴇ ꜱɪᴢᴇ : ${media.filesizeF}\n${icon} ᴜʀʟ : ${isUrl(text)}\n${icon} ᴇxᴛ : ᴍᴘ3\n${icon} ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${args[1] || '128kbps'}`, m)
          //    hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`, contextInfo:{"externalAdReply": {"title": `---A L I E N  A L F A---`,"body": ` Subscribe`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./lib/alfa.jpg`),"sourceUrl": "https:"}}}, { quoted: m})

            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	
	
	    case 'video':  {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]            
            
            let template = await generateWAMessageFromContent




(m.chat, proto.Message.fromObject({
                listMessage : {
                    title: `ꜱᴇʟᴇᴄᴛ ᴛʜᴇ Qᴜᴀʟɪᴛʏ ꜰᴏ ᴛʜᴇ ᴠɪᴅᴇᴏ`,
                    description: `${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
${icon} ᴜᴘʟᴏᴀᴅ At : ${anu.ago}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}`,
                    buttonText: "Menu",
                    footerText: `*${wm}*`,
                    listType: "SINGLE_SELECT",
                    sections: [
{
"title": `ＡＬＩＥＮ ＡＬＦＡ`,
rows: [
{
"title": "► 144p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 144p`
},
{
"title": "► 240p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 240p`
},
{
"title": "► 360p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 360p`
},
{
"title": "► 480p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 480p`
},
{
"title": "► 720p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 720p`
},
{
"title": "► 1080p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 1080p`
},
{
"title": "► 1440p",
"description": `${anu.title}`,
"rowId": `ytmp4 ${anu.url} 1440p`
}]
}],
          listType: 1
                }
            }), {})
            
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            
            
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸?? 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            
/*					case 'video': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		
				anu = `
${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴇxᴛ : Search
${icon} ɪᴅ : ${anu.videoId}
${icon} ᴅᴜʀᴀᴛɪᴏɴ : ${anu.timestamp}
${icon} ᴠɪᴇᴡᴇʀꜱ : ${anu.views}
${icon} ᴜᴘʟᴏᴀᴅ At : ${anu.ago}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}
${icon} ᴄʜᴀɴɴᴇʟ : ${anu.author.url}
${icon} ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${anu.description}
${icon} ᴜʀʟ : ${anu.url}`

                            let btn = [{
                                urlButton: {
                                    displayText: 'ᴡᴀᴛᴄʜ ᴏɴ ʏᴏᴜᴛᴜʙᴇ',
                                    url: '${anu.url}'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '► 480p',
                                    id: 'ytmp4 ${anu.url} 480p'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '► 720p',
                                    id: 'ytmp4 ${anu.url} 720p'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '► 1080p',
                                    id: 'ytmp4 ${anu.url} 1080p'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, hisoka.user.name, { url: anu.thumbnail }, btn)
                     }
                     
                     
            break*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//
			
			
               case 'ytmp4': case 'ytvideo': case 'ytv': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                
                
 
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${icon} ᴛɪᴛʟᴇ : ${media.title}\n${icon} ꜰɪʟᴇ ꜱɪᴢᴇ : ${media.filesizeF}\n${icon} ᴜʀʟ : ${isUrl(text)}\n${icon} ᴇxᴛ : ᴍᴘ3\n${icon} ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${args[1] || '360p'}`, contextInfo:{"externalAdReply": {"title": `---A L I E N  A L F A---`,"body": ` Subscribe`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./lib/alfa.jpg`),"sourceUrl": "https:"}}}, { quoted: m})
            }
            break
				
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                hisoka.sendImage(m.chat, media.thumb, `${icon} ᴛɪᴛʟᴇ : ${media.title}\n${icon} ꜰɪʟᴇ ꜱɪᴢᴇ : ${media.filesizeF}\n${icon} ᴜʀʟ : ${urls[text - 1]}\n${icon} ᴇxᴛ : ᴍᴘ3\n${icon} ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${args[1] || '128kbps'}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `ᴄᴀɴ ᴏɴʟʏ ʀᴇᴘʟʏ ᴛᴏ ᴍᴇꜱꜱᴀɢᴇꜱ ꜰʀᴏᴍ ʙᴏᴛꜱ`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `ᴍᴀʏʙᴇ ᴛʜᴇ ᴍᴇꜱꜱᴀɢᴇ ʏᴏᴜ ʀᴇᴘʟɪᴇᴅ ᴅᴏᴇꜱ ɴᴏᴛ ᴄᴏɴᴛᴀɪɴ ᴛʜᴇ ʏᴛꜱᴇᴀʀᴄʜ ʀᴇꜱᴜʟᴛ`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                hisoka.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', ꜰɪʟᴇɴᴀᴍᴇ: `${media.title}.mp4`, caption: `${icon} ᴛɪᴛʟᴇ : ${media.title}\n${icon} ꜰɪʟᴇ ꜱɪᴢᴇ : ${media.filesizeF}\n${icon} ᴜʀʟ : ${urls[text - 1]}\n${icon}ᴇxᴛ : ᴍᴘ3\n${icon} ʀᴇꜱᴏʟᴜᴛɪᴏɴ : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '${icon} ᴍᴇᴅɪᴀ ᴜʀʟ : '+result }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
			
			            case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
                reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'ＡＬＩＥＮ ＡＬＦＡ\nGenerate Random ' + command }, { quoted: m })
            }
            break
			
			
        /*    case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
		    
		    let anu = await fetchURL(api('zenz', '/api/random/'+command, {}, 'apikey'))
		    let txt = 'Generate Random ${command}'
			let btn = [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, hisoka.user.name, txt, btn, { quoted: m })
                     }
            break
			*/
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	    case 'couple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hisoka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'ɴᴇxᴛ ɪᴍᴀɢᴇ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ ʀᴀɴᴅᴏᴍ ᴄᴏꜰꜰᴇ`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'wallpaper': {
                if (!text) throw 'ᴇɴᴛᴇʀ Qᴜᴇʀʏ ᴛɪᴛʟᴇ'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'ɴᴇxᴛ ɪᴍᴀɢᴇ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${icon} ᴛɪᴛʟᴇ : ${result.title}\n${icon} ᴄᴀᴛᴇɢᴏʀʏ : ${result.type}\n${icon} ᴅᴇᴛᴀɪʟ : ${result.source}\n${icon} ᴍᴇᴅɪᴀ ᴜʀʟ : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'ɴᴇxᴛ ɪᴍᴀɢᴇ'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${icon} ᴛɪᴛʟᴇ : ${result.title}\n${icon} ꜱᴏᴜʀᴄᴇ : ${result.source}\n${icon} ᴍᴇᴅɪᴀ ᴜʀʟ : ${result.image}`,
                    footer: hisoka.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'motivation': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivation`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
			
			
		/*	
			
			
			
			
			
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                reply(mess.wait)
                hisoka.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 447405935355`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *Nomor HP :* ${anu.message.nomer_hp}\n${icon} *Angka Shuzi :* ${anu.message.angka_shuzi}\n${icon} *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n${icon} *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *Mimpi :* ${anu.message.mimpi}\n${icon} *Arti :* ${anu.message.arti}\n${icon} *Solusi :* ${anu.message.solusi}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} alfa, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ Anda :* ${anu.message.nama_anda.nama}\n${icon} *ʙᴏʀɴ Anda :* ${anu.message.nama_anda.tgl_ʙᴏʀɴ}\n${icon} *ɴᴀᴍᴇ Pasangan :* ${anu.message.nama_pasangan.nama}\n${icon} *ʙᴏʀɴ Pasangan :* ${anu.message.nama_pasangan.tgl_ʙᴏʀɴ}\n${icon} *Hasil :* ${anu.message.result}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} alfa, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ Anda :* ${anu.message.nama_anda.nama}\n${icon} *ʙᴏʀɴ Anda :* ${anu.message.nama_anda.tgl_ʙᴏʀɴ}\n${icon} *ɴᴀᴍᴇ Pasangan :* ${anu.message.nama_pasangan.nama}\n${icon} *ʙᴏʀɴ Pasangan :* ${anu.message.nama_pasangan.tgl_ʙᴏʀɴ}\n${icon} *Hasil :* ${anu.message.result}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} alfa, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ Suami :* ${anu.message.suami.nama}\n${icon} *ʙᴏʀɴ Suami :* ${anu.message.suami.tgl_ʙᴏʀɴ}\n${icon} *ɴᴀᴍᴇ Istri :* ${anu.message.istri.nama}\n${icon} *ʙᴏʀɴ Istri :* ${anu.message.istri.tgl_ʙᴏʀɴ}\n${icon} *Hasil :* ${anu.message.result}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} alfa, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ Anda :* ${anu.message.nama_anda.nama}\n${icon} *ʙᴏʀɴ Anda :* ${anu.message.nama_anda.tgl_ʙᴏʀɴ}\n${icon} *ɴᴀᴍᴇ Pasangan :* ${anu.message.nama_pasangan.nama}\n${icon} *ʙᴏʀɴ Pasangan :* ${anu.message.nama_pasangan.tgl_ʙᴏʀɴ}\n${icon} *Sisi Positif :* ${anu.message.sisi_positif}\n${icon} *Sisi Negatif :* ${anu.message.sisi_negatif}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} alfa Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ :* ${anu.message.nama}\n${icon} *Arti :* ${anu.message.arti}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} alfa, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ :* ${anu.message.nama}\n${icon} *ʙᴏʀɴ :* ${anu.message.tgl_ʙᴏʀɴ}\n${icon} *Life Path :* ${anu.message.life_path}\n${icon} *Destiny :* ${anu.message.destiny}\n${icon} *Destiny Desire :* ${anu.message.destiny_desire}\n${icon} *Personality :* ${anu.message.personality}\n${icon} *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'kecocokanpasangan': case 'cocokpasangan': case 'couple': {
                if (!text) throw `Example : ${prefix + command} alfa|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendImage(m.chat,  anu.message.gambar, `${icon} *ɴᴀᴍᴇ Anda :* ${anu.message.nama_anda}\n${icon} *ɴᴀᴍᴇ Pasangan :* ${anu.message.nama_pasangan}\n${icon} *Sisi Positif :* ${anu.message.sisi_positif}\n${icon} *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ??𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ᴅᴀᴛᴇ Pernikahan :* ${anu.message.tanggal}\n${icon} *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ʙᴏʀɴ :* ${anu.message.hari_ʙᴏʀɴ}\n${icon} *Usaha :* ${anu.message.usaha}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ʙᴏʀɴ :* ${anu.message.hari_ʙᴏʀɴ}\n${icon} *Rezeki :* ${anu.message.rejeki}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_ʙᴏʀɴ(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ʙᴏʀɴ :* ${anu.message.hari_ʙᴏʀɴ}\n${icon} *Pekerjaan :* ${anu.message.pekerjaan}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *Analisa :* ${anu.message.analisa}\n${icon} *Angka Akar :* ${anu.message.angka_akar}\n${icon} *Sifat :* ${anu.message.sifat}\n${icon} *Elemen :* ${anu.message.elemen}\n${icon} *Angka luck :* ${anu.message.angka_luck}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *Analisa :* ${anu.message.analisa}\n${icon} *Sektor :* ${anu.message.sektor}\n${icon} *Elemen :* ${anu.message.elemen}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendImage(m.chat, anu.message.image, `${icon} *ʙᴏʀɴ :* ${anu.message.tgl_ʙᴏʀɴ}\n${icon} *Simbol Tarot :* ${anu.message.simbol_tarot}\n${icon} *Arti :* ${anu.message.arti}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} alfa, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun ʙᴏʀɴ\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ :* ${anu.message.nama}\n${icon} *ʙᴏʀɴ :* ${anu.message.tahun_ʙᴏʀɴ}\n${icon} *Gender :* ${anu.message.jenis_kelamin}\n${icon} *Angka Kua :* ${anu.message.angka_kua}\n${icon} *Kelompok :* ${anu.message.kelompok}\n${icon} *Karakter :* ${anu.message.karakter}\n${icon} *Sektor Baik :* ${anu.message.sektor_baik}\n${icon} *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ʙᴏʀɴ :* ${anu.message.tgl_ʙᴏʀɴ}\n${icon} *Kala Tinantang :* ${anu.message.kala_tinantang}\n${icon} *Info :* ${anu.message.info}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ʙᴏʀɴ :* ${anu.message.tgl_ʙᴏʀɴ}\n${icon} *Hasil :* ${anu.message.result}\n${icon} *Info :* ${anu.message.info}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *Hari ʙᴏʀɴ :* ${anu.message.hari_ʙᴏʀɴ}\n${icon} *ᴅᴀᴛᴇ ʙᴏʀɴ :* ${anu.message.tgl_ʙᴏʀɴ}\n${icon} *Hari Naas :* ${anu.message.hari_naas}\n${icon} *Info :* ${anu.message.catatan}\n${icon} *Catatan :* ${anu.message.info}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *Hari ʙᴏʀɴ :* ${anu.message.hari_ʙᴏʀɴ}\n${icon} *ᴅᴀᴛᴇ ʙᴏʀɴ :* ${anu.message.tgl_ʙᴏʀɴ}\n${icon} *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *Hari ʙᴏʀɴ :* ${anu.message.hari_ʙᴏʀɴ}\n${icon} *ᴅᴀᴛᴇ ʙᴏʀɴ :* ${anu.message.tgl_ʙᴏʀɴ}\n${icon} *Arah Rezeki :* ${anu.message.arah_rejeki}\n${icon} *Catatan :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} alfa, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal ʙᴏʀɴ, bulan ʙᴏʀɴ, tahun ʙᴏʀɴ, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ :* ${anu.message.nama}\n${icon} *ʙᴏʀɴ :* ${anu.message.tgl_ʙᴏʀɴ}\n${icon} *ʏᴇᴀʀ ꜰᴏʀᴛᴜɴᴇ :* ${anu.message.peruntungan_tahun}\n${icon} *ʜᴀꜱɪʟ :* ${anu.message.result}\n${icon} *ᴄᴀᴛᴀᴛᴀɴ :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ᴅᴀᴛᴇ :* ${anu.message.tanggal}\n${icon} *ɴᴜᴍʙᴇʀ ᴏꜰ ɴᴇᴘᴛᴜɴᴇ :* ${anu.message.jumlah_neptu}\n${icon} *ᴅᴀʏ ᴄʜᴀʀᴀᴄᴛᴇʀ :* ${anu.message.watak_hari}\n${icon} *Naga Hari :* ${anu.message.naga_hari}\n${icon} *Jam Baik :* ${anu.message.jam_baik}\n${icon} *Watak Keʙᴏʀɴan :* ${anu.message.watak_keʙᴏʀɴan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'nature': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} alfa, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_ʙᴏʀɴ(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ :* ${anu.message.nama}\n${icon} *ʙᴏʀɴ :* ${anu.message.tgl_born}\n${icon} *ʟɪꜰᴇʟɪɴᴇ :* ${anu.message.garis_hidup}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'luck': {
                if (!text) throw `Example : ${prefix + command} alfa, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_luck(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ɴᴀᴍᴇ :* ${anu.message.nama}\n${icon} *ʙᴏʀɴ :* ${anu.message.tgl_born}\n${icon} *Hasil :* ${anu.message.result}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ᴅᴀᴛᴇ :* ${anu.message.tgl_memancing}\n${icon} *ʀᴇꜱᴜʟᴛꜱ :* ${anu.message.result}\n${icon} ɴᴏᴛᴇꜱ :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ʀᴇꜱᴜʟᴛꜱ :* ${anu.message.result}\n${icon} *ɴᴏᴛᴇꜱ :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
 
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()
                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ᴢᴏᴅɪᴀᴋ :* ${anu.message.zodiak}\n${icon} *ɴᴜᴍʙᴇʀ :* ${anu.message.nomor_luck}\n${icon} *ᴀʀᴏᴍᴀ :* ${anu.message.aroma_luck}\n${icon} *ᴘʟᴀɴᴇᴛ :* ${anu.message.planet_yang_mengitari}\n${icon} *ʙᴜɴɢᴀ :* ${anu.message.bunga_luck}\n${icon} *ᴄᴏʟᴏʀ :* ${anu.message.warna_luck}\n${icon} *ʙᴀᴛᴜ :* ${anu.message.batu_luck}\n${icon} *ᴇʟᴇᴍᴇɴᴛ :* ${anu.message.elemen_luck}\n${icon} *ᴢᴏᴅɪᴀᴄ ᴄᴏᴜᴘʟᴇ :* ${anu.message.pasangan_zodiak}\n${icon} *ɴᴏᴛᴇꜱ :* ${anu.message.catatan}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                hisoka.sendText(m.chat, `${icon} *ʀᴇꜱᴜʟᴛꜱ :* ${anu.message}`, m)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	    
	    
	    
	    
	    
	    
	    */
	    
	    
	    
	    
	    
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.global.db.data.users[m.sender].limit < 1) return reply('ʏᴏᴜʀ ᴅᴀɪʟʏ ʟɪᴍɪᴛ ʜᴀꜱ ᴇxᴘɪʀᴇᴅ')
                if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig alien.alfa`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    hisoka.sendMedia(m.chat, anu.caption.profile_hd, '', `${icon} ꜰᴜʟʟ ɴᴀᴍᴇ : ${anu.caption.full_name}\n${icon} ᴜꜱᴇʀ ɴᴀᴍᴇ : ${anu.caption.user_name}\n${icon} ɪᴅ ${anu.caption.user_id}\n${icon} ꜰᴏʟʟᴏᴡᴇʀꜱ : ${anu.caption.followers}\n${icon} ꜰᴏʟʟᴏᴡɪɴɢ : ${anu.caption.following}\n${icon} ʙᴜꜱꜱɪɴᴇꜱ : ${anu.caption.bussines}\n${icon} ᴘʀᴏꜰᴇꜱɪᴏɴᴀʟ : ${anu.caption.profesional}\n${icon} ᴠᴇʀɪꜰɪᴇᴅ : ${anu.caption.verified}\n${icon} ᴘʀɪᴠᴀᴛᴇ : ${anu.caption.private}\n${icon} ʙɪᴏ : ${anu.caption.biography}\n${icon} ʙɪᴏ ᴜʀʟ : ${anu.caption.bio_url}`, m)
		    global.db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`${icon} ɴᴀᴍᴇ : ${anu.name}\n${icon} ᴠᴇʀꜱɪᴏɴ : ${Object.keys(anu.versions)}\n${icon} ᴄʀᴇᴀᴛᴇᴅ : ${tanggal(anu.time.created)}\n${icon} ᴍᴏᴅɪꜰɪᴇᴅ : ${tanggal(anu.time.modified)}\n${icon} ᴍᴀɪɴᴛᴀɪɴᴇʀꜱ :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n${icon} ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : ${anu.description}\n${icon} ʜᴏᴍᴇᴘᴀɢᴇ : ${anu.homepage}\n${icon} ᴋᴇʏᴡᴏʀᴅꜱ : ${anu.keywords}\n${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}\n${icon} ʟɪᴄᴇɴꜱᴇ : ${anu.license}\n${icon} ʀᴇᴀᴅᴍᴇ : ${anu.readme}`)
		    global.db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► ᴡɪᴛʜ ᴡᴀᴛᴇʀᴍᴀʀᴋ'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍ ${text}`,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► ɴᴏ ᴡᴀᴛᴇʀᴍᴀʀᴋ'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍ ${text}`,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► ɴᴏ ᴡᴀᴛᴇʀᴍᴀʀᴋ'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► ᴡɪᴛʜ ᴡᴀᴛᴇʀᴍᴀʀᴋ'}, type: 1}
                ]
                let buttonMessage = {
                    text: `ᴅᴏᴡɴʟᴏᴀᴅ ꜰʀᴏᴍ ${text}`,
                    footer: 'ᴘʀᴇꜱꜱ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'No Query Url!'
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) hisoka.sendMedia(m.chat, media, '', `ᴅᴏᴡɴʟᴏᴀᴅ ᴜʀʟ ɪɴꜱᴛᴀɢʀᴀᴍ ꜰʀᴏᴍ ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    hisoka.sendMedia(m.chat, anu.media[0].url, '', `ᴅᴏᴡɴʟᴏᴀᴅ ᴜʀʟ ɪɴꜱᴛᴀɢʀᴀᴍ ꜰʀᴏᴍ ${isUrl(text)[0]}`, m)
                }
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		/** Backup, for example, the video above doesn't come out **/
		case 'igeh': case 'instagram2': case 'ig2': case 'igdl2': {
                if (!text) throw 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!'
                reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.img, `${icon} ᴛɪᴛʟᴇ : ${anu.result.lagu}\n${icon} ᴀʟʙᴜᴍ : ${anu.result.album}\n${icon} ꜱɪɴɢᴇʀ : ${anu.result.penyanyi}\n${icon} ᴘᴜʙʟɪꜱʜ : ${anu.result.publish}\n${icon} ʟɪʀɪᴋ :\n${anu.result.lirik.result}`, m)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await hisoka.sendImage(m.chat, anu.result.thumb, `${icon} ᴛɪᴛʟᴇ : ${anu.result.title}\n${icon} ᴜʀʟ : ${isUrl(text)[0]}`)
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `${icon} ᴛɪᴛʟᴇ : ${anu.result.title}`}, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'ᴇɴᴛᴇʀ ꜱᴇᴀʀᴄʜ ʟɪɴᴋꜱ!'
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'umma': case 'ummadl': {
	        if (!text) throw `ᴇxᴀᴍᴘʟᴇ : ${prefix + command} ʜᴛᴛᴘꜱ://ᴜᴍᴍᴀ.ɪᴅ/ᴄʜᴀɴɴᴇʟ/ᴠɪᴅᴇᴏ/ᴘᴏꜱᴛ/ɢᴜꜱ-ᴀʀᴀꜰᴀᴛ-ꜱᴜᴍʙᴇʀ-ᴋᴇᴄᴇᴡᴀ-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ ᴀᴜᴅɪᴏ'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► ᴠɪᴅᴇᴏ'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${icon} ᴛɪᴛʟᴇ : ${anu.title}
${icon} ᴀᴜᴛʜᴏʀ : ${anu.author.name}
${icon} ʟɪᴋᴇ : ${anu.like}
${icon} ᴄᴀᴘᴛɪᴏɴ : ${anu.caption}
${icon} ᴜʀʟ : ${anu.media[0]}
ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇᴅɪᴀ, ᴘʟᴇᴀꜱᴇ ᴄʟɪᴄᴋ ᴏɴᴇ ᴏꜰ ᴛʜᴇ ʙᴜᴛᴛᴏɴꜱ ʙᴇʟᴏᴡ ᴏʀ ᴇɴᴛᴇʀ ᴛʜᴇ ʏᴛᴍᴘ3/ʏᴛᴍᴘ4 ᴄᴏᴍᴍᴀɴᴅ ᴡɪᴛʜ ᴛʜᴇ ᴜʀʟ ᴀʙᴏᴠᴇ
`,
			footer: hisoka.user.name,
			buttons,
			headerType: 4
		    }
		    hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        hisoka.sendMessage(m.chat, { image: { url }, caption: `${icon} ᴛɪᴛʟᴇ : ${anu.title}\n${icon} Author : ${anu.author.name}\n${icon} Like : ${anu.like}\n${icon} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		hisoka.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Available : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		hisoka.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		hisoka.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Options available:
gray-david
1 - 4590
Ahmad
1 - 26363
bukhari
1 - 7008
from me
1 - 3367
mother-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
Muslim
1 - 5362`
		if (!args[1]) throw `How many hadiths?\n\ncontoh:\n${prefix + command} Muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}
${arab}
${id}`)
		} catch (e) {
		reply(`Hadith not found !`)
		}
		}
		break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		hisoka.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		case 'tafsirsurah': {
		if (!args[0]) throw `Usage examples:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		if (!args[1]) throw `Usage examples:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」
*Short* : ${res.result.data.tafsir.id.short}
*Long* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                hisoka.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with the caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.global.db.sticker[hash] && global.global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.global.db.sticker[hash] && global.global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.global.db.sticker[hash]
                reply(`Done!`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                hisoka.sendText(m.chat, teks, m, { mentions: Object.values(global.global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.global.db.sticker)) throw 'Hash not found in database'
                global.global.db.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.global.global.db.ase
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
                let msgs = global.global.global.db.ase
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                hisoka.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.global.global.db.ase).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.global.global.db.ase
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		reply(`Successfully removed '${text}' from message list`)
            }
	    break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
	    case 'anonymous': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                hisoka.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await hisoka.getName(m.sender)} Welcome To Anonymous Chat\on\click the button below to find a partner\`\`\``, hisoka.user.name, m)
            }
			break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner \`\`\``)
                    throw false
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, hisoka.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, hisoka.user.name, m)
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await hisoka.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, hisoka.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await hisoka.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, hisoka.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, hisoka.user.name, m)
                }
                break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                hisoka.public = true
                reply('Successful Change To public Usage')
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'self': {
                if (!isCreator) throw mess.owner
                hisoka.public = false
                reply('Successful Change To Self Usage')
            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
                
ʙᴏᴛ ᴀᴄᴛɪᴠᴇ

𝐃𝐞𝐥𝐚𝐲: *${latensi.toFixed(4)}* sec

`.trim()
               
hisoka.sendMessage(m.chat, { text: respon, contextInfo:{"externalAdReply": {"title": `---𝘼𝙇𝙄𝙀𝙉 𝘼𝙇𝙁𝘼---`,"body": `𝙍𝙪𝙣𝙩𝙞𝙢𝙚 : ${runtime(process.uptime())} >>>ᴄʟɪᴄᴋ ʜᴇʀᴇ<<<`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./lib/alfa.jpg`),"sourceUrl": "https://www.youtube.com/c/hisoka"}}}, { quoted: m})

            }
            break
			
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
 
            case 'owner': case 'creator': {
                hisoka.sendContact(m.chat, global.owner, m)
                reply("ʜᴇʏ ᴛʜɪꜱ ɪꜱ ᴍʏ ᴏᴡɴᴇʀ, ᴘʟᴇᴀꜱᴇ ᴛᴀʟᴋ ɪɴ ᴇɴɢʟɪꜱʜ")
            }
            break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


























/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
  °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ 𝙀𝙓𝙏𝙍𝘼 𝙈𝙊𝘿𝙀𝘿 𝙊𝙍 𝘼𝘿𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°
  * 
  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 

case 'dev': {



                hisoka.sendContactt(m.chat, global.owner, m)


const devsound = fs.readFileSync('./Alfa.mp3')
const devvid = fs.readFileSync('./Alfa.mp4')


hisoka.sendMessage(m.chat, {audio: devsound, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
hisoka.sendMessage(m.chat, { video: devvid , mimetype: 'video/mp4', fileName: `${wm}.mp4`}, {quoted: m})



}
break



//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	















            case 'menu': case 'help': case '?': {
				
				

                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            liveLocationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `Hi 🤚 ${pushname}

ꜱᴘᴇᴇᴅ   : ${latensi.toFixed(4)} ᴍꜱ
ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
ʙᴏᴛ ɴᴀᴍᴇ : ${global.botnma}
ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ${global.ownernma}
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${global.owner}
ʜᴏꜱᴛ ɴᴀᴍᴇ : ${os.hostname()}
ᴘʟᴀᴛꜰᴏʀᴍ : ${os.platform()}

ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ
`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʜᴏᴡ ᴛᴏ ᴅᴇᴘʟᴏʏ ʙᴏᴛ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ',
                                    id: 'command'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'command': case 'list': {



 let template = await generateWAMessageFromContent



(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `
┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────

ꜱᴘᴇᴇᴅ : ${latensi.toFixed(4)} ᴍꜱ
ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
ʙᴏᴛ ɴᴀᴍᴇ : ${global.botnma}
ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ${global.ownernma}
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : ${global.owner}
ʜᴏꜱᴛ ɴᴀᴍᴇ : ${os.hostname()}
ᴘʟᴀᴛꜰᴏʀᴍ : ${os.platform()}

ᴘʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ ʙᴜᴛᴛᴏɴ ʙᴇʟᴏᴡ`,
                    buttonText: "Menu",
                    footerText: `${gowner}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
						
"title": `ＡＬＩＥＮ ＡＬＦＡ`,


"rows": [{
"title": `${listicon}ᴀʟʟ ᴍᴇɴᴜ`,
"description": `Full List Of Functions`,
"rowId": `${prefix}alllmenu`
}],
"title": `ＡＬＩＥＮ ＡＬＦＡ`
},

{
"rows": [{
"title": `${listicon}ɢʀᴏᴜᴘ ᴍᴇɴᴜ`,
"description": `Display A List Of Group Features`,
"rowId": `${prefix}alfagrupmenu`
}],
"title": "───── ɢʀᴏᴜᴘ"
},
{
"rows": [{
"title": `${listicon}ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ`,
"description": `Display A List Of Features To Download`,
"rowId": `${prefix}alfadownloadmenu`
}],
"title": "─────ᴅᴏᴡɴʟᴏᴀᴅ"
},
{
"rows": [{
"title": `${listicon}ᴍᴀᴋᴇʀ ᴍᴇɴᴜ`,
"description": `Display A List Of Features To Create Logo`,
"rowId": `${prefix}alfamakermenu`
}],
"title": "─────ᴍᴀᴋᴇʀ"
},
{
"rows": [{
"title": `${listicon}ɢᴀᴍᴇ ᴍᴇɴᴜ`,
"description": `Display A List Of Game Features`,
"rowId": `${prefix}alfafunmenu`
}],
"title": "─────ɢᴀᴍᴇ"
},
{
"rows": [{
"title": `${listicon}ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇ ᴍᴇɴᴜ`,
"description": `Display A List Of Random Photo Features`,
"rowId": `${prefix}alfarandommenu`
}],
"title": "─────ʀᴀɴᴅᴏᴍ"
},
{
"rows": [{
"title": `${listicon}ᴠᴏɪᴄᴇᴄʜᴀɴɢᴇʀ ᴍᴇɴᴜ`,
"description": `Display A List Of Random Video Features`,
"rowId": `${prefix}alfavoicemenu`
}],
"title": "─────ᴠᴏɪᴄᴇ"
},
{
"rows": [{
"title": `${listicon}ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ`,
"description": `Ephoto Maker`,
"rowId": `${prefix}alfaephotomenu`
}],
"title": "─────ᴘʜᴏᴛᴏ"
},
{
"rows": [{
"title": `${listicon}ᴘʜᴏᴛᴏᴍᴀᴋᴇʀ ᴍᴇɴᴜ`,
"description": ``,
"rowId": `${prefix}alfaphotomakermenu`
}],
"title": "─────ᴍᴀᴋᴇʀ"
},
{
"rows": [{
"title": `${listicon}ꜰᴜɴ ᴍᴇɴᴜ`,
"description": `List of Fun Features`,
"rowId": `${prefix}alfafunmenu`
}],
"title": "─────ꜰᴜɴ"
},
{
"rows": [{
"title": `${listicon}ᴀɴᴏɴʏᴍᴏᴜꜱ ᴄʜᴀᴛ`,
"description": ``,
"rowId": `${prefix}alfaanonymouschatmenu`
}],
"title": "─────ᴄʜᴀᴛ"
},
{
"rows": [{
"title": `${listicon}ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ`,
"description": `Display A List Of Convert Features`,
"rowId": `${prefix}alfaconvertmenu`
}],
"title": "─────ᴄᴏɴᴠᴇʀᴛᴇʀ"
},
{
"rows": [{
"title": `${listicon}ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ`,
"description": `Display A List Of Searching Features`,
"rowId": `${prefix}alfasearchmenu`
}],
"title": "─────ꜱᴇᴀʀᴄʜ"
},
{
"rows": [{
"title": `${listicon}ᴅᴀᴛᴀʙᴀꜱᴇ ᴍᴇɴᴜ`,
"description": ``,
"rowId": `${prefix}alfadatabasemenu`
}],
"title": "─────ᴅᴀᴛᴀʙᴀꜱᴇ"
},
{
"rows": [{
"title": `${listicon}ᴍᴀɪɴ ᴍᴇɴᴜ`,
"description": `Display A List Of Other Features`,
"rowId": `${prefix}alfamainmenu`
}],
"title": "─────ᴍᴀɪɴ"
},
{
"rows": [{
"title": `${listicon}ᴏᴡɴᴇʀ ᴍᴇɴᴜ`,
"description": `Display A List Of Owner Features`,
"rowId": `${prefix}alfaownermenu`
}],
"title": "─────ᴏᴡɴᴇʀ"
}
],
          listType: 1
                }
            }), {})
            
            
            
            
            
            
            
            
            
            hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	

            
            
case 'alfagrupmenu': {
	            anu = `
┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Group Menu*
│ 
│${icon} ${prefix}linkgroup
│${icon} ${prefix}ephemeral [option]
│${icon} ${prefix}setppgc [image]
│${icon} ${prefix}setname [text]
│${icon} ${prefix}setdesc [text]
│${icon} ${prefix}group [option]
│${icon} ${prefix}editinfo [option]
│${icon} ${prefix}add @user
│${icon} ${prefix}kick @user
│${icon} ${prefix}hidetag [text]
│${icon} ${prefix}tagall [text]
│${icon} ${prefix}antilink [on/off]
│${icon} ${prefix}mute [on/off]
│${icon} ${prefix}promote @user
│${icon} ${prefix}demote @user
│${icon} ${prefix}vote [text]
│${icon} ${prefix}devote
│${icon} ${prefix}upvote
│${icon} ${prefix}cekvote
│${icon} ${prefix}hapusvote
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfadownloadmenu': {
	okemenu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Downloader Menu*
│ 
│${icon} ${prefix}tiktoknowm [url]
│${icon} ${prefix}tiktokwm [url]
│${icon} ${prefix}tiktokmp3 [url]
│${icon} ${prefix}instagram [url]
│${icon} ${prefix}twitter [url]
│${icon} ${prefix}twittermp3 [url]
│${icon} ${prefix}facebook [url]
│${icon} ${prefix}pinterestdl [url]
│${icon} ${prefix}ytmp3 [url]
│${icon} ${prefix}ytmp4 [url]
│${icon} ${prefix}getmusic [query]
│${icon} ${prefix}getvideo [query]
│${icon} ${prefix}umma [url]
│${icon} ${prefix}joox [query]
│${icon} ${prefix}soundcloud [url]
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: okemenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break 
            
//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	
            
            
            case 'alfasearchmenu': {
            	anu = `
            	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Search Menu*
│ 
│${icon} ${prefix}play [query]
│${icon} ${prefix}song [query]
│${icon} ${prefix}video [query]
│${icon} ${prefix}yts [query]
│${icon} ${prefix}google [query]
│${icon} ${prefix}gimage [query]
│${icon} ${prefix}pinterest [query]
│${icon} ${prefix}wallpaper [query]
│${icon} ${prefix}wikimedia [query]
│${icon} ${prefix}ytsearch [query]
│${icon} ${prefix}ringtone [query]
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfarandommenu': {
	anu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Random Menu*
│
│${icon} ${prefix}coffee
│${icon} ${prefix}couplepp
│${icon} ${prefix}coffe
│${icon} ${prefix}quotesanime
│${icon} ${prefix}motivasi
│${icon} ${prefix}dilanquote
│${icon} ${prefix}bucinquote
│${icon} ${prefix}katasenja
│${icon} ${prefix}puisi
│${icon} ${prefix}couple
│${icon} ${prefix}anime
│${icon} ${prefix}waifu
│${icon} ${prefix}husbu
│${icon} ${prefix}neko
│${icon} ${prefix}shinobu
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfafunmenu': {
	anu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Fun Menu*
│ 
│${icon} ${prefix}halah
│${icon} ${prefix}hilih
│${icon} ${prefix}huluh
│${icon} ${prefix}heleh
│${icon} ${prefix}holoh
│${icon} ${prefix}jadian
│${icon} ${prefix}jodohku
│${icon} ${prefix}delttt
│${icon} ${prefix}tictactoe
│${icon} ${prefix}family100
│${icon} ${prefix}tebak [option]
│${icon} ${prefix}math [mode]
│${icon} ${prefix}suitpvp [@tag]
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfavoicemenu': {
	anu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Voice Changer*
│	
│${icon} ${prefix}bass
│${icon} ${prefix}blown
│${icon} ${prefix}deep
│${icon} ${prefix}earrape
│${icon} ${prefix}fast
│${icon} ${prefix}fat
│${icon} ${prefix}nightcore
│${icon} ${prefix}reverse
│${icon} ${prefix}robot
│${icon} ${prefix}slow
│${icon} ${prefix}tupai
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfaephotomenu': {
	anu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Ephoto Menu*
│	
│${icon} ${prefix}ffcover
│${icon} ${prefix}crossfire
│${icon} ${prefix}galaxy
│${icon} ${prefix}glass
│${icon} ${prefix}neon
│${icon} ${prefix}beach
│${icon} ${prefix}blackpink
│${icon} ${prefix}igcertificate
│${icon} ${prefix}ytcertificate
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfaphotomakermenu': {
	anu = `┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Photo Oxy Menu*
│ 
│${icon} ${prefix}shadow
│${icon} ${prefix}romantic
│${icon} ${prefix}smoke
│${icon} ${prefix}burnpapper
│${icon} ${prefix}naruto
│${icon} ${prefix}lovemsg
│${icon} ${prefix}grassmsg
│${icon} ${prefix}lovetext
│${icon} ${prefix}coffecup
│${icon} ${prefix}butterfly
│${icon} ${prefix}harrypotter
│${icon} ${prefix}retrolol
`
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfaconvertmenu': {
	anu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Convert Menu*
│ 
│${icon} ${prefix}toimage
│${icon} ${prefix}removebg
│${icon} ${prefix}sticker
│${icon} ${prefix}emojimix
│${icon} ${prefix}tovideo
│${icon} ${prefix}togif
│${icon} ${prefix}tourl
│${icon} ${prefix}tovn
│${icon} ${prefix}tomp3
│${icon} ${prefix}toaudio
│${icon} ${prefix}ebinary
│${icon} ${prefix}dbinary
│${icon} ${prefix}styletext
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfamainmenu': {
	anu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
 ┌──${icon} *Main Menu*
 │
 │${icon} ${prefix}ping
 │${icon} ${prefix}owner
 │${icon} ${prefix}menu / ${prefix}help / ${prefix}?
 │${icon} ${prefix}delete
 │${icon} ${prefix}infochat
 │${icon} ${prefix}quoted
 │${icon} ${prefix}listpc
 │${icon} ${prefix}listgc
 │${icon} ${prefix}listonline
 │${icon} ${prefix}report (report bug to owner)
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfadatabasemenu': {
	anu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Database Menu*
│ 
│${icon} ${prefix}setcmd
│${icon} ${prefix}listcmd
│${icon} ${prefix}delcmd
│${icon} ${prefix}lockcmd
│${icon} ${prefix}addmsg
│${icon} ${prefix}listmsg
│${icon} ${prefix}getmsg
│${icon} ${prefix}delmsg
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfaanonymouschatmenu': {
	anu = `
	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Anonymous Menu*
│	
│${icon} ${prefix}anonymous
│${icon} ${prefix}start
│${icon} ${prefix}next
	`
	  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


/* case 'sistemmenu': {
	anu = `
	*System Menu*
	
  ➙ ${prefix}antilink On/Off
  ➙ ${prefix}mute On/Off
  ➙ ${prefix}antiwame On/Off
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break */

//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


  case 'alfaownermenu': {
  	anu = `
  	┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Owner Menu*
│ 
│${icon} ${prefix}chat [option]
│${icon} ${prefix}join [link]
│${icon} ${prefix}leave
│${icon} ${prefix}block @user
│${icon} ${prefix}unblock @user
│${icon} ${prefix}bcgroup [text]
│${icon} ${prefix}bcall [text]
│${icon} ${prefix}setppbot [image]
│${icon} ${prefix}setexif
  `
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	


case 'alfamakermenu': {
	            anu = `
	            ┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Text Pro Menu*
│ 
│${icon} ${prefix}3dchristmas
│${icon} ${prefix}3ddeepsea
│${icon} ${prefix}americanflag
│${icon} ${prefix}3dscifi
│${icon} ${prefix}3drainbow
│${icon} ${prefix}3dwaterpipe
│${icon} ${prefix}halloweenskeleton
│${icon} ${prefix}sketch
│${icon} ${prefix}bluecircuit
│${icon} ${prefix}space
│${icon} ${prefix}metallic
│${icon} ${prefix}fiction
│${icon} ${prefix}greenhorror
│${icon} ${prefix}transformer
│${icon} ${prefix}berry
│${icon} ${prefix}thunder
│${icon} ${prefix}magma
│${icon} ${prefix}3dcrackedstone
│${icon} ${prefix}3dneonlight
│${icon} ${prefix}impressiveglitch
│${icon} ${prefix}naturalleaves
│${icon} ${prefix}fireworksparkle
│${icon} ${prefix}matrix
│${icon} ${prefix}dropwater
│${icon} ${prefix}harrypotter
│${icon} ${prefix}foggywindow
│${icon} ${prefix}neondevils
│${icon} ${prefix}christmasholiday
│${icon} ${prefix}3dgradient
│${icon} ${prefix}blackpink
│${icon} ${prefix}gluetext
  `
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



  case 'alllmenu': {
  	anu = `
┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
┌──${icon} *Group Menu*
│${icon} ${prefix}linkgroup
│${icon} ${prefix}ephemeral [option]
│${icon} ${prefix}setppgc [image]
│${icon} ${prefix}setname [text]
│${icon} ${prefix}setdesc [text]
│${icon} ${prefix}group [option]
│${icon} ${prefix}editinfo [option]
│${icon} ${prefix}add @user
│${icon} ${prefix}kick @user
│${icon} ${prefix}hidetag [text]
│${icon} ${prefix}tagall [text]
│${icon} ${prefix}antilink [on/off]
│${icon} ${prefix}mute [on/off]
│${icon} ${prefix}promote @user
│${icon} ${prefix}demote @user
│${icon} ${prefix}vote [text]
│${icon} ${prefix}devote
│${icon} ${prefix}upvote
│${icon} ${prefix}cekvote
│${icon} ${prefix}hapusvote
 │
 └───────${icon} 

 ┌──${icon} *Main Menu*
 │
 │${icon} ${prefix}ping
 │${icon} ${prefix}owner
 │${icon} ${prefix}menu / ${prefix}help / ${prefix}?
 │${icon} ${prefix}delete
 │${icon} ${prefix}infochat
 │${icon} ${prefix}quoted
 │${icon} ${prefix}listpc
 │${icon} ${prefix}listgc
 │${icon} ${prefix}listonline
 │
 └───────${icon}

 ┌──${icon} *Downloader Menu*
 │
 │${icon} ${prefix}tiktoknowm [url]
│${icon} ${prefix}tiktokwm [url]
│${icon} ${prefix}tiktokmp3 [url]
│${icon} ${prefix}instagram [url]
│${icon} ${prefix}twitter [url]
│${icon} ${prefix}twittermp3 [url]
│${icon} ${prefix}facebook [url]
│${icon} ${prefix}pinterestdl [url]
│${icon} ${prefix}ytmp3 [url]
 │${icon} ${prefix}ytmp4 [url]
 │${icon} ${prefix}getmusic [query]
 │${icon} ${prefix}getvideo [query]
 │${icon} ${prefix}umma [url]
 │${icon} ${prefix}joox [query]
 │${icon} ${prefix}soundcloud [url]
 │
└───────${icon}
 ┌──${icon} *Search Menu*
 │
 │${icon} ${prefix}play [query]
 │${icon} ${prefix}song [query]
 │${icon} ${prefix}video [query]
 │${icon} ${prefix}yts [query]
 │${icon} ${prefix}google [query]
 │${icon} ${prefix}gimage [query]
│${icon} ${prefix}pinterest [query]
│${icon} ${prefix}wallpaper [query]
 │${icon} ${prefix}wikimedia [query]
 │${icon} ${prefix}ytsearch [query]
 │${icon} ${prefix}ringtone [query]
 │
 └───────${icon}

┌──${icon} *Random Menu*
│
│${icon} ${prefix}coffe
│${icon} ${prefix}quotesanime
│${icon} ${prefix}motivasi
│${icon} ${prefix}dilanquote
│${icon} ${prefix}bucinquote
│${icon} ${prefix}katasenja
│${icon} ${prefix}puisi
│${icon} ${prefix}couple
│${icon} ${prefix}anime
│${icon} ${prefix}waifu
 │${icon} ${prefix}husbu
 │${icon} ${prefix}neko
 │${icon} ${prefix}shinobu
 │
 └───────${icon}

┌──${icon} *Text Pro Menu*
│
│${icon} ${prefix}3dchristmas
│${icon} ${prefix}3ddeepsea
│${icon} ${prefix}americanflag
│${icon} ${prefix}3dscifi
│${icon} ${prefix}3drainbow
│${icon} ${prefix}3dwaterpipe
│${icon} ${prefix}halloweenskeleton
│${icon} ${prefix}sketch
│${icon} ${prefix}bluecircuit
│${icon} ${prefix}space
│${icon} ${prefix}metallic
│${icon} ${prefix}fiction
│${icon} ${prefix}greenhorror
│${icon} ${prefix}transformer
│${icon} ${prefix}berry
│${icon} ${prefix}thunder
│${icon} ${prefix}magma
│${icon} ${prefix}3dcrackedstone
│${icon} ${prefix}3dneonlight
│${icon} ${prefix}impressiveglitch
│${icon} ${prefix}naturalleaves
│${icon} ${prefix}fireworksparkle
│${icon} ${prefix}matrix
│${icon} ${prefix}dropwater
│${icon} ${prefix}harrypotter
│${icon} ${prefix}foggywindow
│${icon} ${prefix}neondevils
│${icon} ${prefix}christmasholiday
│${icon} ${prefix}3dgradient
│${icon} ${prefix}blackpink
│${icon} ${prefix}gluetext
│
└───────${icon}
┌──${icon} *Photo Oxy Menu*
│
│${icon} ${prefix}shadow
│${icon} ${prefix}romantic
│${icon} ${prefix}smoke
│${icon} ${prefix}burnpapper
│${icon} ${prefix}naruto
│${icon} ${prefix}lovemsg
│${icon} ${prefix}grassmsg
│${icon} ${prefix}lovetext
│${icon} ${prefix}coffecup
│${icon} ${prefix}butterfly
│${icon} ${prefix}harrypotter
│${icon} ${prefix}retrolol
│
└───────${icon}
┌──${icon} *Ephoto Menu*
│
│${icon} ${prefix}ffcover
│${icon} ${prefix}crossfire
│${icon} ${prefix}galaxy
│${icon} ${prefix}glass
│${icon} ${prefix}neon
│${icon} ${prefix}beach
│${icon} ${prefix}blackpink
│${icon} ${prefix}igcertificate
│${icon} ${prefix}ytcertificate
│
└───────${icon}
┌──${icon} *Fun Menu*
│
│${icon} ${prefix}halah
│${icon} ${prefix}hilih
│${icon} ${prefix}huluh
│${icon} ${prefix}heleh
│${icon} ${prefix}holoh
│${icon} ${prefix}jadian
│${icon} ${prefix}jodohku
│${icon} ${prefix}delttt
│${icon} ${prefix}tictactoe
│${icon} ${prefix}family100
│${icon} ${prefix}tebak [option]
│${icon} ${prefix}math [mode]
│${icon} ${prefix}suitpvp [@tag]
 │
 └───────${icon}

 ┌──${icon} *Convert Menu*
 │
 │${icon} ${prefix}toimage
│${icon} ${prefix}removebg
│${icon} ${prefix}sticker
│${icon} ${prefix}emojimix
│${icon} ${prefix}tovideo
│${icon} ${prefix}togif
│${icon} ${prefix}tourl
│${icon} ${prefix}tovn
│${icon} ${prefix}tomp3
│${icon} ${prefix}toaudio
│${icon} ${prefix}ebinary
│${icon} ${prefix}dbinary
│${icon} ${prefix}styletext
 │
 └───────${icon}

 ┌──${icon} *Database Menu*
 │
 │${icon} ${prefix}setcmd
│${icon} ${prefix}listcmd
│${icon} ${prefix}delcmd
│${icon} ${prefix}lockcmd
│${icon} ${prefix}addmsg
│${icon} ${prefix}listmsg
│${icon} ${prefix}getmsg
│${icon} ${prefix}delmsg
│
└───────${icon}
┌──${icon} *Anonymous Menu*
│
│${icon} ${prefix}anonymous
│${icon} ${prefix}start
│${icon} ${prefix}next
│${icon} ${prefix}keluar
│${icon} ${prefix}sendkontak
 │
 └───────${icon}

 ┌──${icon} *Voice Changer*
 │
 │${icon} ${prefix}bass
│${icon} ${prefix}blown
│${icon} ${prefix}deep
│${icon} ${prefix}earrape
│${icon} ${prefix}fast
│${icon} ${prefix}fat
│${icon} ${prefix}nightcore
│${icon} ${prefix}reverse
│${icon} ${prefix}robot
│${icon} ${prefix}slow
│${icon} ${prefix}tupai
│
└───────${icon}
┌──${icon} *Owner Menu*
│
│${icon} ${prefix}chat [option]
│${icon} ${prefix}join [link]
│${icon} ${prefix}leave
│${icon} ${prefix}block @user
│${icon} ${prefix}unblock @user
│${icon} ${prefix}bcgroup [text]
│${icon} ${prefix}bcall [text]
│${icon} ${prefix}setppbot [image]
│${icon} ${prefix}setexif
│
└───────${icon}`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            liveLocationMessage: {
                            jpegThumbnail: fs.readFileSync('./lib/alfa.jpg')},
                            hydratedFooterText: `${gowner}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'ʏᴏᴜᴛᴜʙᴇ',
                                    url: 'https://www.youtube.com/c/hisoka'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break


 //|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'settings':
case 'setting': {



 let template = await generateWAMessageFromContent




(m.chat, proto.Message.fromObject({
                listMessage : {
                    title: `Hi ${pushname}`,
                    description: `
┌ ────── ──────
│┌═══════════════════
││ ɪɢ: https://bit.ly/3NI5vQP
││ ʏᴛ: https://bit.ly/37eyaws
││ ɢʜ: https://bit.ly/3KfA3Hu
│└═════════
└ ────── ──────
`,
                    buttonText: "Menu",
                    footerText: `*${wm}*`,
                    listType: "SINGLE_SELECT",
                    sections: [
{
"title": `ＡＬＩＥＮ ＡＬＦＡ`,
rows: [
{
"title": "${listicon}𝘼𝙪𝙩𝙤𝙍𝙚𝙖𝙙",
"description": `Turn On Or Off Autoread Messages`,
"rowId": `${prefix}autoread`
},
{
"title": "${listicon}𝘼𝙪𝙩𝙤𝙑𝙉",
"description": `Automatic Voice/Audio Sending Feture`,
"rowId": `${prefix}autovn`
},
{
"title": "${listicon}𝘼𝙪𝙩𝙤𝙎𝙩𝙞𝙘𝙠𝙚𝙧",
"description": `Automatic Sticker Sending Feture`,
"rowId": `${prefix}autostic`
},
{
//"title": "${listicon}antilink",
"description": `Show Automatic Typing Status For Bot`,
"rowId": `${prefix}autotype`
},
{
"title": "${listicon}𝘼𝙪𝙩𝙤𝙍𝙚𝙘𝙤𝙧𝙙",
"description": `Show Automatic Recording Status For Bot`,
"rowId": `${prefix}autorecord`
},
{
"title": "${listicon}𝙒𝙤𝙧𝙠𝙏𝙮𝙥𝙚",
"description": `Change Work Type (Public or Private)`,
"rowId": `${prefix}worktype`
},
{
"title": "${listicon}𝘽𝙪𝙩𝙩𝙤𝙣 𝙎𝙚𝙩𝙩𝙞𝙣𝙜𝙨",
"description": `Settings List For Manual Management`,
"rowId": `${prefix}typesettings`
},
{
"title": "${listicon}𝙏𝙮𝙥𝙚 𝙎𝙚𝙩𝙩𝙞𝙣𝙜𝙨",
"description": `Settings List For Button Management`,
"rowId": `${prefix}buttonsettings`
}]
}],
          listType: 1
                }
            }), {})
            
hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }

break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//	



case 'bonkz': {
	
	
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                				
				
				let image = fs.readFileSync('./lib/alfa.jpg')
				let audio = await (await fetch(media.dl_link)).buffer()
                //hisoka.sendMessage(m.chat, audio, {contextInfo: { externalAdReply: {title: `title`, body: `ＡＬＩＥＮ ＡＬＦＡ`, mediaType: "PREVIEW", thumbnail: image, sourceUrl: `nope`}}})
				hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3`, contextInfo:{"externalAdReply": {"title": `---A L I E N  A L F A---`,"body": ` Subscribe`, "previewType": "PREVIEW", "thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./lib/alfa.jpg`),"sourceUrl": "https:"}}})

				
				//hisoka.sendMessage(m.chat, { audio: { url: media.dl_link }}, {contextInfo: { mentionedJid: [m.sender], externalAdReply :{ mediaUrl: `https://hisoka.github.io`, mediaType: 2, description: 'bonk',  title: 'bonk2', body: 'bonk3', thumbnail: fs.readFileSync('./lib/alfa.jpg'),}}})
				}

break


//|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|//



			case 'videoh': case 'songh': case 'playh': case 'doch': case 'igh': case 'menuh': {
       
                                reply(`ＡＬＩＥＮ ＡＬＦＡ\n this option is under work`)

               // hisoka.sendMessage(m.chat, 'ＡＬＩＥＮ ＡＬＦＡ\nGenerate Random ' + command }, { quoted: m })
            }
            break
            
            
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------


			case 'jid': {

       reply(m.chat, `Jid: `, { quoted: m })

               // hisoka.sendMessage(m.chat, 'ＡＬＩＥＮ ＡＬＦＡ\nGenerate Random ' + command }, { quoted: m })
            }
            break

	
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

			case 'tqto': {
                anu = `┌──────────────𒆜 
│  ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ
└───────𒆜`

                let btn = [{
                                urlButton: {
                                    displayText: 'ᴀʟɪᴇɴ ᴀʟꜰᴀ',
                                    url: 'https://github.com/Alien-alfa'
                                }
                            },{
                                urlButton: {
                                    displayText: 'ᴅɪᴋᴀ ᴀʀᴅɴᴛ',
                                    url: 'https://github.com/DikaArdnt'
                                }
                            },{
                                urlButton: {
                                    displayText: 'ᴀᴅʜɪʀᴀᴊ ꜱɪɴɢʜ',
                                    url: 'https://github.com/adiwajshing'
                                }
                            },{
                                urlButton: {
                                    displayText: 'ꜱᴀꜰᴡᴀɴɢᴀɴᴢ',
                                    url: 'https://github.com/SafwanGanz'
                                }
                            },
			    
			    
			    
			    
			    
			    
			    
			    
			    {
                                urlButton: {
                                    displayText: 'ꜱᴏᴜʀᴄᴇ ᴄᴏᴅᴇ',
                                    url: 'https://github.com/Alien-Alfa/WhatsAppBot-MD'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'ɪɴꜱᴛᴀɢʀᴀᴍ',
                                    url: 'https://www.instagram.com/_the_soul_rider_/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'ꜱᴄʀɪᴘᴛ',
                                    id: 'sc'
                                }
                            }]
                        hisoka.send5ButImg(m.chat, anu, hisoka.user.name, global.thumb, btn)
                     }
                     
                     
            break
			
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
			

             
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------


            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (global.db.data.chats[m.chat].antilink) return reply(`ᴀʟʀᴇᴀᴅʏ ᴀᴄᴛɪᴠᴇ`)
                global.db.data.chats[m.chat].antilink = true
                reply(`ᴀᴄᴛɪᴠᴇ ᴇɴᴀʙʟᴇᴅ !`)
                } else if (args[0] === "off") {
                if (!global.db.data.chats[m.chat].antilink) return reply(`ᴀʟʀᴇᴀᴅʏ ᴅɪꜱᴀʙʟᴇᴅ`)
                global.db.data.chats[m.chat].antilink = false
                reply(`ᴀɴᴛɪʟɪɴᴋ ᴅɪꜱᴀʙʟᴇᴅ !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'ᴏɴ' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'ᴏꜰꜰ' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Antilink`, hisoka.user.name, m)
                }
             }
             break
             
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (global.db.data.chats[m.chat].mute) return reply(`already done`)
                global.db.data.chats[m.chat].mute = true
                reply(`${hisoka.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!global.db.data.chats[m.chat].mute) return reply(`already done bro`)
                global.db.data.chats[m.chat].mute = false
                reply(`${hisoka.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'ᴍᴜᴛᴇ' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'ᴜɴᴍᴜᴛᴇ' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `ᴍᴜᴛᴇ ʙᴏᴛ`, hisoka.user.name, m)
                }
             }
             break
             
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successfully Closing Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successfully Opening a Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'ᴏᴘᴇɴ' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'ᴄʟᴏꜱᴇ' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, `Mode Group`, hisoka.user.name, m)
             }
            }
            break
            
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡| */
			
			
			
			
			
			
/*|⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|
  
  °◦¸¸.◦°˚°◦☙°◦¸¸.◦°˚°◦☙ミミ◦❧◦°˚°◦.¸¸◦°´❤*•.¸♥ 𝙀𝙓𝙏𝙍𝘼 𝙈𝙊𝘿𝙀𝘿 𝙊𝙍 𝘼𝘿𝙀𝘿 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 ♥¸.•*❤´°◦¸¸.◦°˚°◦☙◦彡彡❧◦°˚°◦.¸¸◦°❧◦°˚°◦.¸¸◦°
  * 
  |⬡════════════════════════════════════════════|❝ Ⓒ𝙰𝙻𝙸𝙴𝙽 𝙰𝙻𝙵𝙰 𝙱𝙾𝚃 𝙱𝚈 𝚃𝙾𝚇𝙸𝙲 𝙰𝙻𝙸𝙴𝙽™ ❞|═══════════════════════════════════════════⬡|*/ 	


            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
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
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    hisoka.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
