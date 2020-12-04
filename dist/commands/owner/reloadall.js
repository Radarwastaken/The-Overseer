"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
require("discord.js");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class Reload extends discord_akairo_1.Command {
    constructor() {
        super("reloadall", {
            aliases: ["reloadall"],
            editable: false,
            typing: true,
            category: "owner",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Reload everything"
            },
            ownerOnly: true,
        });
    }
    async exec(message) {
        await this.client.cmdHandler.reloadAll();
        await this.client.eventHandler.reloadAll();
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`Reloaded Everything`);
        return message.channel.send(embed);
    }
}
exports.default = Reload;
//# sourceMappingURL=reloadall.js.map