const { Listener, Command } = require('discord-akairo')
const { MessageEmbed } = require( 'discord.js')
const fn = require('../../utils/functions')
const emojis = require('../../utils/emojis.json')

module.exports = class Cooldown extends Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        })
    }

    exec() {
        console.log(`${this.client.user?.tag}: Huh?`)
        this.client.user?.setActivity({
            type: fn.choice(['COMPETING',/*'WATCHING',*/'PLAYING'/*,'LISTENING'*/]),
            name: fn.choice(['Clash of clans', 'CLash Royale', 'Brawl Stars'])
        })
    }
}