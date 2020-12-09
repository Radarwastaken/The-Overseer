const { Command } = require('discord-akairo')
const { MessageEmbed } = require('discord.js')

module.exports = class Ping extends Command{
    constructor() {
        super("ping", {
            aliases: ["ping"],
            editable: false,
            typing: true,
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Check the bot's Latency and API Latency"
            }
        })
    }

    async exec(message) {

        const msg = await message.channel.send(`Pong?`)

        const do_something_productive_u_piece_of_shit = new MessageEmbed()
        .setAuthor("🏓Pong!")
        .addField("Latency:", `\`${Math.floor(msg.createdTimestamp - ((message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp))}\`ms`, true)
        .addField("API Latency:", `\`${this.client.ws.ping}ms\``, true)

        return msg.edit(do_something_productive_u_piece_of_shit)
    }
}