let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Nos vale.mp3'
conn.sendFile(m.chat, vn, 'Nos vale.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Nos vale|Nos vale|Nos vale/
handler.command = new RegExp
module.exports = handler
