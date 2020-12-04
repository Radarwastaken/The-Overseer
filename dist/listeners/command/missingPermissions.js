"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
const permissions = tslib_1.__importStar(require("../../assets/permssions.json"));
class Cooldown extends discord_akairo_1.Listener {
    constructor() {
        super("missingPermissions", {
            emitter: "cmdHandler",
            event: "missingPermissions",
            category: "command"
        });
    }
    exec(message, command, type, missing) {
        let perm = missing.map((p) => permissions[p]);
        if (type === 'client') {
            const embed = new discord_js_1.MessageEmbed()
                .setAuthor(`Missing Permssions`)
                .setDescription(`${message.author} I need the \`${(perm.map((p) => ` ${p}`)).toString().slice(1)}\` Permission(s) to run the ${command} Command`);
            return message.channel.send(embed);
        }
        else if (type === 'user') {
            const embedtoo = new discord_js_1.MessageEmbed()
                .setAuthor(`Missing Permissions`)
                .setDescription(`${message.author} You need the \`${(perm.map((p) => ` ${p}`)).toString().slice(1)}\` Permission to run the ${command} Command`);
            return message.channel.send(embedtoo);
        }
        else {
            return message.channel.send(`That is sus and is not supposed to happen...(maybe it is an error)`);
        }
    }
}
exports.default = Cooldown;
//# sourceMappingURL=missingPermissions.js.map