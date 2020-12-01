import 'discord-akairo'
import { Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js'
import { Message } from 'discord.js'
import fn from '../../utils/functions'

export default class Draw extends Command{
    public constructor() {
        super("choose", {
            aliases: ["choose"],
            editable: false,
            typing: true,
            category: "fun",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Make the bot choose between things",
                usage: "< Arguements to choose from >"
            },
            args: [
                {
                    id: "args",
                    match: "rest",
                }
            ]
        })
    }

    public exec(message: Message, { args }: { args: string[]}): Promise<Message> {
        args = fn.cleanArray(args)

        /**
         * Embeds
         */
        const give_something_to_choose_from = new MessageEmbed()
        .setDescription(`Atleast give me something to choose from`)

        const thats_what_i_choose_if_u_dont_give_me_choices = new MessageEmbed()
        .setDescription(`Well i chose ${args[0]} as you did not give me any other choice`)

        const its_my_choice = new MessageEmbed()
        .setDescription(`I Chose \`${fn.choice(args)}\``)

        /**
         * Checks
         */
        if (!args) return message.channel.send(give_something_to_choose_from)
        if(args.length === 1) return message.channel.send(thats_what_i_choose_if_u_dont_give_me_choices)
        else return message.channel.send(its_my_choice)

    }
}