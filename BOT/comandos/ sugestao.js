const Discord = require('discord.js'); // Puxando a livraria Discord.js
const c = require('../config.json') // Puxando o conteúdo do arquivo config.json

exports.run = (bot, message, args) => {

// Embed para explicar o uso do comando
    let erro = new Discord.MessageEmbed()

  .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
  .setDescription(`\`sugestao\` *- Deixe uma sugestão para o servidor`)
  .addField(`:hammer: **Uso**`, `\`${c.prefix}sugestao <sugestão>\``)
  .addField(`:book: **Exemplo**`, `\`${c.prefix}sugestao Editar o discord\``)
  .addField(`:bookmark: **Permissão**`, `\`Nenhuma\``)
  .setColor('#8c0046')   
 
  var canal = bot.channels.cache.get('712747419326087289') // ID do canal aonde iremos enviar a sugestão do usuário
  
  var sugestao = args.slice(0).join(' '); // Uma variável, contendo tudo o que o usuário escrever
  if (!sugestao) { // Caso o usuário não escreva nada, iremos avisar que ele necessita
    return message.reply(erro)
  } else { // Caso ele escreva, iremos enviar a sugestão para o canal
      let embed = new Discord.MessageEmbed()
        .setTitle(`SUGESTÃO`)
        .setDescription(`:bust_in_silhouette: Autor: ${message.author}\n\n:inbox_tray: Sugestão: ${sugestao}`)
        .setColor('RANDOM')
        .setFooter(`Deixe sua opnião sobre, clicando em um dos emojis abaixo!`)
        
        canal.send(embed) // Enviando no canal a embed
        .then(function (msg) { // Abrindo a função 'then' (Famosa aqui haha)
            msg.react("✅"); // Reagindo com os emojis, um legalzin e outro deslike
            msg.react("❌"); 
   })  
 }
 return message.delete() // deletando o pedido do membro 
}
exports.help = {
 name: 'sugestao',
}