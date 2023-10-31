const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`sem permissao`)

    let membro = message.mentions.users.first()
    if (!membro) message.delete() return message.reply(`mencione um membro`)

    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`escreva um motivo`)

    let dda = new Discord.MessageEmbed()

    .setTitle(` ${membro.username}`)
    .setColor('RED')
    .setFooter(`responsavel: ${message.author.username}`, message.author.avatarURL)
    .setDescription(motivo)

    membro.send(dda)
    message.channel.send(`:thinking: - Finalizei esse comando com sucesso!`)

}

exports.help = {
    name: 'avisar'
}