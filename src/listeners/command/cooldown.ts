import 'discord-akairo'
import { Message } from 'discord.js';
import { Listener, Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js';

export default class Cooldown extends Listener {
    public constructor() {
        super("cooldown", {
            emitter: "cmdHandler",
            event: "cooldown",
            category: "command"
        })
    }

    public exec(message: Message, command: Command, cooldown: number): Promise<Message> {
        const cd = Math.ceil(cooldown)/1000
        const embed = new MessageEmbed()
        .setAuthor(`Too Quick`)
        .setDescription(`<@!${message.author.id}> You need to wait \`${cd}\`s before using ${command} Command again`)
        return message.channel.send(embed)
    }
}