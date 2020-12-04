"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class Msg extends discord_akairo_1.Listener {
    constructor() {
        super("message", {
            emitter: "client",
            event: "message",
            category: "client"
        });
    }
    exec(message) {
        if (!message.author.bot && message.content === `<@${this.client.user.id}>` || message.content === `<@!${this.client.user.id}>`) {
            const yes_its_me = new discord_js_1.MessageEmbed()
                .setDescription(`My Prefix here is \`${this.client.cmdHandler.prefix}\`.`)
                .setFooter(`Do ${this.client.cmdHandler.prefix}help for more help`);
            message.channel.send(yes_its_me);
        }
    }
}
exports.default = Msg;
//# sourceMappingURL=message.js.map