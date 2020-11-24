import 'discord-akairo'
import 'discord.js'
import { Command } from 'discord-akairo'
import { Message } from 'discord.js'

export default class Ping extends Command{
    public constructor() {
        super("awaiteval", {
            aliases: ["awaiteval"],
            editable: false,
            typing: true,
            category: "owner",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Await and Evaluate some piece of ~~shit~~ code",
                usage: "awaiteval < code >",
                examples: [
                    "awaiteval message.author"
                ]
            },
            ownerOnly: true,
            args: [
                {
                    id: "code",
                    match: "content",
                    prompt: {
                        start: "What should i await and evaluate?(you have 45 seconds)",
                        retry: "Try again...",
                        time: 4.5e4
                    }
                }
            ]
        })
    }

    public async exec(message: Message, { code }: { code: string }): Promise<Message> {

        return message.channel.send(`\`\`\`ts\n${await eval(code)}\`\`\``)
        
    }

}