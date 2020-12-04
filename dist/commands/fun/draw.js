"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
class Draw extends discord_akairo_1.Command {
    constructor() {
        super("draw", {
            aliases: ["draw"],
            editable: false,
            typing: true,
            category: "fun",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Draw a Random card from a deck",
            }
        });
    }
    exec(message) {
        /**
         * Constant Declaration
         */
        let base = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let modifier = ["♠️", "♥️", "♣️", "♦️"];
        let i_had_to_do_this_for_embed_colors = functions_1.default.choice(modifier);
        let color;
        /**
         * Checks
         */
        if (i_had_to_do_this_for_embed_colors === "♣️" || "♠️") {
            color = "#000000";
        }
        else {
            color = "#ff0000";
        }
        /**
         * Embed Declarations (After Checks because rn checks define color of embeds)
         */
        const do_something_other_than_discord_u_retard = new discord_js_1.MessageEmbed()
            .setAuthor(`I Drew`)
            .setDescription(`**${functions_1.default.choice(base)}${i_had_to_do_this_for_embed_colors}**`)
            .setColor(color);
        return message.channel.send(do_something_other_than_discord_u_retard);
    }
}
exports.default = Draw;
//# sourceMappingURL=draw.js.map