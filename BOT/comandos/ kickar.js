..const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = async (bot, message, args) => { // setando as bases

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("permissões insuficientes!") // caso o membro não possua a permissão 'EXPULSAR_MEMBROS', vamos botar o erro

    let member = message.mentions.members.first() // puxando um membro mencionavel
    if (!member) return message.reply("Selecione um usuário válido!") // caso o autor esqueça de mencionar um membro, vamos dar o erro
    if (!member.bannable) return message.reply("Não é possível punir este usuário.") // caso o membro tenha um cargo acima do seu bot, ele não vai expulsar
    let reason = args.slice(1).join(' ') // puxando um motivo
    if (!reason) reason = "Nenhuma razão fornecida" // caso nao haja, daremos com tal mensagem
    await member.kick(reason) // finalizando com o kick
      .catch(error => message.reply(`${message.author}, Não foi possível completar esta punição devido ao erro: ${error}`)) // caso ocorra um erro no final, vamos filtrar e avisar qual foi

      let pEmbed = new Discord.MessageEmbed()
          .setTitle("KICK!")
          .addField("Usuário Kickado:", member.user.tag)
          .addField("Staff Responsável:", message.author.tag)
          .addField("Motivo do Kick:", reason)
          .setFooter(`Autor do Comando: ${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("RANDOM")
          .setTimestamp()
      
          var canal = bot.channels.cache.get('712743220118945803')
          canal.send(pEmbed)
          message.delete()
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'kickar'
}