const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    message.channel.send('https://discord.gg/yxTjEgN')
  
  return message.delete()
}

exports.help = {
    name: 'discord'
}