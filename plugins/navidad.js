const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Christmas")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*Navidad ๐งโ๐*", 'แฐฐโออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ', '๐ SIGUIENTE ๐', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(navidad)$/i
module.exports = handler
