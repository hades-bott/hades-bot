const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/futbol")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*FÃºtbol ð¥*", 'âÍÍ¡â£ððððð¬_ðð¨ð­âÍÍ¡â£', 'â½ SIGUIENTE â½', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(futbol|fÃºtbol)$/i
module.exports = handler
