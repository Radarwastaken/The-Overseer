import 'discord-akairo'
import { Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js'
import { Message } from 'discord.js'
import fn from '../../utils/functions'

export default class Ping extends Command{
    public constructor() {
        super("bettertime", {
            aliases: ["bettertime", "converttime", "cleantime"],
            editable: false,
            typing: true,
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Converts time in milliseconds into a user friendly format",
                usage: "< milliseconds >"
            },
            args: [
                {
                    id: "ms",
                    type: "number",
                    prompt: {
                        start: "Input time in Milliseconds",
                        retry: "That doesn't look like a valid number.."
                    }
                }
            ]
        })
    }

    public exec(message: Message, { ms }: { ms: number }): Promise<Message> {

        let bettime = fn.cleanTime(ms)
        if (bettime) {
        const embed = new MessageEmbed()
        .addField("Done!",`\`${ms}ms\` is same as \`${fn.cleanTime(ms)}\``)
        return message.channel.send(embed)
        } else {
            const embed = new MessageEmbed()
            .addField("Done!", `Listen, \`${ms}\` is less than \`1000\` so it's value will be less than \`0s\``)
            return message.channel.send(embed)
        }
    }
}