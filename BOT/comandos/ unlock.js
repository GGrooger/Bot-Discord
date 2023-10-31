const discord = require("discord.js")

exports.run = async(bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply (`Você não possui permissão para usar este comando.`)

    let channel = message.mentions.channels.first() || message.channel;

    
    channel.updateOverwrite(channel.guild.roles.everyone, { SEND_MESSAGES: null, ADD_REACTIONS: null});

    let embed = new discord.MessageEmbed()

    .setTitle(`Canal Desbloqueado! ✅`)
    .setDescription(`Author do comando: ${message.author.tag}`)
    .setColor("BLACK")

    message.channel.send(embed)
    message.delete()
}


exports.help = {
    name: "unlock"
}