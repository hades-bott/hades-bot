const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/messi")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, url, "*Messi*", 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃแฐฐแฐฐ', 'โฝ SIGUIENTE โฝ', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(messi)$/i
module.exports = handler
