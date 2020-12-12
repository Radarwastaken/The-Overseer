const { Listener } = require('discord-akairo')

module.exports = class ListenerUnLoad extends Listener {
    constructor() {
        super("listenerunload", {
            emitter: "ListenerHandler",
            event: "remove",
            category: "ListenerHandler"
        })
    }

    exec(listener) {
        console.log(`[ Listener Handler ] - Unloaded ${listener}`)
    }
}