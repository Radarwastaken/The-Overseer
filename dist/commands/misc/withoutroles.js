"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class WithRole extends discord_akairo_1.Command {
    constructor() {
        super("withoutroles", {
            aliases: ["withoutroles"],
            editable: false,
            typing: true,
            channel: "guild",
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "List all members who have no roles"
            }
        });
    }
    async exec(message) {
        /**
         * Fetch Everyone
         */
        await message.guild?.members.fetch();
        /**
         * Constant Declarations and Checks
         */
        let board_of_retards = await message.guild?.members.fetch();
        board_of_retards = board_of_retards?.filter(m => m.roles.cache.size === 1);
        /**
         * More Checks And Embeds
         */
        if (board_of_retards && board_of_retards.size > 0) {
            /**
             * Embed
             */
            const all_of_u_r_retards = new discord_js_1.MessageEmbed()
                .addField(`List:`, `${board_of_retards?.map(m => `**${m.user.tag} - **${m.user.id}`).join(`\n`)}\n\nThe above user(s) do not have any roles`)
                .setFooter(`requested by ${message.author.tag}`);
            /**
             * Result
             */
            return message.channel.send(all_of_u_r_retards);
        }
        else {
            /**
             * Embed
             */
            const u_just_a_lonely_bitch = new discord_js_1.MessageEmbed()
                .setDescription(`😮 Looks like everyone has roles`);
            /**
             * Result
             */
            return message.channel.send(u_just_a_lonely_bitch);
        }
    }
}
exports.default = WithRole;
//# sourceMappingURL=withoutroles.js.map