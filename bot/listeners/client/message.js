const { Listener } = require('discord-akairo')
const { MessageEmbed } = require('discord.js')

module.exports = class Message extends Listener {
    constructor() {
        super('message', {
            emitter: "client",
            event: "message",
            category: "client"
        })
    }
    exec(message) {
        if(!message.author.bot && message.content === `<@${this.client.user?.id}>` || message.content === `<@!${this.client.user?.id}>`) {
            const myprefix = new MessageEmbed()
            .setTitle(`My prefix for this server is \`${this.client.CommandHandler.prefix}\``)
            .setFooter(`You can do ${this.client.CommandHandler.prefix}help for more help`)
            try {
                message.channel.send(myprefix)
            } catch {
                //HaHaMiSsInG PeRmIsSiOnS
            }
        }
    }
}