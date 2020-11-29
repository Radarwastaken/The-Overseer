import { Command } from 'discord-akairo'
import { Message } from 'discord.js'
import { exec } from 'child_process'
import { MessageEmbed } from 'discord.js'

export default class Exec extends Command{
    public constructor() {
        super("exec", {
            aliases: ["exec", "sh", "bash", "execute", "cmd", "powershell"],
            editable: false,
            typing: true,
            category: "owner",
            userPermissions: ["ADMINISTRATOR"], //Doesn't really matter because as this is owner only command
                                                //and owner perms check are ignored, i can use this as a test command
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Execute Stuff to the terminal",
                usage: "< code >",
                examples: [
                    "git pull",
                    "npm i discord-akairo"
                ]
            },
            ownerOnly: true,
            args: [
                {
                    id: "stuff",
                    match: "content",
                    prompt: {
                        start: "What shall i execute?(you have 45 seconds)",
                        retry: "Try again...",
                        time: 4.5e4
                    }
                }
            ]
        })
    }

    public async exec(message: Message, { stuff }: { stuff: string }) {

        const embedz = new MessageEmbed()
        .addField(`Input:`, `\`\`\`powershell\n${stuff}\`\`\``)
        message.channel.send(embedz)
        exec(stuff, async (e, stdout, stderr) => {
          if (stdout.length + stderr.length > 994) {
                const embed = new MessageEmbed()
                .setAuthor(`Console log exceeds 2000 characters.`)
                message.channel.send(embed)
          } else {
            if (stdout) {
                const embed = new MessageEmbed()
                .addField(`Output:`, `\`\`\`powershell\n${stdout}\`\`\``)
                message.channel.send(embed)
            }
            if (stderr) {
                const embed = new MessageEmbed()
                .addField(`Error(s):`, `\`\`\`powershell\n${stderr}\`\`\``)
                message.channel.send(embed)
            }
            if (!stderr && !stdout) {
                message.react("✔️")
            }
          }
          if (e) {
            console.log(e)
          }
          })
        }
        
    }

