console.log("Status command has been injected!")
module.exports = {
    name: "+status",
    aliases: "+status",
    description: "Check bot ping!",
    cooldown: 3,
    async: true,
    run(client, message, cmd, args, Discord){
        if (cmd == "+status1") {
            if (msg.author.tag == owner_bot_c || msg.author.tag == owner_bot_c2) {
            const cstatus = args1.join(" ")
            client.user.setActivity(cstatus, { type: "PLAYING" });
            console.log(chalk.bgRed.bold("Wykryto komendę właściciela: ", cmd, args1))
          }}
        else
          if (cmd == "+status2") {
            if (msg.author.tag == owner_bot_c || author_tag == owner_bot_c2) {
              const cstatus = args1.join(" ")
            client.user.setActivity(cstatus, { type: "WATCHING" });
            console.log(chalk.bgRed.bold("Wykryto komendę właściciela: ", cmd, args1))
            }
          }
        else
          if (cmd == "+status3") {
            if (msg.author.tag == owner_bot_c || author_tag == owner_bot_c2) {
              const cstatus = args1.join(" ")
            client.user.setActivity(cstatus, { type: "STREAMING" });
            console.log(chalk.bgRed.bold("Wykryto komendę właściciela: ", cmd, args1))
            }
          }
        else
          if (cmd == "+status4") {
            if (msg.author.tag == owner_bot_c || author_tag == owner_bot_c2) {
              const cstatus = args1.join(" ")
            client.user.setActivity(cstatus, { type: "LISTENING" });
            console.log(chalk.bgRed.bold("Wykryto komendę właściciela: ", cmd, args1))
            }
          }
        else
          if (cmd == "+status5") {
            if (msg.author.tag == owner_bot_c || author_tag == owner_bot_c2) {
              const cstatus = args1.join(" ")
            client.user.setActivity(cstatus, { type: "COMPETING" });
            console.log(chalk.bgRed.bold("Wykryto komendę właściciela: ", cmd, args1))
            }
          }
        else
          if (cmd == "+status6") {
            if (msg.author.tag == owner_bot_c || author_tag == owner_bot_c2) {
              const cstatus = args1.join(" ")
            client.user.setActivity(cstatus, { type: "CUSTOM_STATUS" });
            console.log(chalk.bgRed.bold("Wykryto komendę właściciela: ", cmd, args1))
            }
          }
          else {
            if (msg.author.tag == owner_bot_c || msg.author.tag == owner_bot_c2) {
                const embed = new MessageEmbed()
                .setColor(kolor_owner)
                .setTitle('🎡 Status bota | Pomoc')
                .setDescription('Example: `++s1 Status`')
                .addField("Fields:", `**PLAYING**, **WATCHING**, STREAMING, **LISTENING**, **COMPETING**, CUSTOM_STATUS`, true)
                .addField("opis komend:", "`s1 = status grania`, `s2 = status oglądania` itd. aż do `s6 = CUSTOM_STATUS (Może nie zadziałać)`", false)
                .setFooter(`Mój ping: ${client.ws.ping} | FireBot v.${wersja}`)
              msg.channel.send(embed)
              } else {
                const embed = new MessageEmbed()
                .setColor(kolor_blad)
                .setTitle('❌ Błąd!')
                .setDescription("Nie posiadasz permisji!")
                .addField("Potrzebna permisja to", `**WŁAŚCICIEL**`, true)
                .setFooter(`Mój ping: ${client.ws.ping} | FireBot v.${wersja}`)
              msg.channel.send(embed)
              }
          }
          
    }
}


