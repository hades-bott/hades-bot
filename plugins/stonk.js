const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  //await m.reply(global.wait)
  try {
    let stonk = global.API('https://hardianto.xyz', '/api/stonk', {
    image: await conn.getProfilePicture(m.sender).catch(_ => ''),
    apikey: 'hardianto'})
    let stiker = await sticker(null, stonk, 'stonks', 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  } catch (e) {
  m.reply('Conversion fallida')
  }
}
handler.command = /^stonks$/i
handler.limit = false
handler.group = true
handler.register = false
module.exports = handler