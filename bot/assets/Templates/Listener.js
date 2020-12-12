const { Listener } = require('discord-akairo')

module.export = class Template extends Listener {
    constructor() {
        super('Listener ID', {
            emitter: "Event Emitter",
            event: "The event itself",
            category: "Mostly the folder name itself"
        })
    }
    exec(params) {
        console.log(`Do something with ${params} you moron. Don't just copy paste stuff`)
    }
}