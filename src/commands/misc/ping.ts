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
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Check the API Latency of the bot",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            cooldown: 1e3 // 1 second
        })
    }

    public exec(message: Message): Promise<Message> {

        const embed = new MessageEmbed()
        .setAuthor(`🏓Pong!`)
        .setDescription(`**API Latency** : \`${this.client.ws.ping}\`ms`)
        return message.channel.send(embed)
    }
}