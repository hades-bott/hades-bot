let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/kurumi?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*akiyama*', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ ', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(kurumi|Kurumi)$/i

module.exports = handler


