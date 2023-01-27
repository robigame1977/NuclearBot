const chalk = require('chalk')
const { Client } = require('discord.js')
const client = new Client();
//const { token } = require('../../config')
const token = process.env.token;
client.on('ready', () => {
    module.exports();
});
module.exports = () =>{
    console.clear()
    console.log(chalk.bgGreen.bold(`Zalogowano jako NuclearBot!`));
    console.log(chalk.bgGray.bold(`Na Serwerach: ${client.guilds.cache.size}`))
    client.user.setActivity(`NuclearCat TDS`, { type: 'WATCHING' });
}
client.login(token);
