const { Listener } = require('discord-akairo')

module.exports = class ListenerLoad extends Listener {
    constructor() {
        super("listenerload", {
            emitter: "ListenerHandler",
            event: "load",
            category: "ListenerHandler"
        })
    }

    exec(listener, isReload) {
        if (!isReload) return console.log(`[ Listener Handler ] - Loaded ${listener}`)
        else return console.log(`[ Listener Handler ] - Reloaded ${listener}`)
    }
}