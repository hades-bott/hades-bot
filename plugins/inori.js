let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/inori?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*inori*', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃแฐฐ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(inori|Inori)$/i

module.exports = handler


