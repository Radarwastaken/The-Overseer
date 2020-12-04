"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const functions_1 = tslib_1.__importDefault(require("../../utils/functions"));
class Guess extends discord_akairo_1.Command {
    constructor() {
        super("guess", {
            aliases: ["guess"],
            editable: false,
            typing: true,
            category: "fun",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Number guessing game",
                usage: "number"
            },
            args: [
                {
                    id: "num",
                    type: "number",
                    default: 69
                }
            ],
            cooldown: 10000
        });
    }
    async exec(message, { num }) {
        num = Math.ceil(num);
        /**
         * Checks
         */
        if (num < 15)
            return message.channel.send(`😞 You aren't a baby anymore go higher`);
        if (num > 69)
            return message.channel.send(`😒 Can you not keep that below 70?`);
        /**
         * Constant Declarations
         */
        let me = functions_1.default.random(1, num);
        let msg = 'asdf this will change anyways';
        if (msg) {
            if (num === 69)
                msg = functions_1.default.choice(["are my **leader**", "shall **rule the world**", "are **suffering from success**", "are the greatest of great people i have met by far"]);
            else if (num > 50)
                msg = functions_1.default.choice(["are a true **Legend**", "are a Man of virtue", "are the definition of *intelligence*", "will become **Champion**"]);
            else
                msg = functions_1.default.choice(["did play well", "did it", "played well"]);
        }
        let fail = functions_1.default.choice(["Failed Successfully", "didn't make it", "Can't win", "are a loser", "never win", "are dumb"]);
        const won_or_lost = new Promise(async (resolve) => {
            await message.channel.send(`Alright I have choosen my number between \`1\` and \`${num}\`\nStart Guessing`);
            await message.channel.awaitMessages(m => m.author.id == message.author.id && m.content, {
                max: 1
            })
                .then(collection => collection.first()?.cleanContent === me.toString() ? resolve(true) : resolve(false))
                .catch(() => resolve(false));
        });
        if (await won_or_lost) {
            return message.channel.send(`You ${msg} ${message.author}, I had chosen \`${me}\`, Good Game`);
        }
        else {
            return message.channel.send(`You ${fail} ${message.author}, The number was \`${me}\`, Definetely didn't expect this from you`);
        }
    }
}
exports.default = Guess;
//# sourceMappingURL=guess.js.map