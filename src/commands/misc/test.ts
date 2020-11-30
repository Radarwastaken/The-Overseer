import 'discord-akairo'
import { Command } from 'discord-akairo'
import { MessageAttachment } from 'discord.js'
import { Message } from 'discord.js'
import 'canvas'
import { createCanvas, loadImage } from 'canvas'

export default class Test extends Command{
    public constructor() {
        super("test", {
            aliases: ["test"],
            editable: false,
            typing: true,
            category: "misc",
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            description: {
                content: "Test Command"
            }
        })
    }

    public async exec(message: Message): Promise<Message> {

        const canvas = createCanvas(500, 200)
        const ctx = canvas.getContext('2d')
        const backdrop = loadImage("fuckyouwait")
        ctx.drawImage(backdrop, 0, 0, canvas.width, canvas.height)
        ctx.strokeStyle = "#ff0000"
        ctx.strokeRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#ff00ff"

        let size1 = 40
        let size2 = 30
        let size3 = 30

        let name = message.member!.user.tag

        do {
            ctx.font = `${size1 -= 5}px sans-serif`
        } while (ctx.measureText(name).width > canvas.width - 255)//Fuck i had to put yo there because it can return undefied while it can't

        let notnamebutid = message.member!.user.id

        do {
            ctx.font = `${size2 -= 5}px sans-serif`
        } while (ctx.measureText(notnamebutid).width > canvas.width - 255)//Fuck i had to put yo there because it can return undefied while it can't
        
        do {
            ctx.font = `${size3 -= 5}px sans-serif`
        } while (ctx.measureText(message.content).width > canvas.width - 255)//Fuck i had to put yo there because it can return undefied while it can't

        ctx.beginPath()
        ctx.arc(100, 100, 75, 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.clip()

        const avatar = loadImage(message.member!.user.displayAvatarURL({
            format: "jpg"
        }))

        ctx.drawImage(avatar, 25, 25, 150, 150)

        const final = new MessageAttachment(canvas.toBuffer(), "test")
        return message.channel.send(final)
    }
}