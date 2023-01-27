console.log("Owner command has been injected!")
module.exports = {
    name: "owner",
    description: "Check bot ping!",
    async: true,
    cooldown: 0,
    async execute(client, message, args){
        message.channel.send('Haha yes!')
    }
}