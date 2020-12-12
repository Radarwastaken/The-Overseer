const { Listener } = require('discord-akairo')

module.exports = class CommandUnLoad extends Listener {
    constructor() {
        super("commandunload", {
            emitter: "CommandHandler",
            event: "remove",
            category: "CommandHandler"
        })
    }

    exec(command) {
        console.log(`[ Command Handler ] - Unloaded ${command}`)
    }
}