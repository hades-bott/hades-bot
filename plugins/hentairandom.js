let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Hentai By ,โออกโฃ๐๐๐๐๐ฌ_๐๐จ๐ญโออกโฃ', 'แฐฐโออกโฃ๐๐๐๐๐ฌ_๐๐จ๐ญโออกโฃ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(hentai|hentay)$/i

module.exports = handler
