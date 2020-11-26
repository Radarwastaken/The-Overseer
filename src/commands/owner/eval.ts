import 'discord-akairo'
import 'discord.js'
import { Command } from 'discord-akairo'
import { Message } from 'discord.js'

export default class Eval extends Command{
    public constructor() {
        super("eval", {
            aliases: ["eval"],
            editable: false,
            typing: true,
            category: "owner",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Evaluate some piece of ~~shit~~ code",
                usage: "< code >",
                examples: [
                    "message.author"
                ]
            },
            ownerOnly: true,
            args: [
                {
                    id: "code",
                    match: "content",
                    prompt: {
                        start: "What should i evaluate?(you have 45 seconds)",
                        retry: "Try again...",
                        time: 4.5e4
                    }
                }
            ]
        })
    }

    public async exec(message: Message, { code }: { code: string }): Promise<Message> {

        return message.channel.send(`\`\`\`ts\n${eval(code)}\`\`\``)
        
    }

}