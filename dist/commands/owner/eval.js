"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
require("discord.js");
const discord_akairo_1 = require("discord-akairo");
const perf_hooks_1 = require("perf_hooks");
class Eval extends discord_akairo_1.Command {
    constructor() {
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
        });
    }
    async exec(message, { code }) {
        let t1 = perf_hooks_1.performance.now();
        let evalled = eval(code);
        let t2 = perf_hooks_1.performance.now();
        let tt = t2 - t1;
        return message.channel.send(`*Evaluated in ${tt}ms*\n\`\`\`js\n${evalled}\`\`\``);
    }
}
exports.default = Eval;
//# sourceMappingURL=eval.js.map