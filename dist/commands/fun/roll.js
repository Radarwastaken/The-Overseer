"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
class Roll extends discord_akairo_1.Command {
    constructor() {
        super("roll", {
            aliases: ["roll", "diceroll", "dice"],
            editable: false,
            typing: true,
            category: "fun",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Roll a dice",
                usage: "[ number of sides ]"
            },
            args: [
                {
                    id: "num",
                    type: "number",
                    default: 6
                }
            ],
            cooldown: 10000
        });
    }
    exec(message, { num }) {
        /**
         * Constant Declarations
         */
        num = Math.ceil(num);
        /**
         * Check
         */
        if (num < 3)
            return message.channel.send(`Well you can't roll a dice with less than 3 sides...`);
        let me = functions_1.default.random(1, num);
        return message.channel.send(`\`${me}\``);
    }
}
exports.default = Roll;
//# sourceMappingURL=roll.js.map