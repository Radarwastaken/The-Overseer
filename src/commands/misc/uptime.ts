import 'discord-akairo'
import { Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js'
import { Message } from 'discord.js'
import fn from '../../utils/functions'

export default class Uptime extends Command{
    public constructor() {
        super("uptime", {
            aliases: ["uptime"],
            editable: false,
            typing: true,
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Check the bot's uptime"
            }
        })
    }

    public async exec(message: Message): Promise<Message> {

        const embed = new MessageEmbed()
        .setDescription(`**Uptime** : \`${fn.cleanTime(this.client.uptime || 0)}\``) //Fuck that i had to put 0 because it can return null
        return message.channel.send(embed)
    }
}