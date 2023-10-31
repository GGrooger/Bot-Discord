const Discord = require("discord.js");
 
exports.run = async(bot, message, args) => {
 
    let embed = new Discord.MessageEmbed()
 
    .setColor('BLACK')
    .setTitle(`🌌 ${message.guild.name}`)
    .setDescription(`**Clique [aqui](${message.guild.iconURL()}) para baixar**`)
    .setImage(message.guild.iconURL({dynamic: true, size : 2048}))
 
    message.channel.send(embed)
    message.delete()
 
}
 
exports.help = {
    name: 'servericon'
}