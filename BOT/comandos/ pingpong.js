const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send('pong');
}

exports.help = {
    name: `ping!`
}