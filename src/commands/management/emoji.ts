import 'discord-akairo'
import { Command } from 'discord-akairo'
import { Message, GuildEmoji } from 'discord.js'

export default class Emoji extends Command{
    public constructor() {
        super("emoji", {
            aliases: ["emoji", "emote"],
            editable: false,
            typing: true,
            channel: "guild",
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Get emote info",
                usage: "< emoji >"
            },
            args: [
                {
                    id: "emoji",
                    type: "emoji",
                    prompt: {
                        start: "What emote would you like to get info of"
                    }
                }
            ]
        })
    }

    public async exec(message: Message, { emoji }: { emoji: GuildEmoji}){
        message.channel.send(emoji.id)
    }
}