  const Discord = require('discord.js')

exports.run = async(bot, message, args) => {
 
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply(`Sem permissão para usar esse comando!`)
  
  let member = message.mentions.members.first();
  if (!member) { return message.channel.send('Mencione um usuario!')}
  
  let unmuterole = message.guild.roles.cache.find(x => x.name === "Muted")
  member.roles.remove(unmuterole)
  
  let embed = new Discord.MessageEmbed()
  
  .setTitle('UnMute')
  .setColor('RANDOM')
  .addField("Usuario Desmutado:", member.user.tag)
  .setDescription(`Responsável: **${message.author.tag}**`)
  
  var canal = bot.channels.cache.get('713209096811184149') // O canal para enviarmos a embed do ban
  canal.send(embed) // Enviando no canal a embed
  message.delete()
  
}

exports.help = {
  name: "unmute"
}