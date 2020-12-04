"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_js_1 = require("discord.js");
class LockEmote extends discord_akairo_1.Command {
    constructor() {
        super("lockemote", {
            aliases: ["lockemote", "lockemoji"],
            editable: false,
            typing: true,
            channel: "guild",
            category: "management",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            userPermissions: ["MANAGE_EMOJIS", "MANAGE_ROLES"],
            description: {
                content: "Lock an emote to a certain role",
                usage: "< emoji > < role >"
            },
            args: [
                {
                    id: "emoji",
                    type: "emoji",
                    prompt: {
                        start: "What emote would you like to lock?"
                    }
                },
                {
                    id: "role",
                    type: "role",
                    prompt: {
                        start: "What role would you like to lock that emoji with?"
                    }
                }
            ]
        });
    }
    async exec(message, { emoji, role }) {
        /**
         * Check
         */
        if (!(emoji.guild.id === message.guild?.id))
            return message.reply("I can't do anything with emotes from other servers");
        /**
         * Embed Declarations
         */
        const r_u_sure = new discord_js_1.MessageEmbed()
            .setTitle("Are you sure you want to lock this emote to that role?(`y`/`n`)")
            .addField("Emoji:", emoji, true)
            .addField("Role:", role, true)
            .setFooter(`⚠️Warning⚠️\nThat emote will be locked to that specific role\n(not even the server owner can access it without that role)`)
            .setColor(message.guild.me?.displayHexColor || "#000000");
        const i_feel_like_god_today = new discord_js_1.MessageEmbed()
            .addField(`🔒Emote Locked🔒`, `${emoji} is now locked to ${role}`)
            .setFooter(`Note: You might have to reload discord for changes to take place`)
            .setColor(message.guild.me?.displayHexColor || "#000000");
        const i_knew_you_are_a_retard = new discord_js_1.MessageEmbed()
            .setDescription("😒 I was pretty sure you were going to cancel")
            .setColor(message.guild.me?.displayHexColor || "#000000");
        /**
         * Confirmation
         */
        const confirmation = new Promise(async (resolve) => {
            await message.channel.send(r_u_sure);
            await message.channel.awaitMessages(m => m.author.id == message.author.id && ["y", "n", "yes", "no"].includes(m.content.toLowerCase()), {
                max: 1,
            })
                .then(collection => ["y", "yes"].includes(collection.first()?.cleanContent?.toLowerCase() ?? "") ? resolve(true) : resolve(false))
                .catch(() => resolve(false));
        });
        /**
         * Check for confirmation and execute result
         */
        if (await confirmation) {
            await emoji.roles.set([role]);
            return message.channel.send(i_feel_like_god_today);
        }
        else {
            return message.channel.send(i_knew_you_are_a_retard);
        }
    }
}
exports.default = LockEmote;
//# sourceMappingURL=lockemote.js.map