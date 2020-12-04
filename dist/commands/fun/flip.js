"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
class Flip extends discord_akairo_1.Command {
    constructor() {
        super("flip", {
            aliases: ["flip", "coinflip", "coin", "toss", "hot", "cf"],
            editable: false,
            typing: true,
            category: "fun",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Flip a coin"
            },
            cooldown: 10000
        });
    }
    exec(message) {
        let fuck_tuition_tests = ["Heads", "Tails"]; //Rant: yes i had to write this during a stupid tuition test of which they are not even ready to take the 
        //Continuation: pdf of the paper through whatsapp their crappy app doesn't even do anything simple such as opening a pdf
        return message.channel.send(`${functions_1.default.choice(fuck_tuition_tests)}`); //Todo: Add 2 emotes (one for heads and other for tails) and imply it here
    }
}
exports.default = Flip;
//# sourceMappingURL=flip.js.map