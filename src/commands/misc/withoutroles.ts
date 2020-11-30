import 'discord-akairo'
import { Command } from 'discord-akairo'
import { MessageEmbed } from 'discord.js'
import { Message } from 'discord.js'

export default class WithRole extends Command{
    public constructor() {
        super("withoutroles", {
            aliases: ["withoutroles"],
            editable: false,
            typing: true,
            channel: "guild",
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "List all members who have no roles"
            }
        })
    }

    public async exec(message: Message) {

        let everyone = await message.guild?.members.fetch()
        everyone = everyone?.filter(m => m.roles.cache.size === 1)
        if (everyone && everyone.size > 0 ) {
        const embed = new MessageEmbed()
        .addField(`List:`, `${everyone?.map(m => `**${m.user.tag} - **${m.user.id}`).join(`\n`)}\n\nThe above user(s) do not have any roles`)
        .setFooter(`requested by ${message.author.tag}`)

        return message.channel.send(embed)
        }
        else{
            const embed = new MessageEmbed()
            .setDescription(`😮 Looks like everyone has roles`)
            return message.channel.send(embed)
        }
        }
    }
