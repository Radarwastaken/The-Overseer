import 'discord-akairo'
import { Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js'
import { Message } from 'discord.js'
import fn from '../../utils/functions'

export default class BotInfo extends Command{
    public constructor() {
        super("botinfo", {
            aliases: ["botinfo"],
            editable: false,
            typing: true,
            category: "info",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Get the bot's stats info etc",
            }
        })
    }

    public exec(message: Message): Promise<Message> {

    /**
     * Embed Declarations
     */
    const embed = new MessageEmbed()
    .addField("Statistics",
    `Users: \`${this.client.users.cache.size}\`
    Servers: \`${this.client.guilds.cache.size}\`
    Uptime: \`${fn.cleanTime(this.client.uptime || 0)}\`
    Latency: \`${this.client.ws.ping}ms\`
    Average Server Size: \`${this.client.users.cache.size / this.client.guilds.cache.size}\``)
    .setFooter(`The Above stats are cached stats and the actual stats may vary due to caching`)

    return message.channel.send(embed)
    }
}