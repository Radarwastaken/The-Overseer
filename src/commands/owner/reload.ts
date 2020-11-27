import 'discord-akairo'
import 'discord.js'
import { Command } from 'discord-akairo'
import { Message } from 'discord.js'
import { Listener } from 'discord-akairo'

export default class Reload extends Command{
    public constructor() {
        super("reload", {
            aliases: ["reload"],
            editable: false,
            typing: true,
            category: "owner",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Reload a command or litener",
                usage: "< comamnd | listener >",
                examples: [
                    "message.author"
                ]
            },
            ownerOnly: true,
            args: [
                {
                    id: "stuff",
                    match: "content",
                    type: "Command | Listener | all",
                    prompt: {
                        start: "What to reload?(you have 45 seconds)",
                        retry: "Try again...",
                        time: 4.5e4,
                    },
                }
            ]
        })
    }

    public async exec(message: Message, { stuff }: { stuff: Command | Listener }): Promise<Message> {

        return message.channel.send(`you wanted to reload ${stuff}`)
    }

}