
console.log("Ping command has been injected!")
module.exports = {
    name: "ping",
    aliases: "pong",
    description: "Check bot ping!",
    cooldown: 3,
    async: true,
    async execute(client, message, cmd, args, Discord){
        message.channel.send(`My ping is ${client.ws.ping}ms!`)
    }
}