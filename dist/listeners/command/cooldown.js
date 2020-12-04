"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
class Cooldown extends discord_akairo_1.Listener {
    constructor() {
        super("cooldown", {
            emitter: "cmdHandler",
            event: "cooldown",
            category: "command"
        });
    }
    exec(message, command, cooldown) {
        const embed = new discord_js_1.MessageEmbed()
            .setAuthor(`Too Quick`)
            .setDescription(`${message.author} Can you not wait for \`${functions_1.default.cleanTime(cooldown)}\`s before using ${command.aliases[0]} Command again?`);
        return message.channel.send(embed);
    }
}
exports.default = Cooldown;
//# sourceMappingURL=cooldown.js.map