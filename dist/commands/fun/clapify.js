"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class Clapify extends discord_akairo_1.Command {
    constructor() {
        super("Clapify", {
            aliases: ["clapify", "clap", "claptext"],
            editable: false,
            typing: true,
            category: "fun",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Don't 👏 ask 👏 me 👏 to 👏describe 👏 this",
                usage: "< Arguements to *clap* with >"
            },
            args: [
                {
                    id: "args",
                    match: "rest",
                }
            ]
        });
    }
    exec(message, { args }) {
        /**
         * Constant Declaration
         */
        let i_clap;
        /**
         * Embeds Declaration
         */
        const claps_where = new discord_js_1.MessageEmbed()
            .setDescription(`Give 👏 me 👏 something`);
        /**
         * Checks
         */
        if (!args)
            return message.channel.send(claps_where);
        /**
         * Calculations or whatever you call it
         */
        if (args.split(" ").length === 1)
            i_clap = args[0].split(" ").join(" 👏 ");
        else
            i_clap = args.split(" ").join(" 👏 ");
        /**
         * Result
         * This Embed needs to be here.
         */
        const me_clap = new discord_js_1.MessageEmbed()
            .setDescription(i_clap);
        return message.channel.send(me_clap);
    }
}
exports.default = Clapify;
//# sourceMappingURL=clapify.js.map