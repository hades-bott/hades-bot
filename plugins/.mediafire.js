let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ ππ°π»πΈπ³πΎ π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file*`
let res = await mediafire(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*π½πΎπΌπ±ππ΄:* ${filename}
*πΏπ΄ππΎ:* ${filesizeH}
*ππΈπΏπΎ:* ${ext}
`.trim()
m.reply(caption)
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|Mediafire)$/i
module.exports = handler
