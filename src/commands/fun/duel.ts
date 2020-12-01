import 'discord-akairo'
import { Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js'
import { Message } from 'discord.js'

export default class Duel extends Command{
    public constructor() {
        super("duel", {
            aliases: ["duel", "battle", "fight"],
            editable: false,
            typing: true,
            channel: "guild",
            category: "fun",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Duel another member",
                usage: "< member >"
            },
            args: [
                {
                    id: "member",
                    type: "member",
                    prompt: {
                        start: "Whom would you like to duel with?"
                    }
                }
            ],
            cooldown: 69000//Don't ask me why
        })
    }

    public async exec(message: Message): Promise<Message> {

        /**
         * Constant Declarations
         */
        //Health
        let p1health = 100
        let p2health = 100
        //Damage
        //let p1dmg
        //let p2dmg

        
        do {
            
        } while (p1health !=0 || p2health != 0);
        /**
         * Embed Declarations
         */
        const do_something_productive_u_piece_of_shit = new MessageEmbed()
        .setAuthor(`🏓Pong!`)
        .setDescription(`**API Latency** : \`${this.client.ws.ping}ms\``)

        /**
         * Possibly the result
         */
        return message.channel.send(do_something_productive_u_piece_of_shit)
    }
}