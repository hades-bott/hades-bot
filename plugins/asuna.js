let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api.sekha.tech/api/wallpaper/ana?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*asuna*', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃแฐฐ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(asuna|Asuna)$/i

module.exports = handler


