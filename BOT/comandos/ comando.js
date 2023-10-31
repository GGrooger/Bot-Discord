const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  
  let comand = new Discord.MessageEmbed()
  
  .setTitle("Comandos")
  .addField("-moderacao", "🤖 | Comandos de moderação do servidor!")
  .addField("-diversao", "🙃 | Comandos de diversão do servidor!")
  .addField("-informacoes", "🗒️ | Comandos de informações do servidor!")
  .setColor("RANDOM")
  
  message.channel.send(comand)
  message.delete()
  
}


exports.help = {
    name: 'cumandoss'
}