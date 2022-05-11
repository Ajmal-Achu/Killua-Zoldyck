module.exports = {
    name: "takesticker",
    alias: ["colong","take"],
    desc: "Take And Change Sticker Exif",
    type: "convert",
    exec: async(killua, m, { command, prefix, args, quoted, mime }) => {
        if (!quoted) return  m.reply(`Reply to Supported media With Caption ${prefix + command}`)
        if (/image|video|sticker/.test(mime)) {
            anu = args.join(" ").split('|')
            const packname = anu[0] !== '' ? anu[0] : global.packname
            const author = anu[1] !== '' ? anu[1] : global.author
            let download = await quoted.download()
            killua.sendFile(m.from, download, "", m, { asSticker: true, author: author, packname: packname, categories: ['😄','😊'] })
        } else {
            return m.reply(`Reply to Supported media With Caption ${prefix + command}`, m.from, { quoted: m })
        }
    },
}
