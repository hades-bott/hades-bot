const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/nsfw")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*๐ฅต๐ฅต๐ฅต๐ฅต๐ฅต*", 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃแฐฐ', '๐ฅต SIGUIENTE ๐ฅต', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(porno)$/i
module.exports = handler
