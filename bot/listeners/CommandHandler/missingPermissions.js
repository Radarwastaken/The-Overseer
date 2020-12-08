const { Listener, Command } = require('discord-akairo')
const { MessageEmbed } = require('discord.js')
const permissions = require('../../assets/permissions.json')
const emojis = require('../../utils/emojis.json')

module.exports = class Cooldown extends Listener {
    constructor() {
        super("missingPermissions", {
            emitter: "CommandHandler",
            event: "missingPermissions",
            category: "command"
        })
    }

    exec(message, command, type, missing) {

        let perm = missing.map((p) => permissions[p])

        if (type === 'client') {
        const embed = new MessageEmbed()
        .setAuthor(`Missing Permssions`)
        .setDescription(`${emojis.discord.Preferences}${message.author} I need the \`${(perm.map((p) => p)).join(`, `)}\` Permission(s) to run the ${command} Command`)
        return message.channel.send(embed)
        }
        else if (type === 'user') {
            const embedtoo = new MessageEmbed()
            .setAuthor(`Missing Permissions`)
            .setDescription(`${emojis.discord.CrossMark}${message.author} You need the \`${(perm.map((p) => p)).join(`, `)}\` Permission(s) to use the ${command} Command`)
            return message.channel.send(embedtoo)
        }
        else {
            return message.channel.send(`That is sus and is not supposed to happen...(maybe it is an error)`)
        }
    }
}