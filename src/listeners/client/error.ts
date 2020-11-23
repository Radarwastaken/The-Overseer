import 'discord-akairo'
import { Message, TextChannel } from 'discord.js';
import { Listener, Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js';
import '../../Config'
import { errorlogid } from '../../Config';

export default class Error extends Listener {
    public constructor() {
        super("clienterror", {
            emitter: "client",
            event: "error",
            category: "client"
        })
    }

    public exec(error: Error, message: Message, command: Command): Promise<Message> {
        const embed = new MessageEmbed()
        .setAuthor(`Error:`)
        .setDescription(`\`\`\`ts\n${error}\`\`\``)
        .addField("Message:", `${message}`)
        .addField("Ran By:", `- ${message.author.tag}\n- ${message.author}\n- ${message.author.id}`)
        .addField("Ran in:", `${message.guild || 'dms(atleast not in server)'}`)
        .addField("Command:", command)
        .addField("Type:", "Client (client side) error")
        const errchannel = message.client.channels.cache.get(errorlogid) as TextChannel
        return errchannel.send(embed)
    }
}