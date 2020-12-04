"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
require("../../Config");
const Config_1 = require("../../Config");
class clientError extends discord_akairo_1.Listener {
    constructor() {
        super("clienterror", {
            emitter: "client",
            event: "error",
            category: "client"
        });
    }
    exec(error, message, command) {
        const token = this.client.token?.split('').join('[^]{0,2}');
        const rev = this.client.token?.split('').reverse().join('[^]{0,2}');
        const tokenRegex = new RegExp(`${token}|${rev}`, 'g');
        const embedtoo = new discord_js_1.MessageEmbed()
            .setDescription(`There is an Error with that command`)
            .setFooter(`Report that to ${message.client.users.cache.get(Config_1.ownerIDs[0])?.username}`);
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`Error:`)
            .setDescription(`\`\`\`ts\n${error.toString().replace(tokenRegex, "TOKEN")}\n\n\n${error.stack?.toString().replace(tokenRegex, "TOKEN")}\`\`\``)
            .addField("Message Content:", `**${message.content.replace(tokenRegex, "**TOKEN**")}**`, true)
            .addField("Ran By:", `- ${message.author.tag}\n- ${message.author}\n- ${message.author.id}`, true)
            .addField("Ran in:", `- ${message.guild || 'dms(atleast not in server)'}\n- ${message.guild?.id ?? 'N/A'}`, true)
            .addField("Command:", command, true)
            .addField("Type:", "Client (client side) error", true)
            .addField(`\u200b`, `\u200b`, true);
        const errchannel = message.client.channels.cache.get(Config_1.errorlogid);
        message.channel.send(embedtoo);
        return errchannel.send(embed);
    }
}
exports.default = clientError;
//# sourceMappingURL=error.js.map