const discord = require('discord.js')

exports.run = (bot, message, args) => {
   
  let mod = new discord.MessageEmbed()
  
  .setTitle("Diversão")
  .setDescription("🥳 TRAQUINAS 🥳 \n :diamonds: -dado \n :diamonds: -letras \n :diamonds: -pergunta \n :diamonds: -roleta")
  .setColor("RANDOM")
  
  message.channel.send(mod)
  message.delete()
}

exports.help = {
  name: ('cumandossD')
} 