const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*โณ๏ธ Uhm.. que estas buscando?*\n*๐๐ป Ingrese un texto o enlace de YT*\n\n*โ Ejemplo:*\n*${usedPrefix + command} Begin you*`
//  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '*El video no se encontrรณ, intente ingresar el nombre original de la canciรณn o video*'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`*El servidor ${server} fallo!, reintentando con otro servidor*${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw '*Todos los servidores fallaron*'
  if (yt2 === false) throw '*Todos los servidores fallaron*'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
โญโโโโโโฏ๐ฉแึึถ๐ชโฉโฏโโโโโโฎ
โโถโออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ    
โโโโโโโฏ๐ฉแึึถ๐ชโฉโฏโโโโโฏ  
โโถโ  โ ใคโโใค โท  โป 
โโถ   เผดโ๐นเฝผเนเฃญ๊ฆฟโฉPLAY
โโถโญโโคออก๐ถ๐ฅ Titulo:* _${title}_
โโถโฐโคออก๐ผPeso del audio:* _${filesizeF}_
โโถโญโโคออกโฉ๐ Peso del video:* _${yt2.filesizeF}_
โโถโฐโคโออกโฃ๐๐๐๐๐_๐๐๐โออกโฃ
โฐโโโโโโฏ๐ฉแึึถ๐ชโฉโฏโโโโโโฏ
`.trim(), 'โออกโฃ๐๐๐๐๐_๐๐๐โออกโฃเฝผเนเฃญ', '๐ต AUDIO ๐ต ', `.yta ${vid.url}`, '๐๏ธ VIDEO ๐๏ธ', `.yt ${vid.url}`)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(reproducir|reproducir2|reproductor|Reproducir|Reproducir2|Reproductor|play3|Play3)$/i

handler.exp = 0

module.exports = handler
