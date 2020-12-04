"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
require("discord.js");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const discord_akairo_2 = require("discord-akairo");
class Reload extends discord_akairo_1.Command {
    constructor() {
        super("reload", {
            aliases: ["reload"],
            editable: false,
            typing: true,
            category: "owner",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Reload a command or a listener",
                usage: "< command | listener >",
                examples: [
                    "ping",
                    "cmdError"
                ]
            },
            args: [
                {
                    id: "stuff",
                    type: discord_akairo_2.Argument.union("command", "listener"),
                    prompt: {
                        start: "What do you want me to reload?(you have 45 seconds)",
                        retry: "Try again...",
                        time: 4.5e4
                    }
                }
            ],
            ownerOnly: true,
        });
    }
    async exec(message, { stuff }) {
        try {
            await stuff.reload();
        }
        catch (err) {
            const embed = new discord_js_1.MessageEmbed()
                .addField(`Error Reloading ${stuff.id}`, err);
            await message.channel.send(embed);
        }
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`${stuff.id} has been Reloaded Successfully`);
        return message.channel.send(embed);
    }
}
exports.default = Reload;
//# sourceMappingURL=reload.js.map