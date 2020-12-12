const { Commsnd } = require('discord-akairo')

module.exports = class Template extends Command {
    constructor() {
        super('Command ID', {
            aliases: ['ffs keep this a non-empty array even if it has only one element'],
            category: 'I have kept it automated so remove this',
            channel: 'for guild only commands keep guild for dm only commands (lmfao why would you) keep dm',
            clientPermission: ['ffs keep this also an array'],
            cooldown: 'a number in milliseconds without the \'',
            description: {
                
            },
            editable: 'keep this boolean (true or false)',
            typing: "keep this true mostly",
            args: [
                //this has to be an array of objects
                {
                    //see the docs for more options basic is
                    id: 'this_will_be_used_in_exec_function',
                    type: 'can be any valid type (number, string, GuildEmoji, etc)'
                }
            ]
        })
    }
    exec(message, { this_will_be_used_in_exec_function }) {
        message.channel.send(`I swear if you stop copy pasting stuff - ${this_will_be_used_in_exec_function}`)
    }
}