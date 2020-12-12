const { Listener } = require('discord-akairo')

module.exports = class CommandLoad extends Listener {
    constructor() {
        super("commandload", {
            emitter: "CommandHandler",
            event: "load",
            category: "CommandHandler"
        })
    }

    exec(command, isReload) {
        if (!isReload) return console.log(`[ Command Handler ] - Loaded ${command}`)
        else return console.log(`[ Command Handler ] - Reloaded ${command}`)
    }
}