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

    public exec(error, message: Message, command: Command): Promise<Message> {
        const embed = new MessageEmbed()
        .setAuthor(`Error:`)
        .setDescription(`\`\`\`cmd\n${error}\n\n\n${error.stack}\`\`\``)
        .addField("Message:", `**${message}**`, true)
        .addField("Ran By:", `- ${message.author.tag}\n- ${message.author}\n- ${message.author.id}`, true)
        .addField("Ran in:", `- ${message.guild || 'dms(atleast not in server)'}\n- ${message.guild.id || 'N/A'}`, true)
        .addField("Command:", command, true)
        .addField("Type:", "Client (client side) error", true)
        .addField(`\u200b`, `\u200b`, true)
        const errchannel = message.client.channels.cache.get(errorlogid) as TextChannel
        return errchannel.send(embed)
    }
}