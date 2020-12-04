"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
class Ping extends discord_akairo_1.Command {
    constructor() {
        super("bettertime", {
            aliases: ["bettertime", "converttime", "cleantime"],
            editable: false,
            typing: true,
            category: "utility",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Converts time in milliseconds into a user friendly format",
                usage: "< milliseconds >"
            },
            args: [
                {
                    id: "ms",
                    type: "number",
                    prompt: {
                        start: "Input time in Milliseconds",
                        retry: "That doesn't look like a valid number.."
                    }
                }
            ]
        });
    }
    exec(message, { ms }) {
        /**
         * Constant Declatarations
         */
        let i_am_proud_of_this_function = functions_1.default.cleanTime(ms);
        /**
         * Embeds
         */
        const thats_too_cool = new discord_js_1.MessageEmbed()
            .addField("Done!", `\`${ms}ms\` is same as \`${functions_1.default.cleanTime(ms)}\``);
        const thats_too_less_man = new discord_js_1.MessageEmbed()
            .addField("Done!", `Listen, \`${ms}ms\` is less than \`1001ms\` so it's value will be less than \`1s\``);
        /**
         * Checks
         */
        if (i_am_proud_of_this_function) {
            /**
             * Result
             */
            return message.channel.send(thats_too_cool);
        }
        else {
            /**
             * Result
             */
            return message.channel.send(thats_too_less_man);
        }
    }
}
exports.default = Ping;
//# sourceMappingURL=converttime.js.map