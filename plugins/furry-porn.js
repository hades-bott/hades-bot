const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Furryporn")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send2ButtonImg(m.chat, url, "*ยฟSi me pongo de perrito, me adoptas? ๐ฅ๐ฅด*", 'โออกโฃ๐๐๐๐๐ฌ_๐๐จ๐ญโออกโฃ', '๐ฅต SIGUIENTE ๐ฅต', `${usedPrefix + command}`, '๐ฅ LABIBLIA ๐ฅ', `${usedPrefix}labiblia`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(furry|furro|furr@|furra|furrys|furros|furr@s|furras|furri|furris)$/i
module.exports = handler
