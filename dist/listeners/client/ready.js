"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("discord-akairo");
const discord_akairo_1 = require("discord-akairo");
class Ready extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        console.log(`${this.client.user?.tag} is ready now...`);
        this.client.user?.setActivity({
            name: "Clash of Clans",
            type: 'COMPETING'
        });
    }
}
exports.default = Ready;
//# sourceMappingURL=ready.js.map