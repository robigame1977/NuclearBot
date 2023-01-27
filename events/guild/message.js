const { Collection, MessageEmbed } = require("discord.js")
const { version } = require("../../index")
const cooldowns = new Map()

module.exports = (Discord, client, message) => {
    
    const prefix = '+'
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const cmdName = args.shift().toLowerCase()
    const cmd = client.commands.get(cmdName) || client.commands.find(a => a.aliases && a.aliases.includes(cmdName))

    if (!cmdName) return
    if (!cmdName.cooldown)
    
    if (!cooldowns.has(cmdName)){
        cooldowns.set(cmdName, new Collection())
    }
    if (!cmd) return

    const now = Date.now()
    const timestamps = cooldowns.get(cmdName)
    const cooldown = 10000
    
    if (!cmdName.cooldown) {
        
        const cooldown_amount = cooldown
        if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldown
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000
            const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setTitle("🕔 Cooldown")
            .setDescription(`Please wait ${timeLeft.toFixed(1,)} seconds before running command \`${cmdName}\``)
            .setFooter(`NuclearBot v.${version}`)
            return message.reply(embed)
        }
     }

     timestamps.set(message.author.id, now)
     setTimeout(() => {
        timestamps.delete(message.author.id)
     }, cooldown)
        //console.log("In loop")
        try{
            if (!cmdName) return
            client.commands.get(cmdName).execute(client, message, cmdName, args, Discord)
            console.log(`Executed ${cmdName}!`)
        } catch (err){
            message.reply("💔 | Error detected!")
            message.author.send("Please send this report to main developer of firebot!")
            message.author.send(`\`\`\`Command: ${cmdName}\nArgs: ${args}\nMessage: ${message}\nAuthor: ${message.author.tag}\nErr code: ${err}\`\`\``)
            console.log(err)
        }
        return
    }
    //console.log('After loop')
    const cooldown_amount = (cmdName.cooldown) * 1000
    
    

    if (time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount

        if (current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000

            return message.reply(`Please wait ${time_left.toFixed(1)} seconds before running command ${cmdName}`)
        }
    }

    time_stamps.set(() => message.author.id, current_time)
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount)


    try{
        if (!cmdName) return
        client.commands.get(cmdName).execute(client, message, cmdName, args, Discord)
        console.log(`Executed ${cmdName}!`)
    } catch (err){
        message.reply("💔 | Error detected!")
        message.author.send("Please send this report to main developer of firebot!")
        message.author.send(`\`\`\`Command: ${cmdName}\nArgs: ${args}\nMessage: ${message}\nAuthor: ${message.author.tag}\nErr code: ${err}\`\`\``)
        console.log(err)
    }
}