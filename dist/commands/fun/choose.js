"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
class Draw extends discord_akairo_1.Command {
    constructor() {
        super("choose", {
            aliases: ["choose"],
            editable: false,
            typing: true,
            category: "fun",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Make the bot choose between things",
                usage: "< Arguements to choose from >"
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
         * This check has to go first with it's respective text
         */
        const give_something_to_choose_from = `Next time when you run this command, give me some options to choose from`;
        if (!functions_1.default.cleanArray(args.split(" ")))
            return message.channel.send(give_something_to_choose_from);
        /**
         * Texts look better than embeds
         */
        const thats_what_i_choose_if_u_dont_give_me_choices = `Well i chose \`${functions_1.default.cleanArray(args.split(" "))[0]}\` as you did not give me any other choice`;
        const its_my_choice = `\`${functions_1.default.choice(functions_1.default.cleanArray(args.split(" ")))}\``;
        /**
         * Checks and result
         */
        if (functions_1.default.cleanArray(args.split(" ")).length === 1)
            return message.channel.send(thats_what_i_choose_if_u_dont_give_me_choices);
        else
            return message.channel.send(its_my_choice);
    }
}
exports.default = Draw;
//# sourceMappingURL=choose.js.map