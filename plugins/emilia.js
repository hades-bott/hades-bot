let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/emilia?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*emilia*', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃแฐฐ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(emilia|Emilia)$/i

module.exports = handler


