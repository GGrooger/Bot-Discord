const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    var embed = new Discord.MessageEmbed()

    .setTitle(`Seu ping`)
    .setDescription(`O Ping do bot esta em: **${parseInt(bot.ws.ping)}**`)

    message.channel.send(embed)
}

exports.help = {
    name: 'ping'
}