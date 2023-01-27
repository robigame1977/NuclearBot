const {MessageEmbed} = require("discord.js")
const { version } = require("../index")
console.log("About command has been injected!")
module.exports = {
    name: "about",
    aliases: "autor",
    description: "About embed!",
    cooldown: 10,
    async: true,
    async execute(client, message, cmd, args, Discord){
        console.log("About command has been executed!")
        const botAuthor = "ISOPL & NuclearCat TDS"
        const Description = "😎 Under description you can see by who I was created and my version 🙂"
        const embed = new MessageEmbed()
        .setColor('#349beb')
        .setTitle('My global informations')
        .setDescription(Description)
        .addField(`💗 Developers of this bot are: `, `${botAuthor}`, true)
        .addField(`🔨 Bot version`, `${version}`, true)
        .addField(`🏓 My ping: ${client.ws.ping}`, `** **`, false)
        .setFooter(`FireBot v.${version}`)
        message.channel.send(embed)
    }
}