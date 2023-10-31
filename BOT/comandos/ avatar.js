const Discord = require("discord.js");
 
exports.run = async(bot, message, args) => {
 
    let member = message.mentions.users.first() || message.author;
 
    let embed = new Discord.MessageEmbed()
 
    .setTitle(`🌌 ${message.author.username}`)
    .setDescription(  `**Clique [aqui](${member.displayAvatarURL()}) para baixar**`)
    .setImage(member.displayAvatarURL({dynamic: true, size : 2048}))
    .setColor("BLACK")
 
    message.channel.send(embed)
    message.delete()
 
}
 
exports.help = {
    name: 'avatar'
}