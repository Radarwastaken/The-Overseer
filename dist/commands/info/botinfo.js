"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const djs = tslib_1.__importStar(require("discord.js"));
const da = tslib_1.__importStar(require("discord-akairo"));
const ts = tslib_1.__importStar(require("typescript"));
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
const os = tslib_1.__importStar(require("os"));
class BotInfo extends discord_akairo_1.Command {
    constructor() {
        super("botinfo", {
            aliases: ["botinfo"],
            editable: false,
            typing: true,
            category: "info",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Get the bot's stats info etc",
            }
        });
    }
    exec(message) {
        /**
         * Embed Declarations
         */
        const embed = new discord_js_1.MessageEmbed()
            .addField("❯ Statistics", `Users: \`${this.client.users.cache.size}\`
    Servers: \`${this.client.guilds.cache.size}\`
    Uptime: \`${functions_1.default.cleanTime(this.client.uptime || 0)}\`
    Latency: \`${this.client.ws.ping}ms\`
    Average Server Size: \`${this.client.users.cache.size / this.client.guilds.cache.size}\``)
            .addField("❯ Technical Statistics", `OS Version: \`${os.version}\`
    Total Memory: \`${(((os.totalmem() / 1024) / 1024) / 1204).toFixed(2)} GB\`
    Free Memory: \`${(((os.freemem() / 1024) / 1024) / 1204).toFixed(2)} GB\`
    Platform: \`${os.platform}\`
    Node JS Version: \`${process.version}\`
    Discord.js Version: \`${djs.version}\`
    Discord Akairo Version: \`${da.version}\`
    Typescript Version: \`${ts.version}\``)
            .setFooter(`The Above stats are cached stats and the actual stats may vary`);
        /**
         * Result
         */
        return message.channel.send(embed);
    }
}
exports.default = BotInfo;
//# sourceMappingURL=botinfo.js.map