const { Command } = require('discord-akairo');
const emojis = require('../../utils/emojis.json')
const dmd = require('discord-md-tags')

module.exports = class Eval extends Command{
    constructor() {
        super("eval", {
            aliases: ["eval"],
            editable: false,
            typing: true,
            category: "owner",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Evaluate some code",
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

    async exec(message, { code }) {

        try {
        let t1 = new Date()
        let evalled = eval(code)
        let t2 = new Date()
        let tt = t2 - t1
        return message.channel.send(`*Evaluated in ${tt}ms*\n${dmd.codeblock('js') `${evalled}` }`)
        } catch(err) {
            return message.channel.send(`${emojis.basic.error} Error:\n${dmd.codeblock('js') `${err}`}`)
        }
        
    }
}