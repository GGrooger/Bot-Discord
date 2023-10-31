const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply (`Você não possui permissão.`)

    message.channel.send(`Em qual canal você deseja iniciar?`).then(msg => {
        let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
        .on(`collect`, c => {
            canal = c.mentions.channels.first()
            if (!canal) {
                message.reply(`Mencione um canal!`)
            } else {
                message.channel.send(`Qual a mensagem desse anuncio?`).then(msg2 => {
                    let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on(`collect`, c => {
                        desc = c.content

                        message.channel.send(`Qual o titulo?`).then(msg3 => {
                            let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on(`collect`, c => {
                                title = c.content

                                message.channel.send(`Anuncio enviado ao canal ${canal} com sucesso`)

                                let embed = new Discord.MessageEmbed()

                                .setColor('BLACK')
                                .setFooter(`Comando efetuado por: ${message.author.username}`, message.author.avatarURL)
                                .setTitle(title)
                                .setDescription(desc)
                                .setTimestamp()
                                

                                canal.send(`@everyone`, embed)
                            })
                        })
                    })
                })
            }
        })
    })
}

exports.help = {
    name: 'anuncio'
}