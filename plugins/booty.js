const axios = require('axios')
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/booty")
let json = res.data
let ShadowBot = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.sendButtonImg(m.chat, ShadowBot, "*Booty ๐โค๏ธโ๐ฅ*", 'โออกโฃ๐๐๐๐๐ฌ_๐๐จ๐ญโออกโฃแฐฐ', '๐ฅต SIGUIENTE ๐ฅต', `${usedPrefix + command}`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(booty|culo|culos|culo2|culos2)$/i
module.exports = handler
