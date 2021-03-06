import 'discord-akairo'
import 'discord.js'
import { Command } from 'discord-akairo'
import { Message } from 'discord.js'
import { performance } from 'perf_hooks'

export default class AsyncEval extends Command{
    public constructor() {
        super("asynceval", {
            aliases: ["asynceval"],
            editable: false,
            typing: true,
            category: "owner",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Async method to Evaluate some piece of ~~shit~~ code",
                usage: "< code >",
                examples: [
                    "await message.channel.send(\"Hi!\")"
                ]
            },
            ownerOnly: true,
            args: [
                {
                    id: "code",
                    match: "content",
                    prompt: {
                        start: "What should i evaluate with async?(you have 45 seconds)",
                        retry: "Try again...",
                        time: 4.5e4
                    }
                }
            ]
        })
    }

    public async exec(message: Message, { code }: { code: string }): Promise<Message> {

        let t1 = performance.now()
        let evalled = await eval("(async () => {" + code + "})()")
        let t2 = performance.now()
        let tt = t2 - t1

        return message.channel.send(`*Evaluated in ${tt}ms*\n\`\`\`ts\n${evalled}\`\`\``)
        
    }

}