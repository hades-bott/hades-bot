let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/sakura?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'sakura', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ แฐฐ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(sakura|Sakura)$/i

module.exports = handler


