let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ แฐฐ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(bdsm|nsfwbdsm)$/i

module.exports = handler
