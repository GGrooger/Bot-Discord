const discord = require('discord.js')

exports.run = (bot, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Apenas staff conseguem usar esse comando!`)
  
  let mod = new discord.MessageEmbed()
  
  .setTitle("Moderação")
  .setDescription("🥳 TRAQUINAS 🥳 \n :diamonds: -anuncio \n :diamonds: -avisar \n :diamonds: -ban \n :diamonds: -falar \n :diamonds: -kickar  \n :diamonds: -limparchat \n :diamonds: -mute \n :diamonds: -topic \n :diamonds: -unmute")
  .setColor("RANDOM")
  
  message.channel.send(mod)
  message.delete()
}

exports.help = {
  name: ('cumandossM')
} 