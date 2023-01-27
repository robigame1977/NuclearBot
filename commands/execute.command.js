const {MessageEmbed} = require("discord.js");
const { owner_bot_c2, owner_bot_c } = require("../config");
const { wersja } = require(__dirname + "/../config.js")
const chalk = require("chalk")
module.exports = {
    name: "+execute",
    description: "Executing all JS commands!",
    args: true,
    usage: `[Js Commands]`,
    guildOnly: true,
    cooldown: 1,
    aliases: [],
    async: false,
    without_log: true,

    run(message, args, client, kolor, channel, send) {
        const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }
        const args1 = message.content.split(" ").slice(1);
        if(!args[0]) return
    if(message.author.tag == owner_bot_c) {
      try {
        console.log(chalk.bgRed.bold("Wykryto komendę właściciela execute", args1))
        const code = args1.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
          if (this.without_log != true) {
            const embed = new MessageEmbed()
            .setColor("#456784")
            .setTitle(`Executed!`)
            .setDescription(`\`\`\`${clean(evaled)}\`\`\``)
            .setFooter(`NuclearBot v.${wersja}`)
            message.channel.send(embed)
          }
          
        // msg.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        const embed = new MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`ERROR`)
        .setDescription(`\`\`\`${clean(err)}\`\`\``)
        .setFooter(`NuclearBot v.${wersja}`)
        message.channel.send(embed)
      }
    } else {
      const embed = new MessageEmbed()
      .setColor('#ff0000')
      .setTitle('❌ Error!')
      .setDescription("You don't have permissions!")
      .addField("You need to be owner to run this command!", "   ")
      .setFooter(`Mój ping: ${client.ws.ping} | NuclearBot v.${wersja}`)
      message.channel.send(embed)
    }
    }
}

/*
else if (message.author.tag == owner_bot_c2) {
      try {
        console.log(chalk.bgRed.bold("Wykryto komendę właściciela 2 execute", args1))
        const code = args1.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
          message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        const embed = new MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`\`ERROR\``)
        .setDescription(`\`\`\`${clean(err)}\`\`\``)
        .setFooter(`NuclearBot v.${wersja}`)
        message.channel.send(embed)
      }
    }*/