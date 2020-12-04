"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class WithRole extends discord_akairo_1.Command {
    constructor() {
        super("withrole", {
            aliases: ["withrole"],
            editable: false,
            typing: true,
            channel: "guild",
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "List all members with that certain role",
                usage: "< role >"
            },
            args: [
                {
                    id: "role",
                    type: "role",
                    prompt: {
                        start: "Which role?"
                    }
                }
            ]
        });
    }
    async exec(message, { role }) {
        /**
         * Fetch everyone
         */
        await message.guild?.members.fetch();
        /**
         * Checks and Embeds
         */
        if (!message.guild?.roles.cache.get(role.id)?.members.size) {
            /**
             * Embed
             */
            const delete_that_role_u_dumbass = new discord_js_1.MessageEmbed()
                .setDescription(`😟 No Members Found With the ${role} role`);
            /**
             * Result
             */
            return message.channel.send(delete_that_role_u_dumbass);
        }
        else {
            /**
             * Embed
             */
            const group_of_retired_retards = new discord_js_1.MessageEmbed()
                .addField("List:", `${message.guild?.roles.cache.get(role.id)?.members.map(m => `**${m.user.tag} - **\`${m.user.id}\``).join(`\n`)}\n\nThe above user(s) have the ${role} role`)
                .setFooter(`requested by ${message.author.tag}`);
            /**
             * Result
             */
            return message.channel.send(group_of_retired_retards);
        }
    }
}
exports.default = WithRole;
//# sourceMappingURL=withrole.js.map