const discord = require('discord.js')

exports.run = (bot, message, args) => {
  
  let mod = new discord.MessageEmbed()
  
  .setTitle("Informações")
  .setDescription("🥳 TRAQUINAS 🥳 \n :diamonds: -suporte \n :diamonds: -avatar \n :diamonds: -denuncia \n :diamonds: -discord \n :diamonds: -servericon \n :diamonds: -serverinfo \n :diamonds: -sugestao \n :diamonds: -uptime \n :diamonds: -userinfo")
  .setColor("RANDOM")
  
  message.channel.send(mod)
  message.delete()
}

exports.help = {
  name: ('cumandossI')
}