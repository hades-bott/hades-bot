let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/miku?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Hatsune Miku*', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(micu|miku)$/i

module.exports = handler
