const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`sem permissao`)

    var fala = args.slice(1).join(" ");
    if (!fala) return message.reply(`Preciso que me diga oque falar.`)

    var canal = message.mentions.channels.first() || message.guild.channels.get(args[0])
    if (!fala) return message.reply(`Preciso que mencione um canal`)

    canal.send(fala);
    return message.delete() // deletando o pedido do membro 
}

exports.help = {
    name: 'falar'
}