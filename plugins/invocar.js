let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants, args }) => {
const getGroupAdmins = (participants) => { admins = []
for (let i of participants) { i.isAdmin ? admins.push(i.jid) : '' } return admins }
const mentions = (teks, memberr, id) => { (id == null || id == undefined || id == false) ? conn.sendMessage(m.chat, teks.trim(), MessageType.extendedText, { contextInfo: { "mentionedJid": memberr } }) : 
conn.sendButton(m.chat, teks.trim(), 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃแฐฐ', 'VOLVER A INVOCAR', `#invocar`, MessageType.extendedText, { quoted: m, contextInfo: { "mentionedJid": memberr } })}
const isGroup = m.chat.endsWith('@g.us')
let grupmeta = await conn.groupMetadata(m.chat)
const groupMembers = isGroup ? grupmeta.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const info = await conn.groupMetadata(m.chat)
let vn = './media/Invocar.mp3'
let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let pesan = args.join` `
let oi = `โออกโฃ๐๐๐๐๐๐๐โออกโฃ ${pesan}`
let hmm = `
โญโโโโโโฏ๐ฉแึึถ๐ชโฉโฏโโโโโโฎ
โโถโออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ
โโโโโโชโฏ๐ฉแึึถ๐ชโฉโฏโซโโโโฏ
โโถโออกโฃ๐๐๐ร๐๐๐๐๐ ๐๐๐๐๐โออกโฃ
โฐโโโโโโฏ๐ฉแึึถ๐ชโฉโฏโโโโโโฏ
\n\n`
let duh = `โ\n\nโฬธฬทูึด โฬธฬทูึด โฬธฬทูึด โฬธฬทูึด โฬธฬทูึด โฬธฬทูึด โฬธฬทูึด โฬธฬทูึดฬธฬทูึด`
var teks = `${oi}\n\nโฬธฬทูึด\n`
for (let admon of groupMembers) { teks += `โโถโออกโฃ @${admon.jid.split('@')[0]}\n`} mentions(hmm+teks+duh, users, true,{ contextInfo: { mentionedJid: users } })
await await await await await await conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, {   
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^invocar|tagall|invocacion|invocaciรณn$/i
handler.group = true
handler.admin = true
handler.premium = false
handler.botAdmin = false
module.exports = handler
