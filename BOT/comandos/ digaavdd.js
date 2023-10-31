const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    message.channel.send(`${message.author.username} é lindo.`)
  
    return message.delete() // deletando o pedido do membro 
}

exports.help = {
    name: 'digaavdd'
}