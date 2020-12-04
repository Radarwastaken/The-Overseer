"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const child_process_1 = require("child_process");
class Exec extends discord_akairo_1.Command {
    constructor() {
        super("exec", {
            aliases: ["exec", "sh", "bash", "execute", "cmd", "powershell"],
            editable: false,
            typing: true,
            category: "owner",
            userPermissions: ["ADMINISTRATOR"],
            //and owner perms check are ignored, i can use this as a test command
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "ADD_REACTIONS"],
            description: {
                content: "Execute Stuff to the terminal",
                usage: "< code >",
                examples: [
                    "git pull",
                    "npm i discord-akairo"
                ]
            },
            ownerOnly: true,
            args: [
                {
                    id: "stuff",
                    match: "content",
                    prompt: {
                        start: "What shall i execute?(you have 45 seconds)",
                        retry: "Try again...",
                        time: 4.5e4
                    }
                }
            ]
        });
    }
    async exec(message, { stuff }) {
        message.channel.send(`**Input:**\n\`\`\`powershell\n${stuff}\`\`\``);
        child_process_1.exec(stuff, async (e, stdout, stderr) => {
            if (stdout.length + stderr.length > 984) {
                message.channel.send(`Console Log Exceeds 2000 Characters...`);
            }
            else {
                if (stdout) {
                    message.channel.send(`**Output:**\n\`\`\`powershell\n${stdout}\`\`\``);
                }
                if (stderr) {
                    message.channel.send(`**Error(s):**\n\`\`\`powershell\n${stderr}\`\`\``);
                }
                if (!stderr && !stdout) {
                    message.react("✔️");
                }
            }
            if (e) {
                message.channel.send(`**Error:**\n\`\`\`\n${e}\`\`\``);
            }
        });
    }
}
exports.default = Exec;
//# sourceMappingURL=exec.js.map