let axios = require("axios")
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.waifu.pics/nsfw/trap")
let json = res.data
let url = json.url
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send2ButtonImg(m.chat, url, "*UN TRAPITO <3*", 'โออกโฃ๐๐๐๐๐ฌ_๐๐จ๐ญโออกโฃ', '๐ฅต SIGUIENTE ๐ฅต', `${usedPrefix + command}`, '๐ฅ LABIBLIA ๐ฅ', `${usedPrefix}labiblia`, m, false, { contextInfo: { mentionedJid }}) }
handler.command = /^htrap$/i
module.exports = handler
