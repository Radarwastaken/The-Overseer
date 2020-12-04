"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
const discord_akairo_2 = require("discord-akairo");
const discord_akairo_3 = require("discord-akairo");
const Config_1 = require("./Config");
class Client extends discord_akairo_3.AkairoClient {
    constructor(config) {
        super({
            ownerID: Config_1.ownerIDs,
        });
        this.eventHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: './listeners'
        });
        this.cmdHandler = new discord_akairo_2.CommandHandler(this, {
            directory: './commands',
            prefix: Config_1.prefix,
            ignoreCooldown: Config_1.ownerIDs,
            ignorePermissions: Config_1.ownerIDs,
            allowMention: true,
            blockBots: true,
            blockClient: true,
            commandUtil: true,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`stop\` to stop the command`,
                    retry: `Try again...`,
                    timeout: `Alright then Ignore me even i don't have enough free time to keep waiting for you`,
                    ended: `You have exceeded the maximum amount of retries...`,
                    cancel: `Alright then Stopped the command`,
                    cancelWord: 'stop',
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            }
        });
        this.config = config;
    }
    async _init() {
        this.cmdHandler.useListenerHandler(this.eventHandler);
        this.eventHandler.setEmitters({
            cmdHandler: this.cmdHandler,
            eventHandler: this.eventHandler,
            process
        });
        this.cmdHandler.loadAll();
        this.eventHandler.loadAll();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = Client;
//# sourceMappingURL=Client.js.map