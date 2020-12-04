"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class AllRoles extends discord_akairo_1.Command {
    constructor() {
        super("allroles", {
            aliases: ["allroles", "listroles"],
            editable: false,
            channel: "guild",
            typing: true,
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "View All roles of the server"
            }
        });
    }
    exec(message) {
        /**
         * Format will not be followed because this command is of minimal length
         */
        if (message.guild?.roles && message.guild.roles.cache.size >= 2) { //remove the everyone role from here
            const heck_yeah_another_stupid_yet_good_command = new discord_js_1.MessageEmbed()
                .setDescription(message.guild.roles.cache.map(r => r).join(`\n`));
            return message.channel.send(heck_yeah_another_stupid_yet_good_command);
        }
        else {
            const bitch_make_some_roles = new discord_js_1.MessageEmbed()
                .setDescription(`Actually there is no role in this server...`);
            return message.channel.send(bitch_make_some_roles);
        }
    }
}
exports.default = AllRoles;
//# sourceMappingURL=allroles.js.map