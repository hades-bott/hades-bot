let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api-reysekha.herokuapp.com/api/wallpaper/rose?apikey=APIKEY`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'π *Lo que oigo puede ser sierto*', 'βΝΝ‘β£πππππ_πππβΝΝ‘β£', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(rose|rosΓ©|Rose|RosΓ©)$/i
module.exports = handler
