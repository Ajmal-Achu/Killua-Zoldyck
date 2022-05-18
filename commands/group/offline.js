module.exports = {
	name: "offline",
	alias: ["mute"],
    use: "<options>",
	desc: "Enable or disable BOT for group",
    type: "group",
    example: "%prefix%command enable or disable",
    noLimit: true,
    start: async(killua, m, { text, prefix, command }) => {
        if (text === 'enable') {
            if (isOffline === true) return m.reply('Mute already active')
            group.addOffline(m.from, _group)
            m.reply(`Success BOT Offline For This Group\n\n_${prefix + command} disable For Unmute BOT_`)
        } else if (text === 'disable') {
            if (isOffline === false) return m.reply('Mute already deactive')
            group.delOffline(m.from, _group)
            m.reply(`Success BOT Online For This Group`)
        } else {
            m.reply(`*⭔ Offline Status:* ${group.cekOffline(m.from, _group) ? 'Activated' : 'Deactivated'}\n\n_Pilih enable atau disable!_`)
        }
	},
    isGroup: true,
    isAdmin: true,
    isOffline: true
}