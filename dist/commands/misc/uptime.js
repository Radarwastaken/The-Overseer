"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
class Uptime extends discord_akairo_1.Command {
    constructor() {
        super("uptime", {
            aliases: ["uptime"],
            editable: false,
            typing: true,
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Check the bot's uptime"
            }
        });
    }
    async exec(message) {
        /**
         * Embed Declarations
         */
        const i_swear_if_you_dont_do_something = new discord_js_1.MessageEmbed()
            .setDescription(`**Uptime** : \`${functions_1.default.cleanTime(this.client.uptime || 0)}\``);
        /**
         * Result
         */
        return message.channel.send(i_swear_if_you_dont_do_something);
    }
}
exports.default = Uptime;
//# sourceMappingURL=uptime.js.map