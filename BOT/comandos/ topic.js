const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`sem permissao`)

    message.channel.send(`${message.author}, mencione um canal para adicionar um topico`).then(i => {
        let gc = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
        .on('collect', t => {
            canal = t.mentions.channels.first()

            if (!canal){
                message.reply(`mencione um canal`)
            } else {
                message.channel.send(`Ok ${message.author}, agora, escreva a descrição!`).then(r => {
                    let jc = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                    .on('collect', t => {
                        desc = t.content

                        let embed = new Discord.MessageEmbed()

                        .setColor('BLUE')
                        .setTitle(`Setar topico`)
                        .setDescription(`Comando feito com sucesso`)

                        message.channel.send(embed)
                        canal.setTopic(desc)
                    })
                })
            }
        })
    })
}

exports.help = {
    name: 'topic'
}