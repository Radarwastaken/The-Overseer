"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class Ping extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            editable: false,
            typing: true,
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Check the bot's Latency and API Latency"
            }
        });
    }
    async exec(message) {
        /**
         * Embed Declarations
         */
        let do_something_productive_u_piece_of_shit = new discord_js_1.MessageEmbed()
            .setAuthor("🏓Pinging...")
            .addField("API Latency:", `\`${this.client.ws.ping}ms\``);
        const msg = await message.channel.send(do_something_productive_u_piece_of_shit);
        do_something_productive_u_piece_of_shit = new discord_js_1.MessageEmbed()
            .setAuthor("🏓Pong!")
            .addField("Latency:", `\`${Math.floor(msg.createdTimestamp - ((message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp))}\`ms`, true)
            .addField("API Latency:", `\`${this.client.ws.ping}ms\``, true);
        return msg.edit(do_something_productive_u_piece_of_shit);
    }
}
exports.default = Ping;
//# sourceMappingURL=ping.js.map