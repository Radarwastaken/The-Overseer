const { Listener, Command } = require('discord-akairo')
const { MessageEmbed } = require( 'discord.js')
const fn = require('../../utils/functions')
const emojis = require('../../utils/emojis.json')

module.exports = class Cooldown extends Listener {
    constructor() {
        super("cooldown", {
            emitter: "CommandHandler",
            event: "cooldown",
            category: "CommandHandler"
        })
    }

    exec(message, command, cooldown) {
        const embed = new MessageEmbed()
        .setDescription(`${emojis.discord.slowmode}${command.aliases[0]} ${message.author} wait \`${this.client.fn.cleanTime(cooldown) ? `${fn.cleanTime(cooldown)}` : `${cooldown}ms`}\` before using ${command.aliases[0]} Command again.`)
        return message.channel.send(embed)
    }
}