const Discord = require('discord.js')

exports.run = async(bot, message, args) => {
  
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply(`Sem permissão para usar esse comando!`)
  
  let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
  
  let member = message.mentions.members.first();
  
  if (!member) { message.channel.send(`${message.author.username} É necessario mencionar uma pessoa!`)}
  
  member.roles.add(muterole)

  let embed = new Discord.MessageEmbed()
  
  .setTitle('Mute')
  .setColor('RANDOM')
  .addField("Usuario Mutado:", member.user.tag)
  .setDescription(`Responsável: **${message.author.tag}**`)
  
  var canal = bot.channels.cache.get('713208800542326784') // O canal para enviarmos a embed do ban
  canal.send(embed) // Enviando no canal a embed
  
  return message.delete()
  
}

exports.help = {
  name: "mute"
}