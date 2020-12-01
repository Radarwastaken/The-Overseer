import 'discord-akairo'
import { Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js'
import { Message } from 'discord.js'

export default class Ping extends Command{
    public constructor() {
        super("ping", {
            aliases: ["ping"],
            editable: false,
            typing: true,
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Check the API Latency of the bot"
            }
        })
    }

    public exec(message: Message): Promise<Message> {

        /**
         * Embed Declarations
         */
        const do_something_productive_u_piece_of_shit = new MessageEmbed()
        .setAuthor(`🏓Pong!`)
        .setDescription(`**API Latency** : \`${this.client.ws.ping}ms\``)

        /**
         * Possibly the result
         */
        return message.channel.send(do_something_productive_u_piece_of_shit)
    }
}