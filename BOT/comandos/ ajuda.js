const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (bot, message, args) => { // setando a base
// avisando sobre a embed de ajuda na DM

     const embed = new Discord.MessageEmbed()
        .setTitle(`COMANDOS!`)
        .setColor("RANDOM")
        .setDescription('Para ter mais acesso e facilidade aos meus comandos, reaja com algum emoji e receba as informações necessárias. \n\n\n👮 `Moderação` \n🥳 `Diversão`\n📒 `Informações`')
    message.channel.send({embed}).then(msg => { // evento para reagir a mensagem
            msg.react('📒').then(r => { // informações
            msg.react('👮').then(r => { // moderação
            msg.react('🥳').then(r => { // Diversão
            msg.react('🔙').then(r => { // inicio
            })
      })
    })
 })
        // filtros de cada reação, para configurar a informação do autor
        const BotFilter = (reaction, user) => reaction.emoji.name === '📒' && user.id === message.author.id;
        const UtilidadesFilter = (reaction, user) => reaction.emoji.name === '🥳' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id;
        const BackFilter = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id;
        // coletores de cada reação, para ver confirmar tal membro 
        const Bots = msg.createReactionCollector(BotFilter);
        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Back = msg.createReactionCollector(BackFilter);

        Bots.on('collect', r2 => {
         const embed = new Discord.MessageEmbed()
          .setTitle('📒 Informações')
          .addField(`\`-suporte\``, `Para você falar com um ADM`)
          .addField(`\`-avatar\``, `Para pegar o avatar de um membro`)
          .addField(`\`-denuncia\``, `Para denuncia um de nossos membros`)
          .addField(`\`-discord\``, `Para pegar um convite de nosso discord`)
          .addField(`\`-servericon\``, `Para pegar o icon do servidor`)
          .addField(`\`-serverinfo\``, `Para ver as informações do servidor`)
          .addField(`\`-sugestao\``, `Caso queira sugerir algo para o servidor`)
          .addField(`\`-uptime\``, `Ver quanto tempo o bot não dorme`)
          .addField(`\`-userinfo\``, `Para ver as informações de um usuario`)

          .setColor("BLACK")
          
          msg.edit(embed)
        }) 

        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
            const embed = new Discord.MessageEmbed()
                .setTitle("🥳 Diversão")
                .addField(`\`-dado\``, `Para rodar um dado`)
                .addField(`\`-letras\``, `Para enviar msg com letras modificadas`)
                .addField(`\`-pergunta\``, `Pergunte algo ao sabio bot!`)
                .addField(`\`-roleta\``, `Gire a roleta e torça pra ficar vivo`)

                .setColor("GOLD")

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
                .setTitle("👮 Moderação")
                .addField(`\`-anuncio\``, `Anuncia para nossos membros`)
                .addField(`\`-avisar\``, `Avise um membro que não se comporta`)
                .addField(`\`-ban\``, `Bani um membro`)
                .addField(`\`-falar\``, `Faz o bot falar`)
                .addField(`\`-kickar\``, `Kicka um membro`)
                .addField(`\`-limparchat\``, `Limpa o chat`)
                .addField(`\`-mute\``, `Muta um membro`)
                .addField(`\`-topic\``, `Adiona um topico no canal`)
                .addField(`\`-unmute\``, `Remove o mute do membro`)
                .addField(`\`-lock\``, `Impedir de membros enviarem mensagem em um chat`)
                .addField(`\`-unlock\``, `Remove o -lock!`)
                .setColor("BLUE")
            msg.edit(embed);
        })

        Back.on('collect', r2 => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`COMANDOS!`)
        .setColor("RANDOM")
        .setDescription('Para ter mais acesso e facilidade aos meus comandos, reaja com algum emoji e receba as informações necessárias. \n\n\n👮 `Moderação` \n🥳 `Diversão`\n📒 `Informações`')
            
           msg.edit(embed);  
        });
    });
    message.delete()
}
exports.help = { // setando o nome do arquivo, seguido do prefix
    name: "ajuda",
    aliases: ['help', 'comandos', 'commands']
}