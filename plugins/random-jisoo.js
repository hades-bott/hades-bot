let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/jiso?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '๐ธ *vive la vida como tu quieras*', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(jiso|jisso|jisoo|kimjisoo|)$/i
module.exports = handler
